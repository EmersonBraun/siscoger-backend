import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { InjectRepository } from '@nestjs/typeorm';
import { compare } from 'bcrypt';
import { CreateUserDto } from 'src/modules/user/dtos';
import { User } from 'src/modules/user/entity/user.entity';
import { Repository } from 'typeorm';
import { serializeUserDto } from '../../../common/utils';
import { LoginDto } from '../dtos/login.dto';

@Injectable()
export class AuthService {
  constructor(
    @InjectRepository(User)
    private repository: Repository<User>,
    private jwtService: JwtService,
  ) {}

  async login({ rg, password }: LoginDto): Promise<CreateUserDto> {    
    const user = await this.repository.findOne({ where: { rg } });
    
    if (!user) {
        throw new HttpException('User not found', HttpStatus.UNAUTHORIZED);    
    }
      
    const areEqual = await compare(user.password, password);
    
    if (!areEqual) {
        throw new HttpException('Invalid credentials', HttpStatus.UNAUTHORIZED);    
    }
    
    return serializeUserDto(user);  
  }

  async validateUser(payload: LoginDto): Promise<CreateUserDto> {
    const user = await this.repository.findOne(payload);
    if (!user) {
      throw new HttpException('Invalid token', HttpStatus.UNAUTHORIZED);
    }
    return user;
  }

  private _createToken(user: CreateUserDto): any {
    const expiresIn = process.env.EXPIRESIN;

    const accessToken = this.jwtService.sign(user);
    return {
      expiresIn,
      accessToken,
    };
  }

  // async LoginLDAP({ rg, password }: LoginDto): Promise<CreateUserDto> {    
  //   const user = await this.repository.findOne({ where: { rg } });
    
  //   if (!user) {
  //       throw new HttpException('User not found', HttpStatus.UNAUTHORIZED);    
  //   }
      
  //   const areEqual = await compare(user.password, password);
    
  //   if (!areEqual) {
  //       throw new HttpException('Invalid credentials', HttpStatus.UNAUTHORIZED);    
  //   }
    
  //   return serializeUserDto(user);  
  // }
  
}
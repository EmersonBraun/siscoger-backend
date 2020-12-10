import { HttpException, HttpStatus, Injectable, Logger, NotFoundException } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import bcrypt from 'bcrypt';
import { CreateUserDto } from 'src/modules/user/dtos';
import { User } from 'src/modules/user/entity/user.entity';
import { UserService } from 'src/modules/user/service/user.service';
import { serializeUserDto } from '../../../common/utils';
import { LoginDto } from '../dtos/login.dto';

@Injectable()
export class AuthService {
  private logger = new Logger('HTTP');
  constructor(
    private repository: UserService,
    private jwtService: JwtService,
  ) {}

  async login({ rg, password }: LoginDto): Promise<any> {    
    const userData = await this.repository.findOne({ where: { rg } });
    if (!userData) {
      throw new NotFoundException('User not found');    
    }
    
    const areEqual = await bcrypt.compare(password, userData.password);
    if (!areEqual) {
        throw new HttpException('Invalid credentials', HttpStatus.UNAUTHORIZED);    
    }
    
    const user = serializeUserDto(userData as User);
    const token = this._createToken(userData as User)
    return {user, token}
  }

  async validateUser(payload: LoginDto): Promise<CreateUserDto> {
    const user = await this.repository.findOne(payload);
    if (!user) {
      throw new HttpException('Invalid token', HttpStatus.UNAUTHORIZED);
    }
    return user;
  }

  private _createToken(user: User): any {
    const expiresIn = process.env.EXPIRESIN;

    const payload = { username: user.rg, sub: user.id };
    try {
      const accessToken = this.jwtService.sign(payload);
      return {
        expiresIn,
        accessToken,
      };  
    } catch (error) {
      this.logger.verbose(error)
      return error
    }
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
/* eslint-disable @typescript-eslint/no-unused-vars */
import { HttpException, HttpStatus, Injectable, Logger, NotFoundException } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import bcrypt from 'bcrypt';
import { User } from '../../user/entity/user.entity';
import { UserService } from '../../user/service/user.service';

@Injectable()
export class AuthService {
  private logger = new Logger('HTTP')
  constructor(
    private readonly usersService: UserService,
    private readonly jwtService: JwtService,
  ) {}

  async validateUser(rg: string, pass: string): Promise<any> {
    const userData = await this.usersService.findOne({ where: { rg } });
    
    if (!userData) {
      throw new NotFoundException('User not found');    
    }
    
    const areEqual = await bcrypt.compare(pass, userData.password);
    if (!areEqual) {
      throw new HttpException('Invalid credentials', HttpStatus.UNAUTHORIZED);    
    }

    const { password, ...user } = userData;

    return {user}

  }

  private _createToken(user: User): any {
    const expiresIn = process.env.EXPIRESIN;
    user['roles'] = []
    try {
      const accessToken = this.jwtService.sign(user);
      return {
        expiresIn,
        accessToken,
      };  
    } catch (error) {
      this.logger.verbose(error)
      return error
    }
  } 

  async login(userData: any) {
    const token = this._createToken(userData)
    return { user: userData, token };
  }
}
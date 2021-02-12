import {
  HttpException,
  HttpStatus,
  Injectable,
  Logger,
  NotFoundException
} from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import bcrypt from 'bcrypt';
import { activityLog } from '../../../common/activiti-log';
import { UserService } from '../../user/service/user.service';
import { getCleanDataOfUser } from './mapper.service';

@Injectable()
export class AuthService {
  private logger = new Logger('HTTP');

  constructor(
    private readonly usersService: UserService,
    private readonly jwtService: JwtService,
  ) {}

  async validateUser(rg: string, pass: string): Promise<any> {
    const userData = await this.usersService.findByRg(rg);
    if (!userData) {
      throw new NotFoundException('User not found');
    }

    const areEqual = await bcrypt.compare(pass, userData.password);
    if (!areEqual) {
      throw new HttpException('Invalid credentials', HttpStatus.UNAUTHORIZED);
    }

    const { password, ...user } = userData;
    return { user };
  }

  private _createToken(user: any): any {
    try {
      return this.jwtService.sign(user);
    } catch (error) {
      this.logger.verbose(error);
      return error;
    }
  }

  async login({ rg, password }) {
    const userData = await this.validateUser(rg, password);
    const { user, roles, permissions } = getCleanDataOfUser(userData);
    const token = this._createToken({ ...user, roles, permissions });

    await activityLog({ module: 'login', action: 'login', data: user, user });

    return { token, user, roles, permissions };
  }
}

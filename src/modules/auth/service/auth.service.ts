import {
  HttpException,
  HttpStatus,
  Inject,
  Injectable,
  Logger,
  NotFoundException
} from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import bcrypt from 'bcrypt';
import { User } from 'src/modules/user/entity/user.entity';
import { UserService } from '../../user/service/user.service';
import { getCleanDataOfUser } from './mapper.service';

@Injectable()
export class AuthService {
  private logger = new Logger('HTTP');

  constructor(
    @Inject() private readonly usersService: UserService,
    @Inject() private readonly jwtService: JwtService, // @Inject() private log: LogService,
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

  async login(userData: { user: { [x: string]: User; roles: any } }) {
    const { user, roles, permissions } = getCleanDataOfUser(userData);
    const token = this._createToken({ ...user, roles, permissions });
    // await this.log.create({ module: 'login', action: 'login', data: user });
    return { token, user, roles, permissions };
  }
}

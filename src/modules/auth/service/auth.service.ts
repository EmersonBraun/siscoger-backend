import {
  HttpException,
  HttpStatus,
  Injectable,
  Logger,
  NotFoundException,
} from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import bcrypt from 'bcrypt';
import { RedisCacheService } from '../../cache/redis-cache.service';
import { LogService } from '../../log/service/log.service';
import { UserService } from '../../user/service/user.service';

@Injectable()
export class AuthService {
  private logger = new Logger('HTTP');

  constructor(
    private readonly usersService: UserService,
    private readonly jwtService: JwtService,
    private readonly redisCacheService: RedisCacheService,
    private log: LogService,
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

<<<<<<< HEAD
  async login({rg, password}) {
    const userData = await this.validateUser(rg, password)
    const {user, roles, permissions} = this.getCleanDataOfUser(userData)
    const token = this._createToken(user)
    await this.redisCacheService.set(user.rg,{user, roles, permissions},86400)
    await this.log.create({ module: 'login', action: 'login', data: user,})
    return {token, user, roles, permissions}
=======
  async login(userData: { user: { [x: string]: User; roles: any } }) {
    const { user, roles, permissions } = this.getCleanDataOfUser(userData);
    const token = this._createToken(user);
    await this.redisCacheService.set(
      user.rg,
      { user, roles, permissions },
      86400,
    );
    await this.log.create({ module: 'login', action: 'login', data: user });
    return { token, user, roles, permissions };
>>>>>>> f3570f884e2cdcf6d9de59e2803ba90a53e52660
  }

  getCleanDataOfUser(userData: any) {
    const permissionsData: string[] = [];
    let rolesData = [];
    const { roles, ...user } = userData.user;
    if (roles.length) {
      rolesData = roles.map(
        (role: { role?: string; permissions?: unknown[] }) => {
          const { permissions } = role;
          if (permissions.length) {
            const p = permissions.map(
              (permission: { permission: string }) => permission.permission,
            );
            permissionsData.push(...p);
          }
          return role.role;
        },
      );
    }

    let cleanDuplicatedPermissions = [];
    if (permissionsData.length) {
      cleanDuplicatedPermissions = [...new Set(permissionsData)];
    }
    return { user, roles: rolesData, permissions: cleanDuplicatedPermissions };
  }
}

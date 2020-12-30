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
    const userData = await this.usersService.findByRg(rg);
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
    try {
      return this.jwtService.sign(user); 
    } catch (error) {
      this.logger.verbose(error)
      return error
    }
  } 

  async login(userData: any) {
    const {user, roles, permissions} = this.getCleanDataOfUser(userData)
    const token = this._createToken(user as User)
    return {token, user, roles, permissions}
  }

  getCleanDataOfUser (userData: { user: { [x: string]: any; roles: any; }; }) {
    const permissionsData:string[] = []
    let rolesData = []
    const { roles, ...user } = userData.user
    if (roles.length) {
      rolesData = roles.map((role: { role?: string; permissions?: unknown[]; }) => {
        const { permissions } = role
        if (permissions.length) {
          const p = permissions.map((permission: { permission: string; }) => permission.permission)
          permissionsData.push(...p)
        }
        return role.role
      })
    }

    let cleanDuplicatedPermissions = []
    if (permissionsData.length) {
      cleanDuplicatedPermissions = [...new Set(permissionsData)]
    }
    return {user, roles:rolesData, permissions:cleanDuplicatedPermissions }
  }
}
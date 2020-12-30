// /* eslint-disable @typescript-eslint/no-unused-vars */
import { CanActivate, ExecutionContext, Injectable, UnauthorizedException } from '@nestjs/common';
import { Reflector } from '@nestjs/core';
import { RedisCacheService } from '../../modules/cache/redis-cache.service';

@Injectable()
export class ACLGuard implements CanActivate {
  constructor(
    private reflector: Reflector,
    private readonly redisCacheService: RedisCacheService,
  ) {}

  async canActivate(context: ExecutionContext): Promise<boolean> {
    const acl = this.reflector.get('acl', context.getHandler());
    if (!acl) {
      return true;
    }

    const request = context.switchToHttp().getRequest();
    if (!request?.user?.user) {
      throw new UnauthorizedException('Not logged')
    }
    const { rg } = request.user.user;
    const userData = await this.redisCacheService.get(rg)
    const getVerifiedRoles = this.verifyIfHasAnyRole(acl.roles, userData.roles)
    const getVerifiedPermission = this.verifyIfHasAnyPermission(acl.permissions, userData.permissions)

    return getVerifiedRoles && getVerifiedPermission
  }

  verifyIfHasAnyRole(aclRoles: string[], useRoles: string[]) {
    if (!aclRoles.length) return true
    let hasAnyRole = false
    aclRoles.map((role) => {
      if (useRoles.includes(role)) hasAnyRole = true
    })
    return hasAnyRole
  }

  verifyIfHasAnyPermission(aclPermissions: string[], usePermissions: string[]) {
    if (!aclPermissions.length) return true
    let hasAnyPermission = false
    aclPermissions.map((role) => {
      if (usePermissions.includes(role)) hasAnyPermission = true
    })
    return hasAnyPermission
  }



}
// /* eslint-disable @typescript-eslint/no-unused-vars */
import {
  CanActivate,
  ExecutionContext,
  Injectable,
  UnauthorizedException,
} from '@nestjs/common';
import { Reflector } from '@nestjs/core';

@Injectable()
export default class ACLGuard implements CanActivate {
  constructor(private reflector: Reflector) {}

  async canActivate(context: ExecutionContext): Promise<boolean> {
    const acl = this.reflector.get('acl', context.getHandler());
    if (!acl) {
      return true;
    }

    const request = context.switchToHttp().getRequest();
    if (!request?.user) {
      throw new UnauthorizedException('Not logged');
    }
    const { roles, permissions } = request.user;

    const getVerifiedRoles = this.verifyIfHasAnyRole(acl.roles, roles);
    const getVerifiedPermission = this.verifyIfHasAnyPermission(
      acl.permissions,
      permissions,
    );

    return getVerifiedRoles && getVerifiedPermission;
  }

  verifyIfHasAnyRole(aclRoles: string[], useRoles: string[]): boolean {
    if (!aclRoles.length) return true;
    let hasAnyRole = false;
    aclRoles.forEach(role => {
      if (useRoles.includes(role)) hasAnyRole = true;
    });
    return hasAnyRole;
  }

  verifyIfHasAnyPermission(
    aclPermissions: string[],
    usePermissions: string[],
  ): boolean {
    if (!aclPermissions.length) return true;
    let hasAnyPermission = false;
    aclPermissions.forEach((role: string): void => {
      if (usePermissions.includes(role)) hasAnyPermission = true;
    });
    return hasAnyPermission;
  }
}

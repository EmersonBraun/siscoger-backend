/* eslint-disable @typescript-eslint/no-unused-vars */
import { Injectable, UnauthorizedException } from '@nestjs/common';
import { AuthGuard } from '@nestjs/passport';
 
@Injectable()
export class JwtAuthGuard extends AuthGuard('jwt') {
  handleRequest(err, user, info) {
    // no error is thrown if no user is found
    // You can use info for logging (e.g. token is expired etc.)
    // e.g.: if (info instanceof TokenExpiredError) ...
    if (info?.name) {
      throw new UnauthorizedException(info.message)
    }
    return user;
  }
}

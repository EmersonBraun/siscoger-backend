import { Injectable, Logger, UnauthorizedException } from '@nestjs/common';
import { ContextIdFactory, ModuleRef } from '@nestjs/core';
import { PassportStrategy } from '@nestjs/passport';
import { Strategy } from 'passport-local';
// import { CreateUserDto } from '../../user/dtos';
import { AuthService } from '../service/auth.service';

@Injectable()
export class LocalStrategy extends PassportStrategy(Strategy) {
  private logger = new Logger('HTTP');
  constructor(
    private moduleRef: ModuleRef,
    private readonly authService: AuthService
  ) {
    super({
      passReqToCallback: true,
      usernameField: 'rg',
      passwordField: 'password',
    });
  }

  async validate(request: Request, rg: string, password: string): Promise<any> {
    console.log('aaaaaaaaaaaaaa')
    const contextId = ContextIdFactory.getByRequest(request);
    const authService = await this.moduleRef.resolve(AuthService, contextId);
    const user = await authService.validateUser(rg, password);
    if (!user) {
      throw new UnauthorizedException();
    }
    return user;
  }
}
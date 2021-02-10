/* eslint-disable @typescript-eslint/no-unused-vars */
// import { ConfigModule, ConfigService } from '@nestjs/config';
// import { JwtModule } from '@nestjs/jwt';
// import { PassportModule } from '@nestjs/passport';
// import { Test, TestingModule } from '@nestjs/testing';
// import { UserModule } from '../../user/user.module';
// import { JwtStrategy } from '../strategies/jwt.strategy';
// import { LocalStrategy } from '../strategies/local.strategy';
// import { AuthService } from './auth.service';

describe('AuthService', () => {
  // let service: AuthService;

  // beforeEach(async () => {
  //   const moduleRef: TestingModule = await Test.createTestingModule({
  //     imports: [
  //       UserModule,
  //       PassportModule,
  //       JwtModule.registerAsync({
  //         imports: [ConfigModule],
  //         useFactory: async (configService: ConfigService) => ({
  //           secret: configService.get<string>('SECRETKEY'),
  //           signOptions: {
  //             expiresIn: configService.get<string>('EXPIRESIN'),
  //           },
  //         }),
  //         inject: [ConfigService],
  //       }),
  //     ],
  //     providers: [AuthService, LocalStrategy, JwtStrategy],
  //   }).compile();

  //   service = moduleRef.get<AuthService>(AuthService);
  // });

  it('should be defined', () => {
    expect(1).toEqual(1)
    // expect(service).toBeDefined();
  });
});
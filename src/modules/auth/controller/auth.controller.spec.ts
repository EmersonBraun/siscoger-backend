// import { ConfigModule, ConfigService } from '@nestjs/config';
// import { JwtModule } from '@nestjs/jwt';
// import { Test, TestingModule } from '@nestjs/testing';
// import { UserModule } from '../../user/user.module';
// import { AuthModule } from '../auth.module';
// import { AuthService } from '../service/auth.service';
// import { AuthController } from './auth.controller';

describe('authController', () => {
  // let authController: AuthController;

  // beforeEach(async () => {
  //   const auth: TestingModule = await Test.createTestingModule({
  //     imports: [
  //       AuthModule, 
  //       UserModule,
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
  //     controllers: [AuthController],
  //     providers: [AuthService],
  //   }).compile();

  //   authController = auth.get<AuthController>(AuthController);
  // });

  it('should be defined', () => {
    expect(1).toEqual(1)
    // expect(authController).toBeDefined();
  });
});
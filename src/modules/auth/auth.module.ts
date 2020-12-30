import { Module } from '@nestjs/common';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { JwtModule } from "@nestjs/jwt";
import { PassportModule } from "@nestjs/passport";
import { RedisCacheModule } from '../cache/redis-cache.module';
import { UserModule } from "../user/user.module";
import { AuthController } from "./controller/auth.controller";
import { AuthService } from "./service/auth.service";
import { JwtStrategy } from './strategies/jwt.strategy';
import { LocalStrategy } from './strategies/local.strategy';


@Module({  
  imports: [   
    UserModule,  
    RedisCacheModule,
    PassportModule.register({
      defaultStrategy: 'jwt',
      property: 'user',
      session: false,
    }),
    JwtModule.registerAsync({
      imports: [ConfigModule],
      useFactory: async (configService: ConfigService) => ({
        secret: configService.get<string>('SECRETKEY'),
        signOptions: {
          expiresIn: configService.get<string>('EXPIRESIN'),
        },
      }),
      inject: [ConfigService],
    }),
  ], 
  controllers: [AuthController],  
  providers: [AuthService, JwtStrategy, LocalStrategy],  
  exports: [AuthService, JwtStrategy, LocalStrategy],
})
export class AuthModule {}

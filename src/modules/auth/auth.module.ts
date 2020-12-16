import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { JwtModule } from "@nestjs/jwt";
import { PassportModule } from "@nestjs/passport";
import { passportConfig } from 'src/config/auth';
import { UserModule } from "../user/user.module";
import { AuthController } from "./controller/auth.controller";
import { AuthService } from "./service/auth.service";
import { JwtStrategy } from './strategies/jwt.strategy';


@Module({  
  imports: [   
    ConfigModule,
    UserModule,    
    PassportModule.register(passportConfig()),
    JwtModule.register({
      secret: process.env.SECRETKEY, 
      signOptions: {
        expiresIn: process.env.EXPIRESIN,
      },
    }),
  ], 
  controllers: [AuthController],  
  providers: [AuthService, JwtStrategy],  
  exports: [PassportModule, JwtModule, AuthService],
})
export class AuthModule {}

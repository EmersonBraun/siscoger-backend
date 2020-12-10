import { Module } from '@nestjs/common';
import { JwtModule } from "@nestjs/jwt";
import { PassportModule } from "@nestjs/passport";
import { jwtConfig, passportConfig } from 'src/config/auth';
import { UserModule } from "../user/user.module";
import { AuthController } from "./controller/auth.controller";
import { JwtStrategy } from './JwtStrategy';
import { AuthService } from "./service/auth.service";


@Module({  
  imports: [    
      UserModule,    
      PassportModule.register(passportConfig()),
      JwtModule.register(jwtConfig()),
  ], 
  controllers: [AuthController],  
  providers: [AuthService, JwtStrategy],  
  exports: [PassportModule, JwtModule, AuthService],
})
export class AuthModule {}

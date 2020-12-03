import { Module } from '@nestjs/common';
import { JwtModule } from "@nestjs/jwt";
import { PassportModule } from "@nestjs/passport";
import { UserModule } from "../user/user.module";
import { AuthController } from "./controller/auth.controller";
import { JwtStrategy } from './JwtStrategy';
import { AuthService } from "./service/auth.service";


@Module({  
  imports: [    
      UserModule,    
      PassportModule.register({
          defaultStrategy: 'jwt',
          property: 'user',
          session: false,
      }),
      JwtModule.register({
          secret: process.env.SECRETKEY, signOptions: {
              expiresIn: process.env.EXPIRESIN,
          },
      }),
  ], 
  controllers: [AuthController],  
  providers: [AuthService, JwtStrategy],  
  exports: [
      PassportModule, 
      JwtModule
  ],
})
export class AuthModule {}

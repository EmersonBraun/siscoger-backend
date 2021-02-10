import {
  Body,
  Controller,
  Get,
  HttpCode,
  Post,
  Request,
  UseGuards,
} from '@nestjs/common';
import {
  ApiBadRequestResponse,
  ApiCreatedResponse,
  ApiOperation,
  ApiTags,
} from '@nestjs/swagger';
<<<<<<< HEAD
import { CreateUserDto } from 'src/modules/user/dtos';
import { JwtAuthGuard } from '../../../common/guards/jwt.guard';
import { ErrorResponse } from '../../../common/responses';
=======
import { CreateUserDto } from '../../user/dtos';
import JwtAuthGuard from '../../../common/guards/jwt.guard';
import LocalAuthGuard from '../../../common/guards/local.guard';
import ErrorResponse from '../../../common/responses/error';
>>>>>>> f3570f884e2cdcf6d9de59e2803ba90a53e52660
import { LoginDto } from '../dtos/login.dto';
import { AuthService } from '../service/auth.service';

@ApiTags('auth')
@Controller('auth')
export class AuthController {
  constructor(private service: AuthService) {}

  @Post('login')
  @HttpCode(201)
  @ApiOperation({ summary: 'Create a new auth' })
  @ApiCreatedResponse({ type: LoginDto, description: 'Logged' })
<<<<<<< HEAD
  @ApiBadRequestResponse({ type: ErrorResponse, description: 'Not logged', })
  // @UseGuards(LocalAuthGuard)
  async login(@Body() data): Promise<any> {
    console.log(data)
    return this.service.login(data);
=======
  @ApiBadRequestResponse({ type: ErrorResponse, description: 'Not logged' })
  @UseGuards(LocalAuthGuard)
  async login(@Request() req): Promise<any> {
    return this.service.login(req.user);
>>>>>>> f3570f884e2cdcf6d9de59e2803ba90a53e52660
  }

  @Get('whoami')
  @UseGuards(JwtAuthGuard)
  public async testAuth(@Request() req: any): Promise<CreateUserDto> {
    return req.user;
  }
}

import {
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
import { CreateUserDto } from 'src/modules/user/dtos';
import JwtAuthGuard from '../../../common/guards/jwt.guard';
import LocalAuthGuard from '../../../common/guards/local.guard';
import ErrorResponse from '../../../common/responses/error';
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
  @ApiBadRequestResponse({ type: ErrorResponse, description: 'Not logged' })
  @UseGuards(LocalAuthGuard)
  async login(@Request() req): Promise<any> {
    return this.service.login(req.user);
  }

  @Get('whoami')
  @UseGuards(JwtAuthGuard)
  public async testAuth(@Request() req: any): Promise<CreateUserDto> {
    return req.user;
  }
}

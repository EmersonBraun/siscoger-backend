import {
  Body,
  Controller,
  Get,
  HttpCode,
  Post,
  Request,
  UseGuards
} from '@nestjs/common';
import {
  ApiBadRequestResponse,
  ApiCreatedResponse,
  ApiOperation,
  ApiTags
} from '@nestjs/swagger';
import { CreateUserDto } from 'src/modules/user/dtos';
import { JwtAuthGuard } from '../../../common/guards/jwt.guard';
import { ErrorResponse } from '../../../common/responses';
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
  @ApiBadRequestResponse({ type: ErrorResponse, description: 'Not logged', })
  // @UseGuards(LocalAuthGuard)
  async login(@Body() data): Promise<any> {
    console.log(data)
    return this.service.login(data);
  }

  @Get('whoami')
  @UseGuards(JwtAuthGuard)
  public async testAuth(@Request() req: any): Promise<CreateUserDto> {
    return req.user;
  }
}
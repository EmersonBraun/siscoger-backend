import {
  Body,
  Controller,
  Get,
  HttpCode,
  Post,
  Req,
  UseGuards
} from '@nestjs/common';
import { AuthGuard } from '@nestjs/passport';
import {
  ApiBadRequestResponse,
  ApiCreatedResponse,
  ApiOperation,
  ApiTags
} from '@nestjs/swagger';
import { CreateUserDto } from 'src/modules/user/dtos';
import { ErrorResponse } from '../../../common/responses';
import { LoginDto } from '../dtos/login.dto';
import { AuthService } from '../service/auth.service';


@ApiTags('auth')
@Controller('auth')
export class AuthController {
  constructor(private service: AuthService) {}

  @Post()
  @HttpCode(201)
  @ApiOperation({ summary: 'Create a new auth' })
  @ApiCreatedResponse({ type: LoginDto, description: 'Logged' })
  @ApiBadRequestResponse({ type: ErrorResponse, description: 'Not logged', })
  async login(@Body() data: LoginDto): Promise<CreateUserDto> {
    return await this.service.login(data);
  }

  @Get('whoami')
  @UseGuards(AuthGuard())
  public async testAuth(@Req() req: any): Promise<CreateUserDto> {
    return req.user;
  }
}
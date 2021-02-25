import {
  Body,
  Controller,
  Delete,
  Get,
  HttpCode,
  Param,
  Post,
  Put,
  Request,
  UseGuards,
} from '@nestjs/common';
import {
  ApiBadRequestResponse,
  ApiCreatedResponse,
  ApiNoContentResponse,
  ApiNotFoundResponse,
  ApiOkResponse,
  ApiOperation,
  ApiTags,
} from '@nestjs/swagger';
import { hash } from 'bcrypt';
import { activityLog } from '../../../common/activiti-log';
import ACLPolice from '../../../common/decorators/acl.decorator';
import ACLGuard from '../../../common/guards/acl.guard';
import JwtAuthGuard from '../../../common/guards/jwt.guard';
import { ErrorResponse } from '../../../common/responses/error';
import { CreateUserDto } from '../dtos/create.dto';
import { UpdateUserDto } from '../dtos/update.dto';
import { User } from '../entity/user.entity';
import { UserService } from '../service/user.service';

@ApiTags('User')
@Controller('users')
export class UserController {
  constructor(private service: UserService) {}

  @Get()
  @HttpCode(200)
  @UseGuards(JwtAuthGuard, ACLGuard)
  @ACLPolice({ roles: [], permissions: [] })
  @ApiOperation({ summary: 'Search all User' })
  @ApiOkResponse({ type: [CreateUserDto], description: 'The found User' })
  async findAll(): Promise<User[]> {
    return await this.service.findAll();
  }

  @Post('search')
  @HttpCode(200)
  @UseGuards(JwtAuthGuard, ACLGuard)
  @ACLPolice({ roles: [], permissions: [] })
  @ApiOperation({ summary: 'Search User' })
  @ApiCreatedResponse({ type: UpdateUserDto, description: 'Searched User' })
  @ApiBadRequestResponse({ type: ErrorResponse, description: 'Bad Request' })
  async search(@Body() data: CreateUserDto): Promise<User[]> {
    return await this.service.search(data);
  }

  @Post()
  @HttpCode(201)
  @UseGuards(JwtAuthGuard, ACLGuard)
  @ACLPolice({ roles: [], permissions: [] })
  @ApiOperation({ summary: 'Create a new User' })
  @ApiCreatedResponse({ type: UpdateUserDto, description: 'Created User' })
  @ApiBadRequestResponse({ type: ErrorResponse, description: 'Bad Request' })
  async create(
    @Body() data: CreateUserDto,
    @Request() request?: any,
  ): Promise<User> {
    const pass = data.password || data.rg;
    data.password = await hash(pass, 10);
    const response = await this.service.create(data);

    await activityLog({
      module: 'user',
      action: 'create',
      data: response,
      user: request?.user,
    });

    return response;
  }

  @Get(':id')
  @HttpCode(200)
  @UseGuards(JwtAuthGuard, ACLGuard)
  @ACLPolice({ roles: [], permissions: [] })
  @ApiOperation({ summary: 'Search a User by id' })
  @ApiOkResponse({ type: UpdateUserDto, description: 'The found User' })
  @ApiNotFoundResponse({ type: ErrorResponse, description: 'Not Found' })
  async findById(@Param('id') id: string): Promise<User> {
    return await this.service.findById(id);
  }

  @Put(':id')
  @HttpCode(200)
  @UseGuards(JwtAuthGuard, ACLGuard)
  @ACLPolice({ roles: [], permissions: [] })
  @ApiOperation({ summary: 'Update a User' })
  @ApiOkResponse({ type: UpdateUserDto, description: 'Updated User' })
  @ApiNotFoundResponse({ type: ErrorResponse, description: 'Not Found' })
  async update(
    @Param('id') id: string,
    @Body() data: UpdateUserDto,
    @Request() request?: any,
  ): Promise<User> {
    const old = await this.service.findById(id);
    if (data.password) data.password = await hash(data.password, 10);
    const response = await this.service.update(id, data);
    await activityLog({
      module: 'user',
      action: 'update',
      data: response,
      old,
      user: request?.user,
    });

    return response;
  }

  @Post('/block')
  @HttpCode(200)
  // @UseGuards(JwtAuthGuard, ACLGuard)
  // @ACLPolice({ roles: [], permissions: [] })
  @ApiOperation({ summary: 'Block a User' })
  @ApiOkResponse({ type: UpdateUserDto, description: 'Blocked User' })
  @ApiNotFoundResponse({ type: ErrorResponse, description: 'Not Found' })
  async block(
    @Body() data: UpdateUserDto,
    @Request() request?: any,
  ): Promise<User> {
    const response = await this.service.block(data);
    await activityLog({
      module: 'user',
      action: 'block',
      data: response,
      user: request?.user,
    });

    return response;
  }

  @Post('/unblock')
  @HttpCode(200)
  @UseGuards(JwtAuthGuard, ACLGuard)
  @ACLPolice({ roles: [], permissions: [] })
  @ApiOperation({ summary: 'Unblock a User' })
  @ApiOkResponse({ type: UpdateUserDto, description: 'Unblocked User' })
  @ApiNotFoundResponse({ type: ErrorResponse, description: 'Not Found' })
  async unblock(
    @Body() data: UpdateUserDto,
    @Request() request?: any,
  ): Promise<User> {
    const response = await this.service.unblock(data);
    await activityLog({
      module: 'user',
      action: 'unblock',
      data: response,
      user: request?.user,
    });

    return response;
  }

  @Put(':id/restore')
  @HttpCode(200)
  @UseGuards(JwtAuthGuard, ACLGuard)
  @ACLPolice({ roles: [], permissions: [] })
  @ApiOperation({ summary: 'Delete a User' })
  @ApiNoContentResponse({ description: 'Deleted User' })
  @ApiNotFoundResponse({ type: ErrorResponse, description: 'Not Found' })
  async restore(
    @Param('id') id: string,
    @Request() request?: any,
  ): Promise<User> {
    const data = await this.service.restore(id);

    await activityLog({
      module: 'user',
      action: 'restore',
      data,
      user: request?.user,
    });
    return data;
  }

  @Delete(':id')
  @HttpCode(200)
  @UseGuards(JwtAuthGuard, ACLGuard)
  @ACLPolice({ roles: [], permissions: [] })
  @ApiOperation({ summary: 'Delete a User' })
  @ApiNoContentResponse({ description: 'Deleted User' })
  @ApiNotFoundResponse({ type: ErrorResponse, description: 'Not Found' })
  async delete(
    @Param('id') id: string,
    @Request() request?: any,
  ): Promise<User> {
    const data = await this.service.delete(id);

    await activityLog({
      module: 'user',
      action: 'delete',
      data,
      user: request?.user,
    });
    return data;
  }

  @Delete(':id/force')
  @HttpCode(200)
  @UseGuards(JwtAuthGuard, ACLGuard)
  @ACLPolice({ roles: [], permissions: [] })
  @ApiOperation({ summary: 'Delete definitive a User' })
  @ApiNoContentResponse({ description: 'Deleted definitive User' })
  @ApiNotFoundResponse({ type: ErrorResponse, description: 'Not Found' })
  async forceDelete(
    @Param('id') id: string,
    @Request() request?: any,
  ): Promise<User> {
    const data = await this.service.forceDelete(id);

    await activityLog({
      module: 'user',
      action: 'forceDelete',
      data,
      user: request?.user,
    });
    return data;
  }
}

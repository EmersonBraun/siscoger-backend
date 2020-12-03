import {
  Body,
  Controller,
  Delete,
  Get,
  HttpCode,
  Param,
  Post,
  Put
} from '@nestjs/common';
import {
  ApiBadRequestResponse,
  ApiCreatedResponse,
  ApiNoContentResponse,
  ApiNotFoundResponse,
  ApiOkResponse,
  ApiOperation,
  ApiTags
} from '@nestjs/swagger';
import { ErrorResponse } from '../../../common/responses';
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
  @ApiOperation({ summary: 'Search all User' })
  @ApiOkResponse({ type: [CreateUserDto], description: 'The found User' })
  async findAll(): Promise<User[]> {
    return await this.service.findAll();
  }

  @Post('search')
  @HttpCode(200)
  @ApiOperation({ summary: 'Search User' })
  @ApiCreatedResponse({ type: UpdateUserDto, description: 'Searched User' })
  @ApiBadRequestResponse({ type: ErrorResponse, description: 'Bad Request', })
  async search(@Body() data: CreateUserDto): Promise<User[]> {
    return await this.service.search(data);
  }

  @Post()
  @HttpCode(201)
  @ApiOperation({ summary: 'Create a new User' })
  @ApiCreatedResponse({ type: UpdateUserDto, description: 'Created User' })
  @ApiBadRequestResponse({ type: ErrorResponse, description: 'Bad Request', })
  async create(@Body() data: CreateUserDto): Promise<User> {
    return await this.service.create(data);
  }

  @Get(':id')
  @HttpCode(200)
  @ApiOperation({ summary: 'Search a User by id' })
  @ApiOkResponse({ type: UpdateUserDto, description: 'The found User' })
  @ApiNotFoundResponse({ type: ErrorResponse, description: 'Not Found' })
  async findById(@Param('id') id: string): Promise<User> {
    return await this.service.findById(id);
  }

  @Put(':id')
  @HttpCode(200)
  @ApiOperation({ summary: 'Update a User' })
  @ApiOkResponse({ type: UpdateUserDto, description: 'Updated User' })
  @ApiNotFoundResponse({ type: ErrorResponse, description: 'Not Found' })
  async update(
    @Param('id') id: string,
    @Body() data: UpdateUserDto,
  ): Promise<User> {
    return this.service.update(id, data);
  }

  @Delete(':id')
  @HttpCode(204)
  @ApiOperation({ summary: 'Delete a User' })
  @ApiNoContentResponse({ description: 'Deleted User' })
  @ApiNotFoundResponse({ type: ErrorResponse, description: 'Not Found' })
  async delete(@Param('id') id: string): Promise<void> {
    await this.service.delete(id);
  }
}
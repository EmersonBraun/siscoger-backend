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
import { CreatePermissionDto } from '../dtos/create.dto';
import { UpdatePermissionDto } from '../dtos/update.dto';
import { Permission } from '../entity/permission.entity';
import { PermissionService } from '../service/permission.service';


@ApiTags('permission')
@Controller('permissions')
export class PermissionController {
  constructor(private service: PermissionService) {}

  @Get()
  @HttpCode(200)
  @ApiOperation({ summary: 'Search all permission' })
  @ApiOkResponse({ type: [CreatePermissionDto], description: 'The found permission' })
  async findAll(): Promise<Permission[]> {
    return await this.service.findAll();
  }

  @Post('search')
  @HttpCode(200)
  @ApiOperation({ summary: 'Search permission' })
  @ApiCreatedResponse({ type: UpdatePermissionDto, description: 'Searched permission' })
  @ApiBadRequestResponse({ type: ErrorResponse, description: 'Bad Request', })
  async search(@Body() data: CreatePermissionDto): Promise<Permission[]> {
    return await this.service.search(data);
  }

  @Post()
  @HttpCode(201)
  @ApiOperation({ summary: 'Create a new permission' })
  @ApiCreatedResponse({ type: UpdatePermissionDto, description: 'Created permission' })
  @ApiBadRequestResponse({ type: ErrorResponse, description: 'Bad Request', })
  async create(@Body() data: CreatePermissionDto): Promise<Permission> {
    return await this.service.create(data);
  }

  @Get(':id')
  @HttpCode(200)
  @ApiOperation({ summary: 'Search a permission by id' })
  @ApiOkResponse({ type: UpdatePermissionDto, description: 'The found permission' })
  @ApiNotFoundResponse({ type: ErrorResponse, description: 'Not Found' })
  async findById(@Param('id') id: string): Promise<Permission> {
    return await this.service.findById(id);
  }

  @Put(':id')
  @HttpCode(200)
  @ApiOperation({ summary: 'Update a permission' })
  @ApiOkResponse({ type: UpdatePermissionDto, description: 'Updated permission' })
  @ApiNotFoundResponse({ type: ErrorResponse, description: 'Not Found' })
  async update(
    @Param('id') id: string,
    @Body() data: UpdatePermissionDto,
  ): Promise<Permission> {
    return this.service.update(id, data);
  }

  @Delete(':id')
  @HttpCode(204)
  @ApiOperation({ summary: 'Delete a permission' })
  @ApiNoContentResponse({ description: 'Deleted permission' })
  @ApiNotFoundResponse({ type: ErrorResponse, description: 'Not Found' })
  async delete(@Param('id') id: string): Promise<void> {
    await this.service.delete(id);
  }
}
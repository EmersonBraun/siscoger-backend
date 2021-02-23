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
import { activityLog } from '../../../common/activiti-log';
import ACLPolice from '../../../common/decorators/acl.decorator';
import ACLGuard from '../../../common/guards/acl.guard';
import JwtAuthGuard from '../../../common/guards/jwt.guard';
import { ErrorResponse } from '../../../common/responses/error';
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
  @UseGuards(JwtAuthGuard, ACLGuard)
  @ACLPolice({ roles: [], permissions: [] })
  @ApiOperation({ summary: 'Search all permission' })
  @ApiOkResponse({
    type: [CreatePermissionDto],
    description: 'The found permission',
  })
  async findAll(): Promise<Permission[]> {
    return await this.service.findAll();
  }

  @Post('search')
  @HttpCode(200)
  @UseGuards(JwtAuthGuard, ACLGuard)
  @ACLPolice({ roles: [], permissions: [] })
  @ApiOperation({ summary: 'Search all permission' })
  @ApiOperation({ summary: 'Search permission' })
  @ApiCreatedResponse({
    type: UpdatePermissionDto,
    description: 'Searched permission',
  })
  @ApiBadRequestResponse({ type: ErrorResponse, description: 'Bad Request' })
  async search(@Body() data: CreatePermissionDto): Promise<Permission[]> {
    return await this.service.search(data);
  }

  @Post()
  @HttpCode(201)
  @UseGuards(JwtAuthGuard, ACLGuard)
  @ACLPolice({ roles: [], permissions: [] })
  @ApiOperation({ summary: 'Create a new permission' })
  @ApiCreatedResponse({
    type: UpdatePermissionDto,
    description: 'Created permission',
  })
  @ApiBadRequestResponse({ type: ErrorResponse, description: 'Bad Request' })
  async create(
    @Body() data: CreatePermissionDto,
    @Request() request?: any,
  ): Promise<Permission> {
    const response = await this.service.create(data);

    await activityLog({
      module: 'permission',
      action: 'create',
      data: response,
      user: request?.user,
    });

    return response;
  }

  @Post('/group')
  @HttpCode(201)
  @UseGuards(JwtAuthGuard, ACLGuard)
  @ACLPolice({ roles: [], permissions: [] })
  @ApiOperation({ summary: 'Create a group of new permission' })
  @ApiCreatedResponse({
    type: UpdatePermissionDto,
    description: 'Created permission',
  })
  @ApiBadRequestResponse({ type: ErrorResponse, description: 'Bad Request' })
  async group(
    @Body() data: CreatePermissionDto,
    @Request() request?: any,
  ): Promise<Permission[]> {
    const response = await this.service.group(data);

    await activityLog({
      module: 'permission',
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
  @ApiOperation({ summary: 'Search all permission' })
  @ApiOperation({ summary: 'Search a permission by id' })
  @ApiOkResponse({
    type: UpdatePermissionDto,
    description: 'The found permission',
  })
  @ApiNotFoundResponse({ type: ErrorResponse, description: 'Not Found' })
  async findById(@Param('id') id: string): Promise<Permission> {
    return await this.service.findById(id);
  }

  @Put(':id')
  @HttpCode(200)
  @UseGuards(JwtAuthGuard, ACLGuard)
  @ACLPolice({ roles: [], permissions: [] })
  @ApiOperation({ summary: 'Search all permission' })
  @ApiOperation({ summary: 'Update a permission' })
  @ApiOkResponse({
    type: UpdatePermissionDto,
    description: 'Updated permission',
  })
  @ApiNotFoundResponse({ type: ErrorResponse, description: 'Not Found' })
  async update(
    @Param('id') id: string,
    @Body() data: UpdatePermissionDto,
    @Request() request?: any,
  ): Promise<Permission> {
    const old = await this.service.findById(id);
    const response = await this.service.update(id, data);

    await activityLog({
      module: 'permission',
      action: 'update',
      data: response,
      old,
      user: request?.user,
    });

    return response;
  }

  @Delete(':id')
  @HttpCode(204)
  @UseGuards(JwtAuthGuard, ACLGuard)
  @ACLPolice({ roles: [], permissions: [] })
  @ApiOperation({ summary: 'Search all permission' })
  @ApiOperation({ summary: 'Delete a permission' })
  @ApiNoContentResponse({ description: 'Deleted permission' })
  @ApiNotFoundResponse({ type: ErrorResponse, description: 'Not Found' })
  async delete(
    @Param('id') id: string,
    @Request() request?: any,
  ): Promise<void> {
    const data = await this.service.delete(id);

    await activityLog({
      module: 'permission',
      action: 'delete',
      data,
      user: request?.user,
    });
  }
}

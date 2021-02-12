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
  UseGuards
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
import { activityLog } from '../../../common/activiti-log';
import ACLPolice from '../../../common/decorators/acl.decorator';
import ACLGuard from '../../../common/guards/acl.guard';
import JwtAuthGuard from '../../../common/guards/jwt.guard';
import { ErrorResponse } from '../../../common/responses/error';
import { CreateRoleDto } from '../dtos/create.dto';
import { UpdateRoleDto } from '../dtos/update.dto';
import { Role } from '../entity/role.entity';
import { RoleService } from '../service/role.service';

@ApiTags('role')
@Controller('roles')
export class RoleController {
  constructor(private service: RoleService) {}

  @Get()
  @HttpCode(200)
  @UseGuards(JwtAuthGuard, ACLGuard)
  @ACLPolice({ roles: [], permissions: [] })
  @ApiOperation({ summary: 'Search all permission' })
  @ApiOperation({ summary: 'Search all role' })
  @ApiOkResponse({ type: [CreateRoleDto], description: 'The found role' })
  async findAll(): Promise<Role[]> {
    return await this.service.findAll();
  }

  @Post('search')
  @HttpCode(200)
  @UseGuards(JwtAuthGuard, ACLGuard)
  @ACLPolice({ roles: [], permissions: [] })
  @ApiOperation({ summary: 'Search role' })
  @ApiCreatedResponse({ type: UpdateRoleDto, description: 'Searched role' })
  @ApiBadRequestResponse({ type: ErrorResponse, description: 'Bad Request' })
  async search(@Body() data: CreateRoleDto): Promise<Role[]> {
    return await this.service.search(data);
  }

  @Post()
  @HttpCode(201)
  @UseGuards(JwtAuthGuard, ACLGuard)
  @ACLPolice({ roles: [], permissions: [] })
  @ApiOperation({ summary: 'Create a new role' })
  @ApiCreatedResponse({ type: UpdateRoleDto, description: 'Created role' })
  @ApiBadRequestResponse({ type: ErrorResponse, description: 'Bad Request' })
  async create(
    @Body() data: CreateRoleDto,
    @Request() request?: any,
  ): Promise<Role> {
    const response = await this.service.create(data);

    await activityLog({
      module: 'role',
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
  @ApiOperation({ summary: 'Search a role by id' })
  @ApiOkResponse({ type: UpdateRoleDto, description: 'The found role' })
  @ApiNotFoundResponse({ type: ErrorResponse, description: 'Not Found' })
  async findById(@Param('id') id: string): Promise<Role> {
    return await this.service.findById(id);
  }

  @Put(':id')
  @HttpCode(200)
  @UseGuards(JwtAuthGuard, ACLGuard)
  @ACLPolice({ roles: [], permissions: [] })
  @ApiOperation({ summary: 'Update a role' })
  @ApiOkResponse({ type: UpdateRoleDto, description: 'Updated role' })
  @ApiNotFoundResponse({ type: ErrorResponse, description: 'Not Found' })
  async update(
    @Param('id') id: string,
    @Body() data: UpdateRoleDto,
    @Request() request?: any,
  ): Promise<Role> {
    const old = await this.service.findById(id);
    const response = await this.service.update(id, data);

    await activityLog({
      module: 'role',
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
  @ApiOperation({ summary: 'Delete a role' })
  @ApiNoContentResponse({ description: 'Deleted role' })
  @ApiNotFoundResponse({ type: ErrorResponse, description: 'Not Found' })
  async delete(
    @Param('id') id: string,
    @Request() request?: any,
  ): Promise<void> {
    const data = await this.service.delete(id);

    await activityLog({
      module: 'role',
      action: 'delete',
      data,
      user: request?.user,
    });
  }
}

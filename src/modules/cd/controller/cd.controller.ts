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
import { CreateCdDto } from '../dtos/create.dto';
import { UpdateCdDto } from '../dtos/update.dto';
import Cd from '../entity/cd.entity';
import { CdService } from '../service/cd.service';

@ApiTags('Cd')
@Controller('cd')
export class CdController {
  constructor(private service: CdService) {}

  @Get()
  @HttpCode(200)
  @UseGuards(JwtAuthGuard, ACLGuard)
  @ACLPolice({ roles: [], permissions: [] })
  @ApiOperation({ summary: 'Search all CD' })
  @ApiOkResponse({
    type: [CreateCdDto],
    description: 'The found CD',
  })
  async findAll(): Promise<Cd[]> {
    return await this.service.findAll();
  }

  @Get('/andamento')
  @HttpCode(200)
  @UseGuards(JwtAuthGuard, ACLGuard)
  @ACLPolice({ roles: [], permissions: [] })
  @ApiOperation({ summary: 'Search all andamento CD' })
  @ApiOkResponse({
    type: [CreateCdDto],
    description: 'The found andamento CD',
  })
  async findAndamento(): Promise<Cd[]> {
    return await this.service.findAndamento();
  }

  @Get('/julgamento')
  @HttpCode(200)
  @UseGuards(JwtAuthGuard, ACLGuard)
  @ACLPolice({ roles: [], permissions: [] })
  @ApiOperation({ summary: 'Search all julgamento Cd' })
  @ApiOkResponse({
    type: [CreateCdDto],
    description: 'The found julgamento Cd',
  })
  async julgamento(): Promise<Cd[]> {
    return await this.service.julgamento({});
  }

  @Get('/deleted')
  @HttpCode(200)
  @UseGuards(JwtAuthGuard, ACLGuard)
  @ACLPolice({ roles: [], permissions: [] })
  @ApiOperation({ summary: 'Search all deleted Cd' })
  @ApiOkResponse({ type: [CreateCdDto], description: 'The found deleted Cd' })
  async listDeleted(): Promise<Cd[]> {
    return await this.service.listDeleted();
  }

  @Post()
  @HttpCode(201)
  @UseGuards(JwtAuthGuard, ACLGuard)
  @ACLPolice({ roles: [], permissions: [] })
  @ApiOperation({ summary: 'Create a new CD' })
  @ApiCreatedResponse({
    type: UpdateCdDto,
    description: 'Created CD',
  })
  @ApiBadRequestResponse({ type: ErrorResponse, description: 'Bad Request' })
  async create(
    @Body() data: CreateCdDto,
    @Request() request?: any,
  ): Promise<Cd> {
    const response = await this.service.create(data);

    await activityLog({
      module: 'cd',
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
  @ApiOperation({ summary: 'Search a CD by id' })
  @ApiOkResponse({
    type: UpdateCdDto,
    description: 'The found CD',
  })
  @ApiNotFoundResponse({ type: ErrorResponse, description: 'Not Found' })
  async findById(@Param('id') id: string): Promise<Cd> {
    return await this.service.findById(id);
  }

  @Put(':id')
  @HttpCode(200)
  @UseGuards(JwtAuthGuard, ACLGuard)
  @ACLPolice({ roles: [], permissions: [] })
  @ApiOperation({ summary: 'Update a CD' })
  @ApiOkResponse({
    type: UpdateCdDto,
    description: 'Updated Cd',
  })
  @ApiNotFoundResponse({ type: ErrorResponse, description: 'Not Found' })
  async update(
    @Param('id') id: string,
    @Body() data: UpdateCdDto,
    @Request() request?: any,
  ): Promise<Cd> {
    const old = await this.service.findById(id);
    const response = await this.service.update(id, data);

    await activityLog({
      module: 'cd',
      action: 'update',
      data: response,
      old,
      user: request?.user,
    });

    return response;
  }

  @Put(':id/restore')
  @HttpCode(200)
  @UseGuards(JwtAuthGuard, ACLGuard)
  @ACLPolice({ roles: [], permissions: [] })
  @ApiOperation({ summary: 'Delete a Cd' })
  @ApiNoContentResponse({ description: 'Deleted Cd' })
  @ApiNotFoundResponse({ type: ErrorResponse, description: 'Not Found' })
  async restore(
    @Param('id') id: string,
    @Request() request?: any,
  ): Promise<Cd> {
    const data = await this.service.restore(id);

    await activityLog({
      module: 'cd',
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
  @ApiOperation({ summary: 'Delete a Cd' })
  @ApiNoContentResponse({ description: 'Deleted Cd' })
  @ApiNotFoundResponse({ type: ErrorResponse, description: 'Not Found' })
  async delete(@Param('id') id: string, @Request() request?: any): Promise<Cd> {
    const data = await this.service.delete(id);

    await activityLog({
      module: 'cd',
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
  @ApiOperation({ summary: 'Delete definitive a Cd' })
  @ApiNoContentResponse({ description: 'Deleted definitive Cd' })
  @ApiNotFoundResponse({ type: ErrorResponse, description: 'Not Found' })
  async forceDelete(
    @Param('id') id: string,
    @Request() request?: any,
  ): Promise<Cd> {
    const data = await this.service.forceDelete(id);

    await activityLog({
      module: 'cd',
      action: 'forceDelete',
      data,
      user: request?.user,
    });
    return data;
  }
}

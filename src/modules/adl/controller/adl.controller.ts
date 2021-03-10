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
import { ErrorResponse } from '../../../common/responses';
import { CreateAdlDto, UpdateAdlDto } from '../dtos';
import Adl from '../entity/adl.entity';
import { AdlService } from '../service/adl.service';

@ApiTags('Adl')
@Controller('adl')
export default class AdlController {
  constructor(private service: AdlService) {}

  @Get()
  @HttpCode(200)
  @UseGuards(JwtAuthGuard, ACLGuard)
  @ACLPolice({ roles: [], permissions: [] })
  @ApiOperation({ summary: 'Search all Adl' })
  @ApiOkResponse({ type: [CreateAdlDto], description: 'The found Adl' })
  async findAll(): Promise<Adl[]> {
    return await this.service.findAll();
  }

  @Get('/andamento')
  @HttpCode(200)
  @UseGuards(JwtAuthGuard, ACLGuard)
  @ACLPolice({ roles: [], permissions: [] })
  @ApiOperation({ summary: 'Search all andamento Adl' })
  @ApiOkResponse({
    type: [CreateAdlDto],
    description: 'The found andamento Adl',
  })
  async findAndamento(): Promise<Adl[]> {
    return await this.service.findAndamento();
  }

  @Get('/resultado')
  @HttpCode(200)
  @UseGuards(JwtAuthGuard, ACLGuard)
  @ACLPolice({ roles: [], permissions: [] })
  @ApiOperation({ summary: 'Search all resultado Adl' })
  @ApiOkResponse({
    type: [CreateAdlDto],
    description: 'The found resultado Adl',
  })
  async resultado(): Promise<Adl[]> {
    return await this.service.resultado({});
  }

  @Get('/deleted')
  @HttpCode(200)
  @UseGuards(JwtAuthGuard, ACLGuard)
  @ACLPolice({ roles: [], permissions: [] })
  @ApiOperation({ summary: 'Search all deleted Adl' })
  @ApiOkResponse({ type: [CreateAdlDto], description: 'The found deleted Adl' })
  async listDeleted(): Promise<Adl[]> {
    return await this.service.listDeleted();
  }

  @Post()
  @HttpCode(201)
  @UseGuards(JwtAuthGuard, ACLGuard)
  @ACLPolice({ roles: [], permissions: [] })
  @ApiOperation({ summary: 'Create a new Adl' })
  @ApiCreatedResponse({ type: UpdateAdlDto, description: 'Created Adl' })
  @ApiBadRequestResponse({ type: ErrorResponse, description: 'Bad Request' })
  async create(
    @Body() data: CreateAdlDto,
    @Request() request?: any,
  ): Promise<Adl> {
    const response = await this.service.create(data);

    await activityLog({
      module: 'adl',
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
  @ApiOperation({ summary: 'Search a Adl by id' })
  @ApiOkResponse({ type: UpdateAdlDto, description: 'The found Adl' })
  @ApiNotFoundResponse({ type: ErrorResponse, description: 'Not Found' })
  async findById(@Param('id') id: string): Promise<Adl> {
    return await this.service.findById(id);
  }

  @Put(':id')
  @HttpCode(200)
  @UseGuards(JwtAuthGuard, ACLGuard)
  @ACLPolice({ roles: [], permissions: [] })
  @ApiOperation({ summary: 'Update a Adl' })
  @ApiOkResponse({ type: UpdateAdlDto, description: 'Updated Adl' })
  @ApiNotFoundResponse({ type: ErrorResponse, description: 'Not Found' })
  async update(
    @Param('id') id: string,
    @Body() data: UpdateAdlDto,
    @Request() request?: any,
  ): Promise<Adl> {
    const old = await this.service.findById(id);
    const response = await this.service.update(id, data);

    await activityLog({
      module: 'adl',
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
  @ApiOperation({ summary: 'Delete a Adl' })
  @ApiNoContentResponse({ description: 'Deleted Adl' })
  @ApiNotFoundResponse({ type: ErrorResponse, description: 'Not Found' })
  async restore(
    @Param('id') id: string,
    @Request() request?: any,
  ): Promise<Adl> {
    const data = await this.service.restore(id);

    await activityLog({
      module: 'adl',
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
  @ApiOperation({ summary: 'Delete a Adl' })
  @ApiNoContentResponse({ description: 'Deleted Adl' })
  @ApiNotFoundResponse({ type: ErrorResponse, description: 'Not Found' })
  async delete(
    @Param('id') id: string,
    @Request() request?: any,
  ): Promise<Adl> {
    const data = await this.service.delete(id);

    await activityLog({
      module: 'adl',
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
  @ApiOperation({ summary: 'Delete definitive a Adl' })
  @ApiNoContentResponse({ description: 'Deleted definitive Adl' })
  @ApiNotFoundResponse({ type: ErrorResponse, description: 'Not Found' })
  async forceDelete(
    @Param('id') id: string,
    @Request() request?: any,
  ): Promise<Adl> {
    const data = await this.service.forceDelete(id);

    await activityLog({
      module: 'adl',
      action: 'forceDelete',
      data,
      user: request?.user,
    });
    return data;
  }
}

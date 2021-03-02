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
import { CreateDesercaoDto, UpdateDesercaoDto } from '../dtos';
import Desercao from '../entity/desercao.entity';
import { DesercaoService } from '../service/desercao.service';

@ApiTags('Desercao')
@Controller('Desercaos')
export class DesercaoController {
  constructor(private service: DesercaoService) {}

  @Get()
  @HttpCode(200)
  @ApiOperation({ summary: 'Search all Desercao' })
  @ApiOkResponse({
    type: [CreateDesercaoDto],
    description: 'The found Desercao',
  })
  async findAll(): Promise<Desercao[]> {
    return await this.service.findAll();
  }

  @Post('search')
  @HttpCode(200)
  @ApiOperation({ summary: 'Search Desercao' })
  @ApiCreatedResponse({
    type: UpdateDesercaoDto,
    description: 'Searched Desercao',
  })
  @ApiBadRequestResponse({ type: ErrorResponse, description: 'Bad Request' })
  async search(@Body() data: CreateDesercaoDto): Promise<Desercao[]> {
    return await this.service.search(data);
  }

  @Post()
  @HttpCode(201)
  @ApiOperation({ summary: 'Create a new Desercao' })
  @ApiCreatedResponse({
    type: UpdateDesercaoDto,
    description: 'Created Desercao',
  })
  @ApiBadRequestResponse({ type: ErrorResponse, description: 'Bad Request' })
  async create(@Body() data: CreateDesercaoDto): Promise<Desercao> {
    return await this.service.create(data);
  }

  @Get(':id')
  @HttpCode(200)
  @ApiOperation({ summary: 'Search a Desercao by id' })
  @ApiOkResponse({ type: UpdateDesercaoDto, description: 'The found Desercao' })
  @ApiNotFoundResponse({ type: ErrorResponse, description: 'Not Found' })
  async findById(@Param('id') id: string): Promise<Desercao> {
    return await this.service.findById(id);
  }

  @Put(':id')
  @HttpCode(200)
  @ApiOperation({ summary: 'Update a Desercao' })
  @ApiOkResponse({ type: UpdateDesercaoDto, description: 'Updated Desercao' })
  @ApiNotFoundResponse({ type: ErrorResponse, description: 'Not Found' })
  async update(
    @Param('id') id: string,
    @Body() data: UpdateDesercaoDto,
  ): Promise<Desercao> {
    return this.service.update(id, data);
  }

  @Put(':id/restore')
  @HttpCode(200)
  @UseGuards(JwtAuthGuard, ACLGuard)
  @ACLPolice({ roles: [], permissions: [] })
  @ApiOperation({ summary: 'Delete a Desercao' })
  @ApiNoContentResponse({ description: 'Deleted Desercao' })
  @ApiNotFoundResponse({ type: ErrorResponse, description: 'Not Found' })
  async restore(
    @Param('id') id: string,
    @Request() request?: any,
  ): Promise<Desercao> {
    const data = await this.service.restore(id);

    await activityLog({
      module: 'Desercao',
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
  @ApiOperation({ summary: 'Delete a Desercao' })
  @ApiNoContentResponse({ description: 'Deleted Desercao' })
  @ApiNotFoundResponse({ type: ErrorResponse, description: 'Not Found' })
  async delete(
    @Param('id') id: string,
    @Request() request?: any,
  ): Promise<Desercao> {
    const data = await this.service.delete(id);

    await activityLog({
      module: 'Desercao',
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
  @ApiOperation({ summary: 'Delete definitive a Desercao' })
  @ApiNoContentResponse({ description: 'Deleted definitive Desercao' })
  @ApiNotFoundResponse({ type: ErrorResponse, description: 'Not Found' })
  async forceDelete(
    @Param('id') id: string,
    @Request() request?: any,
  ): Promise<Desercao> {
    const data = await this.service.forceDelete(id);

    await activityLog({
      module: 'Desercao',
      action: 'forceDelete',
      data,
      user: request?.user,
    });
    return data;
  }
}

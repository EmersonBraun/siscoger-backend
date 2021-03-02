import {
  Body,
  Controller,
  Delete,
  Get,
  HttpCode,
  Param,
  Post,
  Put,
  Query,
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
import { CreateIsoDto } from '../dtos/create.dto';
import { SearchPortariaDto } from '../dtos/search-portaria.dto';
import { UpdateIsoDto } from '../dtos/update.dto';
import Iso from '../entity/iso.entity';
import { IsoService } from '../service/iso.service';

@ApiTags('Iso')
@Controller('isos')
export class IsoController {
  constructor(private service: IsoService) {}

  @Get()
  @HttpCode(200)
  @UseGuards(JwtAuthGuard, ACLGuard)
  @ACLPolice({ roles: [], permissions: [] })
  @ApiOperation({ summary: 'Search all Iso' })
  @ApiOkResponse({
    type: [CreateIsoDto],
    description: 'The found Iso',
  })
  async findAll(): Promise<Iso[]> {
    return await this.service.findAll();
  }

  @Get('/deleted')
  @HttpCode(200)
  @UseGuards(JwtAuthGuard, ACLGuard)
  @ACLPolice({ roles: [], permissions: [] })
  @ApiOperation({ summary: 'Search all deleted Iso' })
  @ApiOkResponse({
    type: [CreateIsoDto],
    description: 'The found deleted Iso',
  })
  async listDeleted(): Promise<Iso[]> {
    return await this.service.listDeleted();
  }

  @Get('/andamento')
  @HttpCode(200)
  @ApiOperation({ summary: 'Search all Iso' })
  // @ApiOkResponse({ type: [any], description: 'The found Iso' })
  async andamento(): Promise<any[]> {
    return await this.service.findAndamento();
  }

  @Get('/resultado')
  @HttpCode(200)
  @ApiOperation({ summary: 'Search all Iso' })
  // @ApiOkResponse({ type: [any], description: 'The found Iso' })
  async resultado(@Query() situation: string): Promise<any[]> {
    return await this.service.resultado({ situation });
  }

  @Post('portarias')
  @HttpCode(200)
  @UseGuards(JwtAuthGuard, ACLGuard)
  @ACLPolice({ roles: [], permissions: [] })
  @ApiOperation({ summary: 'Found Iso' })
  @ApiOkResponse({
    type: CreateIsoDto,
    description: 'Found Iso',
  })
  @ApiBadRequestResponse({ type: ErrorResponse, description: 'Bad Request' })
  async findPortaria(@Body() data: SearchPortariaDto): Promise<any> {
    return await this.service.findPortaria(data);
  }

  @Post()
  @HttpCode(201)
  @UseGuards(JwtAuthGuard, ACLGuard)
  @ACLPolice({ roles: [], permissions: [] })
  @ApiOperation({ summary: 'Create a new Iso' })
  @ApiCreatedResponse({
    type: UpdateIsoDto,
    description: 'Created Iso',
  })
  @ApiBadRequestResponse({ type: ErrorResponse, description: 'Bad Request' })
  async create(
    @Body() data: CreateIsoDto,
    @Request() request?: any,
  ): Promise<Iso> {
    const response = await this.service.create(data);

    await activityLog({
      module: 'iso',
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
  @ApiOperation({ summary: 'Search a Iso by id' })
  @ApiOkResponse({
    type: UpdateIsoDto,
    description: 'The found Iso',
  })
  @ApiNotFoundResponse({ type: ErrorResponse, description: 'Not Found' })
  async findById(@Param('id') id: string): Promise<Iso> {
    return await this.service.findById(id);
  }

  @Put(':id')
  @HttpCode(200)
  @UseGuards(JwtAuthGuard, ACLGuard)
  @ACLPolice({ roles: [], permissions: [] })
  @ApiOperation({ summary: 'Update a Iso' })
  @ApiOkResponse({
    type: UpdateIsoDto,
    description: 'Updated Iso',
  })
  @ApiNotFoundResponse({ type: ErrorResponse, description: 'Not Found' })
  async update(
    @Param('id') id: string,
    @Body() data: UpdateIsoDto,
    @Request() request?: any,
  ): Promise<Iso> {
    const old = await this.service.findById(id);
    const response = await this.service.update(id, data);

    await activityLog({
      module: 'iso',
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
  @ApiOperation({ summary: 'Delete a Iso' })
  @ApiNoContentResponse({ description: 'Deleted Iso' })
  @ApiNotFoundResponse({ type: ErrorResponse, description: 'Not Found' })
  async restore(
    @Param('id') id: string,
    @Request() request?: any,
  ): Promise<Iso> {
    const data = await this.service.restore(id);

    await activityLog({
      module: 'iso',
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
  @ApiOperation({ summary: 'Delete a Iso' })
  @ApiNoContentResponse({ description: 'Deleted Iso' })
  @ApiNotFoundResponse({ type: ErrorResponse, description: 'Not Found' })
  async delete(
    @Param('id') id: string,
    @Request() request?: any,
  ): Promise<Iso> {
    const data = await this.service.delete(id);

    await activityLog({
      module: 'iso',
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
  @ApiOperation({ summary: 'Delete definitive a Iso' })
  @ApiNoContentResponse({ description: 'Deleted definitive Iso' })
  @ApiNotFoundResponse({ type: ErrorResponse, description: 'Not Found' })
  async forceDelete(
    @Param('id') id: string,
    @Request() request?: any,
  ): Promise<Iso> {
    const data = await this.service.forceDelete(id);

    await activityLog({
      module: 'iso',
      action: 'forceDelete',
      data,
      user: request?.user,
    });
    return data;
  }
}

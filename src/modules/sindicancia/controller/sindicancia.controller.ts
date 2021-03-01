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
import { CreateSindicanciaDto } from '../dtos/create.dto';
import { SearchPortariaDto } from '../dtos/search-portaria.dto';
import { UpdateSindicanciaDto } from '../dtos/update.dto';
import { Sindicancia } from '../entity/sindicancia.entity';
import { SindicanciaService } from '../service/sindicancia.service';

@ApiTags('Sindicancia')
@Controller('sindicancias')
export class SindicanciaController {
  constructor(private service: SindicanciaService) {}

  @Get()
  @HttpCode(200)
  @UseGuards(JwtAuthGuard, ACLGuard)
  @ACLPolice({ roles: [], permissions: [] })
  @ApiOperation({ summary: 'Search all Sindicancia' })
  @ApiOkResponse({
    type: [CreateSindicanciaDto],
    description: 'The found Sindicancia',
  })
  async findAll(): Promise<Sindicancia[]> {
    return await this.service.findAll();
  }

  @Get('/deleted')
  @HttpCode(200)
  @UseGuards(JwtAuthGuard, ACLGuard)
  @ACLPolice({ roles: [], permissions: [] })
  @ApiOperation({ summary: 'Search all deleted Sindicancia' })
  @ApiOkResponse({
    type: [CreateSindicanciaDto],
    description: 'The found deleted Sindicancia',
  })
  async listDeleted(): Promise<Sindicancia[]> {
    return await this.service.listDeleted();
  }

  @Get('/andamento')
  @HttpCode(200)
  @ApiOperation({ summary: 'Search all Sindicancia' })
  // @ApiOkResponse({ type: [any], description: 'The found Sindicancia' })
  async andamento(): Promise<any[]> {
    return await this.service.findAndamento();
  }

  @Get('/resultado')
  @HttpCode(200)
  @ApiOperation({ summary: 'Search all Sindicancia' })
  // @ApiOkResponse({ type: [any], description: 'The found Sindicancia' })
  async resultado(@Query() situation: string): Promise<any[]> {
    return await this.service.resultado({ situation });
  }

  @Post('portarias')
  @HttpCode(200)
  @UseGuards(JwtAuthGuard, ACLGuard)
  @ACLPolice({ roles: [], permissions: [] })
  @ApiOperation({ summary: 'Found Sindicancia' })
  @ApiOkResponse({
    type: CreateSindicanciaDto,
    description: 'Found Sindicancia',
  })
  @ApiBadRequestResponse({ type: ErrorResponse, description: 'Bad Request' })
  async findPortaria(@Body() data: SearchPortariaDto): Promise<any> {
    return await this.service.findPortaria(data);
  }

  @Post()
  @HttpCode(201)
  @UseGuards(JwtAuthGuard, ACLGuard)
  @ACLPolice({ roles: [], permissions: [] })
  @ApiOperation({ summary: 'Create a new Sindicancia' })
  @ApiCreatedResponse({
    type: UpdateSindicanciaDto,
    description: 'Created Sindicancia',
  })
  @ApiBadRequestResponse({ type: ErrorResponse, description: 'Bad Request' })
  async create(
    @Body() data: CreateSindicanciaDto,
    @Request() request?: any,
  ): Promise<Sindicancia> {
    const response = await this.service.create(data);

    await activityLog({
      module: 'sindicancia',
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
  @ApiOperation({ summary: 'Search a Sindicancia by id' })
  @ApiOkResponse({
    type: UpdateSindicanciaDto,
    description: 'The found Sindicancia',
  })
  @ApiNotFoundResponse({ type: ErrorResponse, description: 'Not Found' })
  async findById(@Param('id') id: string): Promise<Sindicancia> {
    return await this.service.findById(id);
  }

  @Put(':id')
  @HttpCode(200)
  @UseGuards(JwtAuthGuard, ACLGuard)
  @ACLPolice({ roles: [], permissions: [] })
  @ApiOperation({ summary: 'Update a Sindicancia' })
  @ApiOkResponse({
    type: UpdateSindicanciaDto,
    description: 'Updated Sindicancia',
  })
  @ApiNotFoundResponse({ type: ErrorResponse, description: 'Not Found' })
  async update(
    @Param('id') id: string,
    @Body() data: UpdateSindicanciaDto,
    @Request() request?: any,
  ): Promise<Sindicancia> {
    const old = await this.service.findById(id);
    const response = await this.service.update(id, data);

    await activityLog({
      module: 'sindicancia',
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
  @ApiOperation({ summary: 'Delete a Sindicancia' })
  @ApiNoContentResponse({ description: 'Deleted Sindicancia' })
  @ApiNotFoundResponse({ type: ErrorResponse, description: 'Not Found' })
  async restore(
    @Param('id') id: string,
    @Request() request?: any,
  ): Promise<Sindicancia> {
    const data = await this.service.restore(id);

    await activityLog({
      module: 'sindicancia',
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
  @ApiOperation({ summary: 'Delete a Sindicancia' })
  @ApiNoContentResponse({ description: 'Deleted Sindicancia' })
  @ApiNotFoundResponse({ type: ErrorResponse, description: 'Not Found' })
  async delete(
    @Param('id') id: string,
    @Request() request?: any,
  ): Promise<Sindicancia> {
    const data = await this.service.delete(id);

    await activityLog({
      module: 'sindicancia',
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
  @ApiOperation({ summary: 'Delete definitive a Sindicancia' })
  @ApiNoContentResponse({ description: 'Deleted definitive Sindicancia' })
  @ApiNotFoundResponse({ type: ErrorResponse, description: 'Not Found' })
  async forceDelete(
    @Param('id') id: string,
    @Request() request?: any,
  ): Promise<Sindicancia> {
    const data = await this.service.forceDelete(id);

    await activityLog({
      module: 'sindicancia',
      action: 'forceDelete',
      data,
      user: request?.user,
    });
    return data;
  }
}

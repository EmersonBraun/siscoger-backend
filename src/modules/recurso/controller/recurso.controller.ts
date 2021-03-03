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
import { CreateRecursoDto } from '../dtos/create.dto';
import { UpdateRecursoDto } from '../dtos/update.dto';
import Recurso from '../entity/recurso.entity';
import { RecursoService } from '../service/recurso.service';

@ApiTags('Recurso')
@Controller('recursos')
export class RecursoController {
  constructor(private service: RecursoService) {}

  @Get()
  @HttpCode(200)
  @UseGuards(JwtAuthGuard, ACLGuard)
  @ACLPolice({ roles: [], permissions: [] })
  @ApiOperation({ summary: 'Search all Recurso' })
  @ApiOkResponse({
    type: [CreateRecursoDto],
    description: 'The found Recurso',
  })
  async findAll(): Promise<Recurso[]> {
    return await this.service.findAll();
  }

  @Get('/deleted')
  @HttpCode(200)
  @UseGuards(JwtAuthGuard, ACLGuard)
  @ACLPolice({ roles: [], permissions: [] })
  @ApiOperation({ summary: 'Search all deleted Recurso' })
  @ApiOkResponse({
    type: [CreateRecursoDto],
    description: 'The found deleted Recurso',
  })
  async listDeleted(): Promise<Recurso[]> {
    return await this.service.listDeleted();
  }

  @Get('/andamento')
  @HttpCode(200)
  @ApiOperation({ summary: 'Search all Recurso' })
  // @ApiOkResponse({ type: [any], description: 'The found Recurso' })
  async andamento(): Promise<any[]> {
    return await this.service.findAndamento();
  }

  @Get('/resultado')
  @HttpCode(200)
  @ApiOperation({ summary: 'Search all Recurso' })
  // @ApiOkResponse({ type: [any], description: 'The found Recurso' })
  async resultado(@Query() situation: string): Promise<any[]> {
    return await this.service.resultado({ situation });
  }

  // @Post('portarias')
  // @HttpCode(200)
  // @UseGuards(JwtAuthGuard, ACLGuard)
  // @ACLPolice({ roles: [], permissions: [] })
  // @ApiOperation({ summary: 'Found Recurso' })
  // @ApiOkResponse({
  //   type: CreateRecursoDto,
  //   description: 'Found Recurso',
  // })
  // @ApiBadRequestResponse({ type: ErrorResponse, description: 'Bad Request' })
  // async findPortaria(@Body() data: SearchPortariaDto): Promise<any> {
  //   return await this.service.findPortaria(data);
  // }

  @Post()
  @HttpCode(201)
  @UseGuards(JwtAuthGuard, ACLGuard)
  @ACLPolice({ roles: [], permissions: [] })
  @ApiOperation({ summary: 'Create a new Recurso' })
  @ApiCreatedResponse({
    type: UpdateRecursoDto,
    description: 'Created Recurso',
  })
  @ApiBadRequestResponse({ type: ErrorResponse, description: 'Bad Request' })
  async create(
    @Body() data: CreateRecursoDto,
    @Request() request?: any,
  ): Promise<Recurso> {
    const response = await this.service.create(data);

    await activityLog({
      module: 'recurso',
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
  @ApiOperation({ summary: 'Search a Recurso by id' })
  @ApiOkResponse({
    type: UpdateRecursoDto,
    description: 'The found Recurso',
  })
  @ApiNotFoundResponse({ type: ErrorResponse, description: 'Not Found' })
  async findById(@Param('id') id: string): Promise<Recurso> {
    return await this.service.findById(id);
  }

  @Put(':id')
  @HttpCode(200)
  @UseGuards(JwtAuthGuard, ACLGuard)
  @ACLPolice({ roles: [], permissions: [] })
  @ApiOperation({ summary: 'Update a Recurso' })
  @ApiOkResponse({
    type: UpdateRecursoDto,
    description: 'Updated Recurso',
  })
  @ApiNotFoundResponse({ type: ErrorResponse, description: 'Not Found' })
  async update(
    @Param('id') id: string,
    @Body() data: UpdateRecursoDto,
    @Request() request?: any,
  ): Promise<Recurso> {
    const old = await this.service.findById(id);
    const response = await this.service.update(id, data);

    await activityLog({
      module: 'recurso',
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
  @ApiOperation({ summary: 'Delete a Recurso' })
  @ApiNoContentResponse({ description: 'Deleted Recurso' })
  @ApiNotFoundResponse({ type: ErrorResponse, description: 'Not Found' })
  async restore(
    @Param('id') id: string,
    @Request() request?: any,
  ): Promise<Recurso> {
    const data = await this.service.restore(id);

    await activityLog({
      module: 'recurso',
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
  @ApiOperation({ summary: 'Delete a Recurso' })
  @ApiNoContentResponse({ description: 'Deleted Recurso' })
  @ApiNotFoundResponse({ type: ErrorResponse, description: 'Not Found' })
  async delete(
    @Param('id') id: string,
    @Request() request?: any,
  ): Promise<Recurso> {
    const data = await this.service.delete(id);

    await activityLog({
      module: 'recurso',
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
  @ApiOperation({ summary: 'Delete definitive a Recurso' })
  @ApiNoContentResponse({ description: 'Deleted definitive Recurso' })
  @ApiNotFoundResponse({ type: ErrorResponse, description: 'Not Found' })
  async forceDelete(
    @Param('id') id: string,
    @Request() request?: any,
  ): Promise<Recurso> {
    const data = await this.service.forceDelete(id);

    await activityLog({
      module: 'recurso',
      action: 'forceDelete',
      data,
      user: request?.user,
    });
    return data;
  }
}

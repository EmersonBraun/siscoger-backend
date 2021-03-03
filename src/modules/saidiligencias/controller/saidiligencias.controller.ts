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
import { CreateSaiDiligenciasDto } from '../dtos/create.dto';
import { UpdateSaiDiligenciasDto } from '../dtos/update.dto';
import SaiDiligencias from '../entity/saidiligencias.entity';
import { SaiDiligenciasService } from '../service/saidiligencias.service';

@ApiTags('SaiDiligencias')
@Controller('saidiligenciass')
export class SaiDiligenciasController {
  constructor(private service: SaiDiligenciasService) {}

  @Get()
  @HttpCode(200)
  @UseGuards(JwtAuthGuard, ACLGuard)
  @ACLPolice({ roles: [], permissions: [] })
  @ApiOperation({ summary: 'Search all SaiDiligencias' })
  @ApiOkResponse({
    type: [CreateSaiDiligenciasDto],
    description: 'The found SaiDiligencias',
  })
  async findAll(): Promise<SaiDiligencias[]> {
    return await this.service.findAll();
  }

  @Get('/deleted')
  @HttpCode(200)
  @UseGuards(JwtAuthGuard, ACLGuard)
  @ACLPolice({ roles: [], permissions: [] })
  @ApiOperation({ summary: 'Search all deleted SaiDiligencias' })
  @ApiOkResponse({
    type: [CreateSaiDiligenciasDto],
    description: 'The found deleted SaiDiligencias',
  })
  async listDeleted(): Promise<SaiDiligencias[]> {
    return await this.service.listDeleted();
  }

  @Get('/andamento')
  @HttpCode(200)
  @ApiOperation({ summary: 'Search all SaiDiligencias' })
  // @ApiOkResponse({ type: [any], description: 'The found SaiDiligencias' })
  async andamento(): Promise<any[]> {
    return await this.service.findAndamento();
  }

  @Get('/resultado')
  @HttpCode(200)
  @ApiOperation({ summary: 'Search all SaiDiligencias' })
  // @ApiOkResponse({ type: [any], description: 'The found SaiDiligencias' })
  async resultado(@Query() situation: string): Promise<any[]> {
    return await this.service.resultado({ situation });
  }

  // @Post('portarias')
  // @HttpCode(200)
  // @UseGuards(JwtAuthGuard, ACLGuard)
  // @ACLPolice({ roles: [], permissions: [] })
  // @ApiOperation({ summary: 'Found SaiDiligencias' })
  // @ApiOkResponse({
  //   type: CreateSaiDiligenciasDto,
  //   description: 'Found SaiDiligencias',
  // })
  // @ApiBadRequestResponse({ type: ErrorResponse, description: 'Bad Request' })
  // async findPortaria(@Body() data: SearchPortariaDto): Promise<any> {
  //   return await this.service.findPortaria(data);
  // }

  @Post()
  @HttpCode(201)
  @UseGuards(JwtAuthGuard, ACLGuard)
  @ACLPolice({ roles: [], permissions: [] })
  @ApiOperation({ summary: 'Create a new SaiDiligencias' })
  @ApiCreatedResponse({
    type: UpdateSaiDiligenciasDto,
    description: 'Created SaiDiligencias',
  })
  @ApiBadRequestResponse({ type: ErrorResponse, description: 'Bad Request' })
  async create(
    @Body() data: CreateSaiDiligenciasDto,
    @Request() request?: any,
  ): Promise<SaiDiligencias> {
    const response = await this.service.create(data);

    await activityLog({
      module: 'saidiligencias',
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
  @ApiOperation({ summary: 'Search a SaiDiligencias by id' })
  @ApiOkResponse({
    type: UpdateSaiDiligenciasDto,
    description: 'The found SaiDiligencias',
  })
  @ApiNotFoundResponse({ type: ErrorResponse, description: 'Not Found' })
  async findById(@Param('id') id: string): Promise<SaiDiligencias> {
    return await this.service.findById(id);
  }

  @Put(':id')
  @HttpCode(200)
  @UseGuards(JwtAuthGuard, ACLGuard)
  @ACLPolice({ roles: [], permissions: [] })
  @ApiOperation({ summary: 'Update a SaiDiligencias' })
  @ApiOkResponse({
    type: UpdateSaiDiligenciasDto,
    description: 'Updated SaiDiligencias',
  })
  @ApiNotFoundResponse({ type: ErrorResponse, description: 'Not Found' })
  async update(
    @Param('id') id: string,
    @Body() data: UpdateSaiDiligenciasDto,
    @Request() request?: any,
  ): Promise<SaiDiligencias> {
    const old = await this.service.findById(id);
    const response = await this.service.update(id, data);

    await activityLog({
      module: 'saidiligencias',
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
  @ApiOperation({ summary: 'Delete a SaiDiligencias' })
  @ApiNoContentResponse({ description: 'Deleted SaiDiligencias' })
  @ApiNotFoundResponse({ type: ErrorResponse, description: 'Not Found' })
  async restore(
    @Param('id') id: string,
    @Request() request?: any,
  ): Promise<SaiDiligencias> {
    const data = await this.service.restore(id);

    await activityLog({
      module: 'saidiligencias',
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
  @ApiOperation({ summary: 'Delete a SaiDiligencias' })
  @ApiNoContentResponse({ description: 'Deleted SaiDiligencias' })
  @ApiNotFoundResponse({ type: ErrorResponse, description: 'Not Found' })
  async delete(
    @Param('id') id: string,
    @Request() request?: any,
  ): Promise<SaiDiligencias> {
    const data = await this.service.delete(id);

    await activityLog({
      module: 'saidiligencias',
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
  @ApiOperation({ summary: 'Delete definitive a SaiDiligencias' })
  @ApiNoContentResponse({ description: 'Deleted definitive SaiDiligencias' })
  @ApiNotFoundResponse({ type: ErrorResponse, description: 'Not Found' })
  async forceDelete(
    @Param('id') id: string,
    @Request() request?: any,
  ): Promise<SaiDiligencias> {
    const data = await this.service.forceDelete(id);

    await activityLog({
      module: 'saidiligencias',
      action: 'forceDelete',
      data,
      user: request?.user,
    });
    return data;
  }
}

import {
  Body,
  Controller,
  Delete,
  Get,
  HttpCode,
  Param,
  Post,
  Put,
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
import { ErrorResponse } from '../../../common/responses';
import { CreatesaidiligenciasDto } from '../dtos/create.dto';
import { UpdatesaidiligenciasDto } from '../dtos/update.dto';
import { saidiligencias } from '../entity/saidiligencias.entity';
import { saidiligenciasService } from '../service/saidiligencias.service';
import { SaiDiligencias } from '../types';

@ApiTags('saidiligencias')
@Controller('saidiligenciass')
export class saidiligenciasController {
  constructor(private service: saidiligenciasService) {}

  @Get()
  @HttpCode(200)
  @ApiOperation({ summary: 'Search all saidiligencias' })
  @ApiOkResponse({
    type: [CreatesaidiligenciasDto],
    description: 'The found saidiligencias',
  })
  async findAll(): Promise<saidiligencias[]> {
    return await this.service.findAll();
  }

  @Post('search')
  @HttpCode(200)
  @ApiOperation({ summary: 'Search saidiligencias' })
  @ApiCreatedResponse({
    type: UpdatesaidiligenciasDto,
    description: 'Searched saidiligencias',
  })
  @ApiBadRequestResponse({ type: ErrorResponse, description: 'Bad Request' })
  async search(
    @Body() data: CreatesaidiligenciasDto,
  ): Promise<saidiligencias[]> {
    return await this.service.search(data);
  }

  @Post()
  @HttpCode(201)
  @ApiOperation({ summary: 'Create a new saidiligencias' })
  @ApiCreatedResponse({
    type: UpdatesaidiligenciasDto,
    description: 'Created saidiligencias',
  })
  @ApiBadRequestResponse({ type: ErrorResponse, description: 'Bad Request' })
  async create(@Body() data: CreatesaidiligenciasDto): Promise<saidiligencias> {
    return await this.service.create(data);
  }

  @Get(':id')
  @HttpCode(200)
  @ApiOperation({ summary: 'Search a saidiligencias by id' })
  @ApiOkResponse({
    type: UpdatesaidiligenciasDto,
    description: 'The found saidiligencias',
  })
  @ApiNotFoundResponse({ type: ErrorResponse, description: 'Not Found' })
  async findById(@Param('id') id: string): Promise<saidiligencias> {
    return await this.service.findById(id);
  }

  @Put(':id')
  @HttpCode(200)
  @ApiOperation({ summary: 'Update a saidiligencias' })
  @ApiOkResponse({
    type: UpdatesaidiligenciasDto,
    description: 'Updated saidiligencias',
  })
  @ApiNotFoundResponse({ type: ErrorResponse, description: 'Not Found' })
  async update(
    @Param('id') id: string,
    @Body() data: UpdatesaidiligenciasDto,
  ): Promise<saidiligencias> {
    return this.service.update(id, data);
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

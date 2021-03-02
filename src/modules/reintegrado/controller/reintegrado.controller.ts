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
import { CreatereintegradoDto } from '../dtos/create.dto';
import { UpdatereintegradoDto } from '../dtos/update.dto';
import { reintegrado } from '../entity/reintegrado.entity';
import { reintegradoService } from '../service/reintegrado.service';

@ApiTags('reintegrado')
@Controller('reintegrados')
export class reintegradoController {
  constructor(private service: reintegradoService) {}

  @Get()
  @HttpCode(200)
  @ApiOperation({ summary: 'Search all reintegrado' })
  @ApiOkResponse({
    type: [CreatereintegradoDto],
    description: 'The found reintegrado',
  })
  async findAll(): Promise<reintegrado[]> {
    return await this.service.findAll();
  }

  @Post('search')
  @HttpCode(200)
  @ApiOperation({ summary: 'Search reintegrado' })
  @ApiCreatedResponse({
    type: UpdatereintegradoDto,
    description: 'Searched reintegrado',
  })
  @ApiBadRequestResponse({ type: ErrorResponse, description: 'Bad Request' })
  async search(@Body() data: CreatereintegradoDto): Promise<reintegrado[]> {
    return await this.service.search(data);
  }

  @Post()
  @HttpCode(201)
  @ApiOperation({ summary: 'Create a new reintegrado' })
  @ApiCreatedResponse({
    type: UpdatereintegradoDto,
    description: 'Created reintegrado',
  })
  @ApiBadRequestResponse({ type: ErrorResponse, description: 'Bad Request' })
  async create(@Body() data: CreatereintegradoDto): Promise<reintegrado> {
    return await this.service.create(data);
  }

  @Get(':id')
  @HttpCode(200)
  @ApiOperation({ summary: 'Search a reintegrado by id' })
  @ApiOkResponse({
    type: UpdatereintegradoDto,
    description: 'The found reintegrado',
  })
  @ApiNotFoundResponse({ type: ErrorResponse, description: 'Not Found' })
  async findById(@Param('id') id: string): Promise<reintegrado> {
    return await this.service.findById(id);
  }

  @Put(':id')
  @HttpCode(200)
  @ApiOperation({ summary: 'Update a reintegrado' })
  @ApiOkResponse({
    type: UpdatereintegradoDto,
    description: 'Updated reintegrado',
  })
  @ApiNotFoundResponse({ type: ErrorResponse, description: 'Not Found' })
  async update(
    @Param('id') id: string,
    @Body() data: UpdatereintegradoDto,
  ): Promise<reintegrado> {
    return this.service.update(id, data);
  }

  @Put(':id/restore')
  @HttpCode(200)
  @UseGuards(JwtAuthGuard, ACLGuard)
  @ACLPolice({ roles: [], permissions: [] })
  @ApiOperation({ summary: 'Delete a Reintegrado' })
  @ApiNoContentResponse({ description: 'Deleted Reintegrado' })
  @ApiNotFoundResponse({ type: ErrorResponse, description: 'Not Found' })
  async restore(
    @Param('id') id: string,
    @Request() request?: any,
  ): Promise<Reintegrado> {
    const data = await this.service.restore(id);

    await activityLog({
      module: 'reintegrado',
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
  @ApiOperation({ summary: 'Delete a Reintegrado' })
  @ApiNoContentResponse({ description: 'Deleted Reintegrado' })
  @ApiNotFoundResponse({ type: ErrorResponse, description: 'Not Found' })
  async delete(
    @Param('id') id: string,
    @Request() request?: any,
  ): Promise<Reintegrado> {
    const data = await this.service.delete(id);

    await activityLog({
      module: 'reintegrado',
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
  @ApiOperation({ summary: 'Delete definitive a Reintegrado' })
  @ApiNoContentResponse({ description: 'Deleted definitive Reintegrado' })
  @ApiNotFoundResponse({ type: ErrorResponse, description: 'Not Found' })
  async forceDelete(
    @Param('id') id: string,
    @Request() request?: any,
  ): Promise<Reintegrado> {
    const data = await this.service.forceDelete(id);

    await activityLog({
      module: 'reintegrado',
      action: 'forceDelete',
      data,
      user: request?.user,
    });
    return data;
  }
}

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
import { CreateSituacaoDto } from '../dtos/create.dto';
import { UpdateSituacaoDto } from '../dtos/update.dto';
import Situacao from '../entity/situacao.entity';
import { SituacaoService } from '../service/situacao.service';

@ApiTags('Situacao')
@Controller('situacoes')
export class SituacaoController {
  constructor(private service: SituacaoService) {}

  @Get()
  @HttpCode(200)
  @ApiOperation({ summary: 'Search all Situacao' })
  @ApiOkResponse({
    type: [CreateSituacaoDto],
    description: 'The found Situacao',
  })
  async findAll(): Promise<Situacao[]> {
    return await this.service.findAll();
  }

  @Post('search')
  @HttpCode(200)
  @ApiOperation({ summary: 'Search Situacao' })
  @ApiCreatedResponse({
    type: UpdateSituacaoDto,
    description: 'Searched Situacao',
  })
  @ApiBadRequestResponse({ type: ErrorResponse, description: 'Bad Request' })
  async search(@Body() data: CreateSituacaoDto): Promise<Situacao[]> {
    return await this.service.search(data);
  }

  @Post()
  @HttpCode(201)
  @ApiOperation({ summary: 'Create a new Situacao' })
  @ApiCreatedResponse({
    type: UpdateSituacaoDto,
    description: 'Created Situacao',
  })
  @ApiBadRequestResponse({ type: ErrorResponse, description: 'Bad Request' })
  async create(@Body() data: CreateSituacaoDto): Promise<Situacao> {
    return await this.service.create(data);
  }

  @Get(':id')
  @HttpCode(200)
  @ApiOperation({ summary: 'Search a Situacao by id' })
  @ApiOkResponse({ type: UpdateSituacaoDto, description: 'The found Situacao' })
  @ApiNotFoundResponse({ type: ErrorResponse, description: 'Not Found' })
  async findById(@Param('id') id: string): Promise<Situacao> {
    return await this.service.findById(id);
  }

  @Put(':id')
  @HttpCode(200)
  @ApiOperation({ summary: 'Update a Situacao' })
  @ApiOkResponse({ type: UpdateSituacaoDto, description: 'Updated Situacao' })
  @ApiNotFoundResponse({ type: ErrorResponse, description: 'Not Found' })
  async update(
    @Param('id') id: string,
    @Body() data: UpdateSituacaoDto,
  ): Promise<Situacao> {
    return this.service.update(id, data);
  }

  @Delete(':id')
  @HttpCode(204)
  @ApiOperation({ summary: 'Delete a Situacao' })
  @ApiNoContentResponse({ description: 'Deleted Situacao' })
  @ApiNotFoundResponse({ type: ErrorResponse, description: 'Not Found' })
  async delete(@Param('id') id: string): Promise<void> {
    await this.service.delete(id);
  }
}

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

import { CreateGradacaoDto } from '../dtos/create.dto';
import { UpdateGradacaoDto } from '../dtos/update.dto';
import { Gradacao } from '../entity/gradacao.entity';
import { GradacaoService } from '../service/gradacao.service';

@ApiTags('Gradacao')
@Controller('gradacoes')
export class GradacaoController {
  constructor(private service: GradacaoService) {}

  @Get()
  @HttpCode(200)
  @ApiOperation({ summary: 'Search all Gradacao' })
  @ApiOkResponse({ type: [CreateGradacaoDto], description: 'The found Gradacao' })
  async findAll(): Promise<Gradacao[]> {
    return await this.service.findAll();
  }

  @Post()
  @HttpCode(201)
  @ApiOperation({ summary: 'Create a new Gradacao' })
  @ApiCreatedResponse({ type: UpdateGradacaoDto, description: 'Created Gradacao' })
  @ApiBadRequestResponse({ type: ErrorResponse, description: 'Bad Request', })
  async create(@Body() data: CreateGradacaoDto): Promise<Gradacao> {
    return await this.service.create(data);
  }

  @Get(':id')
  @HttpCode(200)
  @ApiOperation({ summary: 'Search a Gradacao by id' })
  @ApiOkResponse({ type: UpdateGradacaoDto, description: 'The found Gradacao' })
  @ApiNotFoundResponse({ type: ErrorResponse, description: 'Not Found' })
  async findById(@Param('id') id: string): Promise<Gradacao> {
    return await this.service.findById(id);
  }

  @Put(':id')
  @HttpCode(200)
  @ApiOperation({ summary: 'Update a Gradacao' })
  @ApiOkResponse({ type: UpdateGradacaoDto, description: 'Updated Gradacao' })
  @ApiNotFoundResponse({ type: ErrorResponse, description: 'Not Found' })
  async update(
    @Param('id') id: string,
    @Body() data: UpdateGradacaoDto,
  ): Promise<Gradacao> {
    return this.service.update(id, data);
  }

  @Delete(':id')
  @HttpCode(204)
  @ApiOperation({ summary: 'Delete a Gradacao' })
  @ApiNoContentResponse({ description: 'Deleted Gradacao' })
  @ApiNotFoundResponse({ type: ErrorResponse, description: 'Not Found' })
  async delete(@Param('id') id: string): Promise<void> {
    await this.service.delete(id);
  }
}
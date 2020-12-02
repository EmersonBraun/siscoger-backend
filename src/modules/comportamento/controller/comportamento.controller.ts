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

import { CreateComportamentoDto } from '../dtos/create.dto';
import { UpdateComportamentoDto } from '../dtos/update.dto';
import { Comportamento } from '../entity/comportamento.entity';
import { ComportamentoService } from '../service/comportamento.service';

@ApiTags('Comportamento')
@Controller('comportamentos')
export class ComportamentoController {
  constructor(private service: ComportamentoService) {}

  @Get()
  @HttpCode(200)
  @ApiOperation({ summary: 'Search all Comportamento' })
  @ApiOkResponse({ type: [CreateComportamentoDto], description: 'The found Comportamento' })
  async findAll(): Promise<Comportamento[]> {
    return await this.service.findAll();
  }

  @Post()
  @HttpCode(201)
  @ApiOperation({ summary: 'Create a new Comportamento' })
  @ApiCreatedResponse({ type: UpdateComportamentoDto, description: 'Created Comportamento' })
  @ApiBadRequestResponse({ type: ErrorResponse, description: 'Bad Request', })
  async create(@Body() data: CreateComportamentoDto): Promise<Comportamento> {
    return await this.service.create(data);
  }

  @Get(':id')
  @HttpCode(200)
  @ApiOperation({ summary: 'Search a Comportamento by id' })
  @ApiOkResponse({ type: UpdateComportamentoDto, description: 'The found Comportamento' })
  @ApiNotFoundResponse({ type: ErrorResponse, description: 'Not Found' })
  async findById(@Param('id') id: string): Promise<Comportamento> {
    return await this.service.findById(id);
  }

  @Put(':id')
  @HttpCode(200)
  @ApiOperation({ summary: 'Update a Comportamento' })
  @ApiOkResponse({ type: UpdateComportamentoDto, description: 'Updated Comportamento' })
  @ApiNotFoundResponse({ type: ErrorResponse, description: 'Not Found' })
  async update(
    @Param('id') id: string,
    @Body() data: UpdateComportamentoDto,
  ): Promise<Comportamento> {
    return this.service.update(id, data);
  }

  @Delete(':id')
  @HttpCode(204)
  @ApiOperation({ summary: 'Delete a Comportamento' })
  @ApiNoContentResponse({ description: 'Deleted Comportamento' })
  @ApiNotFoundResponse({ type: ErrorResponse, description: 'Not Found' })
  async delete(@Param('id') id: string): Promise<void> {
    await this.service.delete(id);
  }
}
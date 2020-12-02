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

import { CreateFalecimentoDto } from '../dtos/create.dto';
import { UpdateFalecimentoDto } from '../dtos/update.dto';
import { Falecimento } from '../entity/falecimento.entity';
import { FalecimentoService } from '../service/falecimento.service';

@ApiTags('Falecimento')
@Controller('falecimentos')
export class FalecimentoController {
  constructor(private service: FalecimentoService) {}

  @Get()
  @HttpCode(200)
  @ApiOperation({ summary: 'Search all Falecimento' })
  @ApiOkResponse({ type: [CreateFalecimentoDto], description: 'The found Falecimento' })
  async findAll(): Promise<Falecimento[]> {
    return await this.service.findAll();
  }

  @Post()
  @HttpCode(201)
  @ApiOperation({ summary: 'Create a new Falecimento' })
  @ApiCreatedResponse({ type: UpdateFalecimentoDto, description: 'Created Falecimento' })
  @ApiBadRequestResponse({ type: ErrorResponse, description: 'Bad Request', })
  async create(@Body() data: CreateFalecimentoDto): Promise<Falecimento> {
    return await this.service.create(data);
  }

  @Get(':id')
  @HttpCode(200)
  @ApiOperation({ summary: 'Search a Falecimento by id' })
  @ApiOkResponse({ type: UpdateFalecimentoDto, description: 'The found Falecimento' })
  @ApiNotFoundResponse({ type: ErrorResponse, description: 'Not Found' })
  async findById(@Param('id') id: string): Promise<Falecimento> {
    return await this.service.findById(id);
  }

  @Put(':id')
  @HttpCode(200)
  @ApiOperation({ summary: 'Update a Falecimento' })
  @ApiOkResponse({ type: UpdateFalecimentoDto, description: 'Updated Falecimento' })
  @ApiNotFoundResponse({ type: ErrorResponse, description: 'Not Found' })
  async update(
    @Param('id') id: string,
    @Body() data: UpdateFalecimentoDto,
  ): Promise<Falecimento> {
    return this.service.update(id, data);
  }

  @Delete(':id')
  @HttpCode(204)
  @ApiOperation({ summary: 'Delete a Falecimento' })
  @ApiNoContentResponse({ description: 'Deleted Falecimento' })
  @ApiNotFoundResponse({ type: ErrorResponse, description: 'Not Found' })
  async delete(@Param('id') id: string): Promise<void> {
    await this.service.delete(id);
  }
}
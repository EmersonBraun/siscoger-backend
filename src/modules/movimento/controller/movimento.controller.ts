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

import { CreateMovimentoDto } from '../dtos/create.dto';
import { UpdateMovimentoDto } from '../dtos/update.dto';
import { Movimento } from '../entity/movimento.entity';
import { MovimentoService } from '../service/movimento.service';

@ApiTags('Movimento')
@Controller('movimentos')
export class MovimentoController {
  constructor(private service: MovimentoService) {}

  @Get()
  @HttpCode(200)
  @ApiOperation({ summary: 'Search all Movimento' })
  @ApiOkResponse({ type: [CreateMovimentoDto], description: 'The found Movimento' })
  async findAll(): Promise<Movimento[]> {
    return await this.service.findAll();
  }

  @Post('search')
  @HttpCode(200)
  @ApiOperation({ summary: 'Search Movimento' })
  @ApiCreatedResponse({ type: UpdateMovimentoDto, description: 'Searched Movimento' })
  @ApiBadRequestResponse({ type: ErrorResponse, description: 'Bad Request', })
  async search(@Body() data: CreateMovimentoDto): Promise<Movimento[]> {
    return await this.service.search(data);
  }

  @Post()
  @HttpCode(201)
  @ApiOperation({ summary: 'Create a new Movimento' })
  @ApiCreatedResponse({ type: UpdateMovimentoDto, description: 'Created Movimento' })
  @ApiBadRequestResponse({ type: ErrorResponse, description: 'Bad Request', })
  async create(@Body() data: CreateMovimentoDto): Promise<Movimento> {
    return await this.service.create(data);
  }

  @Get(':id')
  @HttpCode(200)
  @ApiOperation({ summary: 'Search a Movimento by id' })
  @ApiOkResponse({ type: UpdateMovimentoDto, description: 'The found Movimento' })
  @ApiNotFoundResponse({ type: ErrorResponse, description: 'Not Found' })
  async findById(@Param('id') id: string): Promise<Movimento> {
    return await this.service.findById(id);
  }

  @Put(':id')
  @HttpCode(200)
  @ApiOperation({ summary: 'Update a Movimento' })
  @ApiOkResponse({ type: UpdateMovimentoDto, description: 'Updated Movimento' })
  @ApiNotFoundResponse({ type: ErrorResponse, description: 'Not Found' })
  async update(
    @Param('id') id: string,
    @Body() data: UpdateMovimentoDto,
  ): Promise<Movimento> {
    return this.service.update(id, data);
  }

  @Delete(':id')
  @HttpCode(204)
  @ApiOperation({ summary: 'Delete a Movimento' })
  @ApiNoContentResponse({ description: 'Deleted Movimento' })
  @ApiNotFoundResponse({ type: ErrorResponse, description: 'Not Found' })
  async delete(@Param('id') id: string): Promise<void> {
    await this.service.delete(id);
  }
}
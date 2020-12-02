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

import { CreateAndamentocogerDto } from '../dtos/create.dto';
import { UpdateAndamentocogerDto } from '../dtos/update.dto';
import { Andamentocoger } from '../entity/andamentocoger.entity';
import { AndamentocogerService } from '../service/andamentocoger.service';

@ApiTags('Andamentocoger')
@Controller('andamentoscoger')
export class AndamentocogerController {
  constructor(private service: AndamentocogerService) {}

  @Get()
  @HttpCode(200)
  @ApiOperation({ summary: 'Search all Andamentocoger' })
  @ApiOkResponse({ type: [CreateAndamentocogerDto], description: 'The found Andamentocoger' })
  async findAll(): Promise<Andamentocoger[]> {
    return await this.service.findAll();
  }

  @Post()
  @HttpCode(201)
  @ApiOperation({ summary: 'Create a new Andamentocoger' })
  @ApiCreatedResponse({ type: UpdateAndamentocogerDto, description: 'Created Andamentocoger' })
  @ApiBadRequestResponse({ type: ErrorResponse, description: 'Bad Request', })
  async create(@Body() data: CreateAndamentocogerDto): Promise<Andamentocoger> {
    return await this.service.create(data);
  }

  @Get(':id')
  @HttpCode(200)
  @ApiOperation({ summary: 'Search a Andamentocoger by id' })
  @ApiOkResponse({ type: UpdateAndamentocogerDto, description: 'The found Andamentocoger' })
  @ApiNotFoundResponse({ type: ErrorResponse, description: 'Not Found' })
  async findById(@Param('id') id: string): Promise<Andamentocoger> {
    return await this.service.findById(id);
  }

  @Put(':id')
  @HttpCode(200)
  @ApiOperation({ summary: 'Update a Andamentocoger' })
  @ApiOkResponse({ type: UpdateAndamentocogerDto, description: 'Updated Andamentocoger' })
  @ApiNotFoundResponse({ type: ErrorResponse, description: 'Not Found' })
  async update(
    @Param('id') id: string,
    @Body() data: UpdateAndamentocogerDto,
  ): Promise<Andamentocoger> {
    return this.service.update(id, data);
  }

  @Delete(':id')
  @HttpCode(204)
  @ApiOperation({ summary: 'Delete a Andamentocoger' })
  @ApiNoContentResponse({ description: 'Deleted Andamentocoger' })
  @ApiNotFoundResponse({ type: ErrorResponse, description: 'Not Found' })
  async delete(@Param('id') id: string): Promise<void> {
    await this.service.delete(id);
  }
}
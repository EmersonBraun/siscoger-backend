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

import { CreateEnvolvidoDto } from '../dtos/create.dto';
import { UpdateEnvolvidoDto } from '../dtos/update.dto';
import { Envolvido } from '../entity/envolvido.entity';
import { EnvolvidoService } from '../service/envolvido.service';

@ApiTags('Envolvido')
@Controller('envolvidos')
export class EnvolvidoController {
  constructor(private service: EnvolvidoService) {}

  @Get()
  @HttpCode(200)
  @ApiOperation({ summary: 'Search all Envolvido' })
  @ApiOkResponse({ type: [CreateEnvolvidoDto], description: 'The found Envolvido' })
  async findAll(): Promise<Envolvido[]> {
    return await this.service.findAll();
  }

  @Post('search')
  @HttpCode(200)
  @ApiOperation({ summary: 'Search Envolvido' })
  @ApiCreatedResponse({ type: UpdateEnvolvidoDto, description: 'Searched Ligacao' })
  @ApiBadRequestResponse({ type: ErrorResponse, description: 'Bad Request', })
  async search(@Body() data: CreateEnvolvidoDto): Promise<Envolvido[]> {
    return await this.service.search(data);
  }

  @Post()
  @HttpCode(201)
  @ApiOperation({ summary: 'Create a new Envolvido' })
  @ApiCreatedResponse({ type: UpdateEnvolvidoDto, description: 'Created Envolvido' })
  @ApiBadRequestResponse({ type: ErrorResponse, description: 'Bad Request', })
  async create(@Body() data: CreateEnvolvidoDto): Promise<Envolvido> {
    return await this.service.create(data);
  }

  @Get(':id')
  @HttpCode(200)
  @ApiOperation({ summary: 'Search a Envolvido by id' })
  @ApiOkResponse({ type: UpdateEnvolvidoDto, description: 'The found Envolvido' })
  @ApiNotFoundResponse({ type: ErrorResponse, description: 'Not Found' })
  async findById(@Param('id') id: string): Promise<Envolvido> {
    return await this.service.findById(id);
  }

  @Put(':id')
  @HttpCode(200)
  @ApiOperation({ summary: 'Update a Envolvido' })
  @ApiOkResponse({ type: UpdateEnvolvidoDto, description: 'Updated Envolvido' })
  @ApiNotFoundResponse({ type: ErrorResponse, description: 'Not Found' })
  async update(
    @Param('id') id: string,
    @Body() data: UpdateEnvolvidoDto,
  ): Promise<Envolvido> {
    return this.service.update(id, data);
  }

  @Delete(':id')
  @HttpCode(204)
  @ApiOperation({ summary: 'Delete a Envolvido' })
  @ApiNoContentResponse({ description: 'Deleted Envolvido' })
  @ApiNotFoundResponse({ type: ErrorResponse, description: 'Not Found' })
  async delete(@Param('id') id: string): Promise<void> {
    await this.service.delete(id);
  }
}
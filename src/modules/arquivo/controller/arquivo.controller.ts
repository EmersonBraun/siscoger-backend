import {
  Body,
  Controller,
  Delete,
  Get,
  HttpCode,
  Param,
  Post,
  Put
} from '@nestjs/common';
import {
  ApiBadRequestResponse,
  ApiCreatedResponse,
  ApiNoContentResponse,
  ApiNotFoundResponse,
  ApiOkResponse,
  ApiOperation,
  ApiTags
} from '@nestjs/swagger';
import { ErrorResponse } from '../../../common/responses';
import { SearchArquivoDto } from '../dtos';
import { CreateArquivoDto } from '../dtos/create.dto';
import { UpdateArquivoDto } from '../dtos/update.dto';
import { Arquivo } from '../entity/arquivo.entity';
import { ArquivoService } from '../service/arquivo.service';


@ApiTags('Arquivo')
@Controller('Arquivos')
export class ArquivoController {
  constructor(private service: ArquivoService) {}

  @Get()
  @HttpCode(200)
  @ApiOperation({ summary: 'Search all Arquivo' })
  @ApiOkResponse({ type: [CreateArquivoDto], description: 'The found Arquivo' })
  async findAll(): Promise<Arquivo[]> {
    return await this.service.findAll();
  }

  @Post('search')
  @HttpCode(200)
  @ApiOperation({ summary: 'Search Arquivo' })
  @ApiCreatedResponse({ type: SearchArquivoDto, description: 'Searched Arquivo' })
  @ApiBadRequestResponse({ type: ErrorResponse, description: 'Bad Request', })
  async search(@Body() data: SearchArquivoDto): Promise<Arquivo[]> {
    return await this.service.search(data);
  }

  @Post()
  @HttpCode(201)
  @ApiOperation({ summary: 'Create a new Arquivo' })
  @ApiCreatedResponse({ type: UpdateArquivoDto, description: 'Created Arquivo' })
  @ApiBadRequestResponse({ type: ErrorResponse, description: 'Bad Request', })
  async create(@Body() data: CreateArquivoDto): Promise<Arquivo> {
    return await this.service.create(data);
  }

  @Get(':id')
  @HttpCode(200)
  @ApiOperation({ summary: 'Search a Arquivo by id' })
  @ApiOkResponse({ type: UpdateArquivoDto, description: 'The found Arquivo' })
  @ApiNotFoundResponse({ type: ErrorResponse, description: 'Not Found' })
  async findById(@Param('id') id: string): Promise<Arquivo> {
    return await this.service.findById(id);
  }

  @Put(':id')
  @HttpCode(200)
  @ApiOperation({ summary: 'Update a Arquivo' })
  @ApiOkResponse({ type: UpdateArquivoDto, description: 'Updated Arquivo' })
  @ApiNotFoundResponse({ type: ErrorResponse, description: 'Not Found' })
  async update(
    @Param('id') id: string,
    @Body() data: UpdateArquivoDto,
  ): Promise<Arquivo> {
    return this.service.update(id, data);
  }

  @Delete(':id')
  @HttpCode(204)
  @ApiOperation({ summary: 'Delete a Arquivo' })
  @ApiNoContentResponse({ description: 'Deleted Arquivo' })
  @ApiNotFoundResponse({ type: ErrorResponse, description: 'Not Found' })
  async delete(@Param('id') id: string): Promise<void> {
    await this.service.delete(id);
  }
}
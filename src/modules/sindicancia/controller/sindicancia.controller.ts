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
import { CreateSindicanciaDto } from '../dtos/create.dto';
import { SearchPortariaDto } from '../dtos/search-portaria.dto';
import { UpdateSindicanciaDto } from '../dtos/update.dto';
import { Sindicancia } from '../entity/sindicancia.entity';
import { SindicanciaService } from '../service/sindicancia.service';


@ApiTags('Sindicancia')
@Controller('sindicancias')
export class SindicanciaController {
  constructor(private service: SindicanciaService) {}

  @Get()
  @HttpCode(200)
  @ApiOperation({ summary: 'Search all Sindicancia' })
  @ApiOkResponse({ type: [CreateSindicanciaDto], description: 'The found Sindicancia' })
  async findAll(): Promise<Sindicancia[]> {
    return await this.service.findAll();
  }

  @Get('/andamento')
  @HttpCode(200)
  @ApiOperation({ summary: 'Search all Sindicancia' })
  @ApiOkResponse({ type: [CreateSindicanciaDto], description: 'The found Sindicancia' })
  async andamento(): Promise<Sindicancia[]> {
    return await this.service.findAndamento();
  }

  @Post('portarias')
  @HttpCode(200)
  @ApiOperation({ summary: 'Found Sindicancia' })
  @ApiOkResponse({ type: CreateSindicanciaDto, description: 'Found Sindicancia' })
  @ApiBadRequestResponse({ type: ErrorResponse, description: 'Bad Request', })
  async findPortaria(
    @Body() data: SearchPortariaDto,
    ): Promise<any> {
    return await this.service.findPortaria(data);
  }

  @Post()
  @HttpCode(201)
  @ApiOperation({ summary: 'Create a new Sindicancia' })
  @ApiCreatedResponse({ type: UpdateSindicanciaDto, description: 'Created Sindicancia' })
  @ApiBadRequestResponse({ type: ErrorResponse, description: 'Bad Request', })
  async create(@Body() data: CreateSindicanciaDto): Promise<Sindicancia> {
    return await this.service.create(data);
  }

  @Get(':id')
  @HttpCode(200)
  @ApiOperation({ summary: 'Search a Sindicancia by id' })
  @ApiOkResponse({ type: UpdateSindicanciaDto, description: 'The found Sindicancia' })
  @ApiNotFoundResponse({ type: ErrorResponse, description: 'Not Found' })
  async findById(@Param('id') id: string): Promise<Sindicancia> {
    return await this.service.findById(id);
  }

  @Put(':id')
  @HttpCode(200)
  @ApiOperation({ summary: 'Update a Sindicancia' })
  @ApiOkResponse({ type: UpdateSindicanciaDto, description: 'Updated Sindicancia' })
  @ApiNotFoundResponse({ type: ErrorResponse, description: 'Not Found' })
  async update(
    @Param('id') id: string,
    @Body() data: UpdateSindicanciaDto,
  ): Promise<Sindicancia> {
    return this.service.update(id, data);
  }

  @Delete(':id')
  @HttpCode(204)
  @ApiOperation({ summary: 'Delete a Sindicancia' })
  @ApiNoContentResponse({ description: 'Deleted Sindicancia' })
  @ApiNotFoundResponse({ type: ErrorResponse, description: 'Not Found' })
  async delete(@Param('id') id: string): Promise<void> {
    await this.service.delete(id);
  }
}
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
import { SearchSobrestamentoDto } from '../dtos';
import { BetweenDatesDto } from '../dtos/between-dates.dto';
import { CreateSobrestamentoDto } from '../dtos/create.dto';
import { UpdateSobrestamentoDto } from '../dtos/update.dto';
import { Sobrestamento } from '../entity/sobrestamento.entity';
import { SobrestamentoService } from '../service/sobrestamento.service';


@ApiTags('Sobrestamento')
@Controller('sobrestamentos')
export class SobrestamentoController {
  constructor(private service: SobrestamentoService) {}

  @Get()
  @HttpCode(200)
  @ApiOperation({ summary: 'Search all Sobrestamento' })
  @ApiOkResponse({ type: [CreateSobrestamentoDto], description: 'The found Sobrestamento' })
  async findAll(): Promise<Sobrestamento[]> {
    return await this.service.findAll();
  }

  @Post('search')
  @HttpCode(200)
  @ApiOperation({ summary: 'Search Sobrestamento' })
  @ApiCreatedResponse({ type: SearchSobrestamentoDto, description: 'Searched Sobrestamento' })
  @ApiBadRequestResponse({ type: ErrorResponse, description: 'Bad Request', })
  async search(@Body() data: SearchSobrestamentoDto): Promise<Sobrestamento[]> {
    return await this.service.search(data);
  }

  @Post('/between-dates')
  @HttpCode(200)
  @ApiOperation({ summary: 'Verify countable days' })
  @ApiCreatedResponse({ type: 'number', description: 'Countable Days' })
  @ApiBadRequestResponse({ type: ErrorResponse, description: 'Bad Request', })
  async betweenDates(@Body() data: BetweenDatesDto): Promise<number> {
    const { init, end, procData } = data
    return await this.service.betweenDates(init, end, procData);
  }

  @Post()
  @HttpCode(201)
  @ApiOperation({ summary: 'Create a new Sobrestamento' })
  @ApiCreatedResponse({ type: UpdateSobrestamentoDto, description: 'Created Sobrestamento' })
  @ApiBadRequestResponse({ type: ErrorResponse, description: 'Bad Request', })
  async create(@Body() data: CreateSobrestamentoDto): Promise<Sobrestamento> {
    return await this.service.create(data);
  }

  @Get(':id')
  @HttpCode(200)
  @ApiOperation({ summary: 'Search a Sobrestamento by id' })
  @ApiOkResponse({ type: UpdateSobrestamentoDto, description: 'The found Sobrestamento' })
  @ApiNotFoundResponse({ type: ErrorResponse, description: 'Not Found' })
  async findById(@Param('id') id: string): Promise<Sobrestamento> {
    return await this.service.findById(id);
  }

  @Put(':id')
  @HttpCode(200)
  @ApiOperation({ summary: 'Update a Sobrestamento' })
  @ApiOkResponse({ type: UpdateSobrestamentoDto, description: 'Updated Sobrestamento' })
  @ApiNotFoundResponse({ type: ErrorResponse, description: 'Not Found' })
  async update(
    @Param('id') id: string,
    @Body() data: UpdateSobrestamentoDto,
  ): Promise<Sobrestamento> {
    return this.service.update(id, data);
  }

  @Delete(':id')
  @HttpCode(204)
  @ApiOperation({ summary: 'Delete a Sobrestamento' })
  @ApiNoContentResponse({ description: 'Deleted Sobrestamento' })
  @ApiNotFoundResponse({ type: ErrorResponse, description: 'Not Found' })
  async delete(@Param('id') id: string): Promise<void> {
    await this.service.delete(id);
  }
}
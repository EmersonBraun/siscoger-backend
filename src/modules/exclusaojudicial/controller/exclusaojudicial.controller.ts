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
import { CreateExclusaoJudicialDto } from '../dtos/create.dto';
import { UpdateExclusaoJudicialDto } from '../dtos/update.dto';
import ExclusaoJudicial from '../entity/exclusaojudicial.entity';
import { ExclusaoJudicialService } from '../service/exclusaojudicial.service';

@ApiTags('ExclusaoJudicial')
@Controller('exclusoesjudicias')
export class ExclusaoJudicialController {
  constructor(private service: ExclusaoJudicialService) {}

  @Get()
  @HttpCode(200)
  @ApiOperation({ summary: 'Search all ExclusaoJudicial' })
  @ApiOkResponse({
    type: [CreateExclusaoJudicialDto],
    description: 'The found ExclusaoJudicial',
  })
  async findAll(): Promise<ExclusaoJudicial[]> {
    return await this.service.findAll();
  }

  @Post('search')
  @HttpCode(200)
  @ApiOperation({ summary: 'Search ExclusaoJudicial' })
  @ApiCreatedResponse({
    type: UpdateExclusaoJudicialDto,
    description: 'Searched ExclusaoJudicial',
  })
  @ApiBadRequestResponse({ type: ErrorResponse, description: 'Bad Request' })
  async search(
    @Body() data: CreateExclusaoJudicialDto,
  ): Promise<ExclusaoJudicial[]> {
    return await this.service.search(data);
  }

  @Post()
  @HttpCode(201)
  @ApiOperation({ summary: 'Create a new ExclusaoJudicial' })
  @ApiCreatedResponse({
    type: UpdateExclusaoJudicialDto,
    description: 'Created ExclusaoJudicial',
  })
  @ApiBadRequestResponse({ type: ErrorResponse, description: 'Bad Request' })
  async create(
    @Body() data: CreateExclusaoJudicialDto,
  ): Promise<ExclusaoJudicial> {
    return await this.service.create(data);
  }

  @Get(':id')
  @HttpCode(200)
  @ApiOperation({ summary: 'Search a ExclusaoJudicial by id' })
  @ApiOkResponse({
    type: UpdateExclusaoJudicialDto,
    description: 'The found ExclusaoJudicial',
  })
  @ApiNotFoundResponse({ type: ErrorResponse, description: 'Not Found' })
  async findById(@Param('id') id: string): Promise<ExclusaoJudicial> {
    return await this.service.findById(id);
  }

  @Put(':id')
  @HttpCode(200)
  @ApiOperation({ summary: 'Update a ExclusaoJudicial' })
  @ApiOkResponse({
    type: UpdateExclusaoJudicialDto,
    description: 'Updated ExclusaoJudicial',
  })
  @ApiNotFoundResponse({ type: ErrorResponse, description: 'Not Found' })
  async update(
    @Param('id') id: string,
    @Body() data: UpdateExclusaoJudicialDto,
  ): Promise<ExclusaoJudicial> {
    return this.service.update(id, data);
  }

  @Delete(':id')
  @HttpCode(204)
  @ApiOperation({ summary: 'Delete a ExclusaoJudicial' })
  @ApiNoContentResponse({ description: 'Deleted ExclusaoJudicial' })
  @ApiNotFoundResponse({ type: ErrorResponse, description: 'Not Found' })
  async delete(@Param('id') id: string): Promise<void> {
    await this.service.delete(id);
  }
}

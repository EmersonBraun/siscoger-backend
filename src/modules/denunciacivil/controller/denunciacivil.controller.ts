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
import { CreateDenunciaCivilDto } from '../dtos/create.dto';
import { UpdateDenunciaCivilDto } from '../dtos/update.dto';
import DenunciaCivil from '../entity/denunciacivil.entity';
import { DenunciaCivilService } from '../service/denunciacivil.service';

@ApiTags('DenunciaCivil')
@Controller('DenunciaCivils')
export class DenunciaCivilController {
  constructor(private service: DenunciaCivilService) {}

  @Get()
  @HttpCode(200)
  @ApiOperation({ summary: 'Search all DenunciaCivil' })
  @ApiOkResponse({
    type: [CreateDenunciaCivilDto],
    description: 'The found DenunciaCivil',
  })
  async findAll(): Promise<DenunciaCivil[]> {
    return await this.service.findAll();
  }

  @Post('search')
  @HttpCode(200)
  @ApiOperation({ summary: 'Search DenunciaCivil' })
  @ApiCreatedResponse({
    type: UpdateDenunciaCivilDto,
    description: 'Searched DenunciaCivil',
  })
  @ApiBadRequestResponse({ type: ErrorResponse, description: 'Bad Request' })
  async search(@Body() data: CreateDenunciaCivilDto): Promise<DenunciaCivil[]> {
    return await this.service.search(data);
  }

  @Post()
  @HttpCode(201)
  @ApiOperation({ summary: 'Create a new DenunciaCivil' })
  @ApiCreatedResponse({
    type: UpdateDenunciaCivilDto,
    description: 'Created DenunciaCivil',
  })
  @ApiBadRequestResponse({ type: ErrorResponse, description: 'Bad Request' })
  async create(@Body() data: CreateDenunciaCivilDto): Promise<DenunciaCivil> {
    return await this.service.create(data);
  }

  @Get(':id')
  @HttpCode(200)
  @ApiOperation({ summary: 'Search a DenunciaCivil by id' })
  @ApiOkResponse({
    type: UpdateDenunciaCivilDto,
    description: 'The found DenunciaCivil',
  })
  @ApiNotFoundResponse({ type: ErrorResponse, description: 'Not Found' })
  async findById(@Param('id') id: string): Promise<DenunciaCivil> {
    return await this.service.findById(id);
  }

  @Put(':id')
  @HttpCode(200)
  @ApiOperation({ summary: 'Update a DenunciaCivil' })
  @ApiOkResponse({
    type: UpdateDenunciaCivilDto,
    description: 'Updated DenunciaCivil',
  })
  @ApiNotFoundResponse({ type: ErrorResponse, description: 'Not Found' })
  async update(
    @Param('id') id: string,
    @Body() data: UpdateDenunciaCivilDto,
  ): Promise<DenunciaCivil> {
    return this.service.update(id, data);
  }

  @Delete(':id')
  @HttpCode(204)
  @ApiOperation({ summary: 'Delete a DenunciaCivil' })
  @ApiNoContentResponse({ description: 'Deleted DenunciaCivil' })
  @ApiNotFoundResponse({ type: ErrorResponse, description: 'Not Found' })
  async delete(@Param('id') id: string): Promise<void> {
    await this.service.delete(id);
  }
}

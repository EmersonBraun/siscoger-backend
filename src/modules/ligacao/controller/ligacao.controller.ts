import {
  Body,
  Controller,
  Delete,
  Get,
  HttpCode,
  Param,
  Post,
  Put,
  UseGuards
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
import { ACLPolice } from '../../../common/decorators/acl.decorator';
import { ACLGuard } from '../../../common/guards/acl.guard';
import { JwtAuthGuard } from '../../../common/guards/jwt.guard';
import { ErrorResponse } from '../../../common/responses';
import { CreateLigacaoDto } from '../dtos/create.dto';
import { UpdateLigacaoDto } from '../dtos/update.dto';
import { Ligacao } from '../entity/ligacao.entity';
import { LigacaoService } from '../service/ligacao.service';


@ApiTags('Ligacao')
@Controller('ligacoes')
export class LigacaoController {
  constructor(private service: LigacaoService) {}

  @Get()
  @HttpCode(200)
  @UseGuards(JwtAuthGuard, ACLGuard) 
  @ACLPolice({roles: [], permissions: []})
  @ApiOperation({ summary: 'Search all Ligacao' })
  @ApiOkResponse({ type: [CreateLigacaoDto], description: 'The found Ligacao' })
  async findAll(): Promise<Ligacao[]> {
    return await this.service.findAll();
  }

  @Post('search')
  @HttpCode(200)
  @UseGuards(JwtAuthGuard, ACLGuard) 
  @ACLPolice({roles: [], permissions: []})
  @ApiOperation({ summary: 'Search Ligacao' })
  @ApiCreatedResponse({ type: UpdateLigacaoDto, description: 'Searched Ligacao' })
  @ApiBadRequestResponse({ type: ErrorResponse, description: 'Bad Request', })
  async search(@Body() data: CreateLigacaoDto): Promise<Ligacao[]> {
    return await this.service.search(data);
  }

  @Post()
  @HttpCode(201)
  @UseGuards(JwtAuthGuard, ACLGuard) 
  @ACLPolice({roles: [], permissions: []})
  @ApiOperation({ summary: 'Create a new Ligacao' })
  @ApiCreatedResponse({ type: UpdateLigacaoDto, description: 'Created Ligacao' })
  @ApiBadRequestResponse({ type: ErrorResponse, description: 'Bad Request', })
  async create(@Body() data: CreateLigacaoDto): Promise<Ligacao> {
    return await this.service.create(data);
  }

  @Get(':id')
  @HttpCode(200)
  @UseGuards(JwtAuthGuard, ACLGuard) 
  @ACLPolice({roles: [], permissions: []})
  @ApiOperation({ summary: 'Search a Ligacao by id' })
  @ApiOkResponse({ type: UpdateLigacaoDto, description: 'The found Ligacao' })
  @ApiNotFoundResponse({ type: ErrorResponse, description: 'Not Found' })
  async findById(@Param('id') id: string): Promise<Ligacao> {
    return await this.service.findById(id);
  }

  @Put(':id')
  @HttpCode(200)
  @ApiOperation({ summary: 'Update a Ligacao' })
  @ApiOkResponse({ type: UpdateLigacaoDto, description: 'Updated Ligacao' })
  @ApiNotFoundResponse({ type: ErrorResponse, description: 'Not Found' })
  async update(
    @Param('id') id: string,
    @Body() data: UpdateLigacaoDto,
  ): Promise<Ligacao> {
    return this.service.update(id, data);
  }

  @Delete(':id')
  @HttpCode(204)
  @ApiOperation({ summary: 'Delete a Ligacao' })
  @ApiNoContentResponse({ description: 'Deleted Ligacao' })
  @ApiNotFoundResponse({ type: ErrorResponse, description: 'Not Found' })
  async delete(@Param('id') id: string): Promise<void> {
    await this.service.delete(id);
  }
}
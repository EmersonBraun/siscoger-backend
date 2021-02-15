import {
  Body,
  Controller,
  Delete,
  Get,
  HttpCode,
  Param,
  Post,
  Put,
  UseGuards,
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
import ACLPolice from '../../../common/decorators/acl.decorator';
import ACLGuard from '../../../common/guards/acl.guard';
import JwtAuthGuard from '../../../common/guards/jwt.guard';
import { ErrorResponse } from '../../../common/responses/error';
import { CreateAndamentoDto } from '../dtos/create.dto';
import { UpdateAndamentoDto } from '../dtos/update.dto';
import { Andamento } from '../entity/andamento.entity';
import { AndamentoService } from '../service/andamento.service';

@ApiTags('Andamento')
@Controller('andamentos')
export class AndamentoController {
  constructor(private service: AndamentoService) {}

  @Get()
  @HttpCode(200)
  @UseGuards(JwtAuthGuard, ACLGuard)
  @ACLPolice({ roles: ['admin'], permissions: [] })
  @ApiOperation({ summary: 'Search all Andamento' })
  @ApiOkResponse({
    type: [CreateAndamentoDto],
    description: 'The found Andamento',
  })
  async findAll(): Promise<Andamento[]> {
    return await this.service.findAll();
  }

  @Post()
  @HttpCode(201)
  @UseGuards(JwtAuthGuard, ACLGuard)
  @ACLPolice({ roles: ['admin'], permissions: [] })
  @ApiOperation({ summary: 'Create a new Andamento' })
  @ApiCreatedResponse({
    type: UpdateAndamentoDto,
    description: 'Created Andamento',
  })
  @ApiBadRequestResponse({ type: ErrorResponse, description: 'Bad Request' })
  async create(@Body() data: CreateAndamentoDto): Promise<Andamento> {
    return await this.service.create(data);
  }

  @Get(':id')
  @HttpCode(200)
  @UseGuards(JwtAuthGuard, ACLGuard)
  @ACLPolice({ roles: ['admin'], permissions: [] })
  @ApiOperation({ summary: 'Search a Andamento by id' })
  @ApiOkResponse({
    type: UpdateAndamentoDto,
    description: 'The found Andamento',
  })
  @ApiNotFoundResponse({ type: ErrorResponse, description: 'Not Found' })
  async findById(@Param('id') id: string): Promise<Andamento> {
    return await this.service.findById(id);
  }

  @Put(':id')
  @HttpCode(200)
  @UseGuards(JwtAuthGuard, ACLGuard)
  @ACLPolice({ roles: ['admin'], permissions: [] })
  @ApiOperation({ summary: 'Update a Andamento' })
  @ApiOkResponse({ type: UpdateAndamentoDto, description: 'Updated Andamento' })
  @ApiNotFoundResponse({ type: ErrorResponse, description: 'Not Found' })
  async update(
    @Param('id') id: string,
    @Body() data: UpdateAndamentoDto,
  ): Promise<Andamento> {
    return this.service.update(id, data);
  }

  @Delete(':id')
  @HttpCode(204)
  @UseGuards(JwtAuthGuard, ACLGuard)
  @ACLPolice({ roles: ['admin'], permissions: [] })
  @ApiOperation({ summary: 'Delete a Andamento' })
  @ApiNoContentResponse({ description: 'Deleted Andamento' })
  @ApiNotFoundResponse({ type: ErrorResponse, description: 'Not Found' })
  async delete(@Param('id') id: string): Promise<void> {
    await this.service.delete(id);
  }
}

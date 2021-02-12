import {
  Body,
  Controller,
  Delete,
  Get,
  HttpCode,
  Param,
  Post,
  Put,
  Request,
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
import ACLPolice from '../../../common/decorators/acl.decorator';
import ACLGuard from '../../../common/guards/acl.guard';
import JwtAuthGuard from '../../../common/guards/jwt.guard';
import { ErrorResponse } from '../../../common/responses/error';
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
  @UseGuards(JwtAuthGuard, ACLGuard)
  @ACLPolice({ roles: [], permissions: [] })
  @ApiOperation({ summary: 'Search all Movimento' })
  @ApiOkResponse({
    type: [CreateMovimentoDto],
    description: 'The found Movimento',
  })
  async findAll(): Promise<void> {
    await this.service.findAll();
  }

  @Post('search')
  @HttpCode(200)
  @UseGuards(JwtAuthGuard, ACLGuard)
  @ACLPolice({ roles: [], permissions: [] })
  @ApiOperation({ summary: 'Search Movimento' })
  @ApiCreatedResponse({
    type: UpdateMovimentoDto,
    description: 'Searched Movimento',
  })
  @ApiBadRequestResponse({ type: ErrorResponse, description: 'Bad Request' })
  async search(@Body() data: CreateMovimentoDto): Promise<void> {
    await this.service.search(data);
  }

  @Post()
  @HttpCode(201)
  @UseGuards(JwtAuthGuard, ACLGuard)
  @ACLPolice({ roles: [], permissions: [] })
  @ApiOperation({ summary: 'Create a new Movimento' })
  @ApiCreatedResponse({
    type: UpdateMovimentoDto,
    description: 'Created Movimento',
  })
  @ApiBadRequestResponse({ type: ErrorResponse, description: 'Bad Request' })
  async create(
    @Body() data: CreateMovimentoDto,
    @Request() request?: any,
  ): Promise<void> {
    await this.service.create(data);
  }

  @Get(':id')
  @HttpCode(200)
  @UseGuards(JwtAuthGuard, ACLGuard)
  @ACLPolice({ roles: [], permissions: [] })
  @ApiOperation({ summary: 'Search a Movimento by id' })
  @ApiOkResponse({
    type: UpdateMovimentoDto,
    description: 'The found Movimento',
  })
  @ApiNotFoundResponse({ type: ErrorResponse, description: 'Not Found' })
  async findById(@Param('id') id: string): Promise<void> {
    await this.service.findById(id);
  }

  @Put(':id')
  @HttpCode(200)
  @UseGuards(JwtAuthGuard, ACLGuard)
  @ACLPolice({ roles: [], permissions: [] })
  @ApiOperation({ summary: 'Update a Movimento' })
  @ApiOkResponse({ type: UpdateMovimentoDto, description: 'Updated Movimento' })
  @ApiNotFoundResponse({ type: ErrorResponse, description: 'Not Found' })
  async update(
    @Param('id') id: string,
    @Body() data: UpdateMovimentoDto,
    @Request() request?: any,
  ): Promise<Movimento> {
    return this.service.update(id, data);
  }

  @Delete(':id')
  @HttpCode(204)
  @UseGuards(JwtAuthGuard, ACLGuard)
  @ACLPolice({ roles: [], permissions: [] })
  @ApiOperation({ summary: 'Delete a Movimento' })
  @ApiNoContentResponse({ description: 'Deleted Movimento' })
  @ApiNotFoundResponse({ type: ErrorResponse, description: 'Not Found' })
  async delete(
    @Param('id') id: string,
    @Request() request?: any,
  ): Promise<void> {
    await this.service.delete(id);
  }
}

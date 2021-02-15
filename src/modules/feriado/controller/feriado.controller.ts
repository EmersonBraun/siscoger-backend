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
import { CreateFeriadoDto } from '../dtos/create.dto';
import { SearchFeriadoDto } from '../dtos/search.dto';
import { UpdateFeriadoDto } from '../dtos/update.dto';
import { Feriado } from '../entity/feriado.entity';
import { FeriadoService } from '../service/feriado.service';

@ApiTags('Feriado')
@Controller('feriados')
export class FeriadoController {
  constructor(private service: FeriadoService) {}

  @Get()
  @HttpCode(200)
  @UseGuards(JwtAuthGuard, ACLGuard)
  @ACLPolice({ roles: ['admin'], permissions: [] })
  @ApiOperation({ summary: 'Search all Feriado' })
  @ApiOkResponse({ type: [CreateFeriadoDto], description: 'The found Feriado' })
  async findAll(): Promise<Feriado[]> {
    return await this.service.findAll();
  }

  @Post()
  @HttpCode(201)
  @UseGuards(JwtAuthGuard, ACLGuard)
  @ACLPolice({ roles: ['admin'], permissions: [] })
  @ApiOperation({ summary: 'Create a new Feriado' })
  @ApiCreatedResponse({
    type: UpdateFeriadoDto,
    description: 'Created Feriado',
  })
  @ApiBadRequestResponse({ type: ErrorResponse, description: 'Bad Request' })
  async create(@Body() data: CreateFeriadoDto): Promise<Feriado> {
    return await this.service.create(data);
  }

  @Post('/between-dates')
  @HttpCode(200)
  @UseGuards(JwtAuthGuard, ACLGuard)
  @ACLPolice({ roles: ['admin'], permissions: [] })
  @ApiOperation({ summary: 'Verify countable days' })
  @ApiCreatedResponse({ type: 'number', description: 'Countable Days' })
  @ApiBadRequestResponse({ type: ErrorResponse, description: 'Bad Request' })
  async betweenDates(@Body() data: SearchFeriadoDto): Promise<number> {
    const { init, end } = data;
    return await this.service.betweenDates(init, end);
  }

  @Get(':id')
  @HttpCode(200)
  @UseGuards(JwtAuthGuard, ACLGuard)
  @ACLPolice({ roles: ['admin'], permissions: [] })
  @ApiOperation({ summary: 'Search a Feriado by id' })
  @ApiOkResponse({ type: UpdateFeriadoDto, description: 'The found Feriado' })
  @ApiNotFoundResponse({ type: ErrorResponse, description: 'Not Found' })
  async findById(@Param('id') id: string): Promise<Feriado> {
    return await this.service.findById(id);
  }

  @Put(':id')
  @HttpCode(200)
  @UseGuards(JwtAuthGuard, ACLGuard)
  @ACLPolice({ roles: ['admin'], permissions: [] })
  @ApiOperation({ summary: 'Update a Feriado' })
  @ApiOkResponse({ type: UpdateFeriadoDto, description: 'Updated Feriado' })
  @ApiNotFoundResponse({ type: ErrorResponse, description: 'Not Found' })
  async update(
    @Param('id') id: string,
    @Body() data: UpdateFeriadoDto,
  ): Promise<Feriado> {
    return this.service.update(id, data);
  }

  @Delete(':id')
  @HttpCode(204)
  @UseGuards(JwtAuthGuard, ACLGuard)
  @ACLPolice({ roles: ['admin'], permissions: [] })
  @ApiOperation({ summary: 'Delete a Feriado' })
  @ApiNoContentResponse({ description: 'Deleted Feriado' })
  @ApiNotFoundResponse({ type: ErrorResponse, description: 'Not Found' })
  async delete(@Param('id') id: string): Promise<void> {
    await this.service.delete(id);
  }
}

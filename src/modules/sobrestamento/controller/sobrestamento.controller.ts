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
import { activityLog } from 'src/common/activiti-log';
import ACLPolice from '../../../common/decorators/acl.decorator';
import ACLGuard from '../../../common/guards/acl.guard';
import JwtAuthGuard from '../../../common/guards/jwt.guard';
import { ErrorResponse } from '../../../common/responses/error';
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
  @UseGuards(JwtAuthGuard, ACLGuard)
  @ACLPolice({ roles: [], permissions: [] })
  @ApiOperation({ summary: 'Search all Sobrestamento' })
  @ApiOkResponse({
    type: [CreateSobrestamentoDto],
    description: 'The found Sobrestamento',
  })
  async findAll(): Promise<Sobrestamento[]> {
    return await this.service.findAll();
  }

  @Post('search')
  @HttpCode(200)
  @UseGuards(JwtAuthGuard, ACLGuard)
  @ACLPolice({ roles: [], permissions: [] })
  @ApiOperation({ summary: 'Search Sobrestamento' })
  @ApiCreatedResponse({
    type: SearchSobrestamentoDto,
    description: 'Searched Sobrestamento',
  })
  @ApiBadRequestResponse({ type: ErrorResponse, description: 'Bad Request' })
  async search(@Body() data: SearchSobrestamentoDto): Promise<Sobrestamento[]> {
    return await this.service.search(data);
  }

  @Post('/between-dates')
  @HttpCode(200)
  @UseGuards(JwtAuthGuard, ACLGuard)
  @ACLPolice({ roles: [], permissions: [] })
  @ApiOperation({ summary: 'Verify countable days' })
  @ApiCreatedResponse({ type: 'number', description: 'Countable Days' })
  @ApiBadRequestResponse({ type: ErrorResponse, description: 'Bad Request' })
  async betweenDates(@Body() data: BetweenDatesDto): Promise<any> {
    const { init, end, procData } = data;
    return await this.service.betweenDates(init, end, procData);
  }

  @Post()
  @HttpCode(201)
  @UseGuards(JwtAuthGuard, ACLGuard)
  @ACLPolice({ roles: [], permissions: [] })
  @ApiOperation({ summary: 'Create a new Sobrestamento' })
  @ApiCreatedResponse({
    type: UpdateSobrestamentoDto,
    description: 'Created Sobrestamento',
  })
  @ApiBadRequestResponse({ type: ErrorResponse, description: 'Bad Request' })
  async create(
    @Body() data: CreateSobrestamentoDto,
    @Request() request?: any,
  ): Promise<Sobrestamento> {
    const response = await this.service.create(data);

    await activityLog({
      module: 'sobrestamento',
      action: 'create',
      data: response,
      user: request?.user,
    });

    return response;
  }

  @Get(':id')
  @HttpCode(200)
  @UseGuards(JwtAuthGuard, ACLGuard)
  @ACLPolice({ roles: [], permissions: [] })
  @ApiOperation({ summary: 'Search a Sobrestamento by id' })
  @ApiOkResponse({
    type: UpdateSobrestamentoDto,
    description: 'The found Sobrestamento',
  })
  @ApiNotFoundResponse({ type: ErrorResponse, description: 'Not Found' })
  async findById(@Param('id') id: string): Promise<Sobrestamento> {
    return await this.service.findById(id);
  }

  @Put(':id')
  @HttpCode(200)
  @UseGuards(JwtAuthGuard, ACLGuard)
  @ACLPolice({ roles: [], permissions: [] })
  @ApiOperation({ summary: 'Update a Sobrestamento' })
  @ApiOkResponse({
    type: UpdateSobrestamentoDto,
    description: 'Updated Sobrestamento',
  })
  @ApiNotFoundResponse({ type: ErrorResponse, description: 'Not Found' })
  async update(
    @Param('id') id: string,
    @Body() data: UpdateSobrestamentoDto,
    @Request() request?: any,
  ): Promise<Sobrestamento> {
    const old = await this.service.findById(id);
    const response = await this.service.update(id, data);

    await activityLog({
      module: 'sobrestamento',
      action: 'update',
      data: response,
      old,
      user: request?.user,
    });

    return response;
  }

  @Delete(':id')
  @HttpCode(204)
  @UseGuards(JwtAuthGuard, ACLGuard)
  @ACLPolice({ roles: [], permissions: [] })
  @ApiOperation({ summary: 'Delete a Sobrestamento' })
  @ApiNoContentResponse({ description: 'Deleted Sobrestamento' })
  @ApiNotFoundResponse({ type: ErrorResponse, description: 'Not Found' })
  async delete(
    @Param('id') id: string,
    @Request() request?: any,
  ): Promise<void> {
    const data = await this.service.delete(id);

    await activityLog({
      module: 'sobrestamento',
      action: 'delete',
      data,
      user: request?.user,
    });
  }
}

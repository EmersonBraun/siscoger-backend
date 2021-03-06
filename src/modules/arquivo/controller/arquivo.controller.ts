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
import { activityLog } from '../../../common/activiti-log';
import ACLPolice from '../../../common/decorators/acl.decorator';
import ACLGuard from '../../../common/guards/acl.guard';
import JwtAuthGuard from '../../../common/guards/jwt.guard';
import { ErrorResponse } from '../../../common/responses/error';
import { SearchArquivoDto } from '../dtos';
import { CreateArquivoDto } from '../dtos/create.dto';
import { UpdateArquivoDto } from '../dtos/update.dto';
import { Arquivo } from '../entity/arquivo.entity';
import { ArquivoService } from '../service/arquivo.service';

@ApiTags('Arquivo')
@Controller('arquivos')
export class ArquivoController {
  constructor(private service: ArquivoService) {}

  @Get()
  @HttpCode(200)
  @UseGuards(JwtAuthGuard, ACLGuard)
  @ACLPolice({ roles: [], permissions: [] })
  @ApiOperation({ summary: 'Search all Arquivo' })
  @ApiOkResponse({ type: [CreateArquivoDto], description: 'The found Arquivo' })
  async findAll(): Promise<Arquivo[]> {
    return await this.service.findAll();
  }

  @Post('search')
  @HttpCode(200)
  @UseGuards(JwtAuthGuard, ACLGuard)
  @ACLPolice({ roles: [], permissions: [] })
  @ApiOperation({ summary: 'Search Arquivo' })
  @ApiCreatedResponse({
    type: SearchArquivoDto,
    description: 'Searched Arquivo',
  })
  @ApiBadRequestResponse({ type: ErrorResponse, description: 'Bad Request' })
  async search(@Body() data: SearchArquivoDto): Promise<Arquivo[]> {
    return await this.service.search(data);
  }

  @Post()
  @HttpCode(201)
  @UseGuards(JwtAuthGuard, ACLGuard)
  @ACLPolice({ roles: [], permissions: [] })
  @ApiOperation({ summary: 'Create a new Arquivo' })
  @ApiCreatedResponse({
    type: UpdateArquivoDto,
    description: 'Created Arquivo',
  })
  @ApiBadRequestResponse({ type: ErrorResponse, description: 'Bad Request' })
  async create(
    @Body() data: CreateArquivoDto,
    @Request() request?: any,
  ): Promise<Arquivo> {
    const response = await this.service.create(data);

    await activityLog({
      module: 'arquivo',
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
  @ApiOperation({ summary: 'Search a Arquivo by id' })
  @ApiOkResponse({ type: UpdateArquivoDto, description: 'The found Arquivo' })
  @ApiNotFoundResponse({ type: ErrorResponse, description: 'Not Found' })
  async findById(@Param('id') id: string): Promise<Arquivo> {
    return await this.service.findById(id);
  }

  @Put(':id')
  @HttpCode(200)
  @UseGuards(JwtAuthGuard, ACLGuard)
  @ACLPolice({ roles: [], permissions: [] })
  @ApiOperation({ summary: 'Update a Arquivo' })
  @ApiOkResponse({ type: UpdateArquivoDto, description: 'Updated Arquivo' })
  @ApiNotFoundResponse({ type: ErrorResponse, description: 'Not Found' })
  async update(
    @Param('id') id: string,
    @Body() data: UpdateArquivoDto,
    @Request() request?: any,
  ): Promise<Arquivo> {
    const old = await this.service.findById(id);
    const response = await this.service.update(id, data);

    await activityLog({
      module: 'arquivo',
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
  @ApiOperation({ summary: 'Delete a Arquivo' })
  @ApiNoContentResponse({ description: 'Deleted Arquivo' })
  @ApiNotFoundResponse({ type: ErrorResponse, description: 'Not Found' })
  async delete(
    @Param('id') id: string,
    @Request() request?: any,
  ): Promise<void> {
    const data = await this.service.delete(id);

    await activityLog({
      module: 'arquivo',
      action: 'delete',
      data,
      user: request?.user,
    });
  }
}

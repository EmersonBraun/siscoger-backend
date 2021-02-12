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
import { activityLog } from '../../../common/activiti-log';
import ACLPolice from '../../../common/decorators/acl.decorator';
import ACLGuard from '../../../common/guards/acl.guard';
import JwtAuthGuard from '../../../common/guards/jwt.guard';
import { ErrorResponse } from '../../../common/responses/error';
import { CreateEnvolvidoDto } from '../dtos/create.dto';
import { UpdateEnvolvidoDto } from '../dtos/update.dto';
import { Envolvido } from '../entity/envolvido.entity';
import { EnvolvidoService } from '../service/envolvido.service';

@ApiTags('Envolvido')
@Controller('envolvidos')
export class EnvolvidoController {
  constructor(private service: EnvolvidoService) {}

  @Get()
  @HttpCode(200)
  @UseGuards(JwtAuthGuard, ACLGuard)
  @ACLPolice({ roles: ['admin'], permissions: ['ver-envolvido'] })
  @ApiOperation({ summary: 'Search all Envolvido' })
  @ApiOkResponse({
    type: [CreateEnvolvidoDto],
    description: 'The found Envolvido',
  })
  async findAll(): Promise<Envolvido[]> {
    return await this.service.findAll();
  }

  @Post('search')
  @HttpCode(200)
  @UseGuards(JwtAuthGuard, ACLGuard)
  @ACLPolice({ roles: ['admin'], permissions: ['ver-envolvido'] })
  @ApiOperation({ summary: 'Search Envolvido' })
  @ApiCreatedResponse({
    type: UpdateEnvolvidoDto,
    description: 'Searched Ligacao',
  })
  @ApiBadRequestResponse({ type: ErrorResponse, description: 'Bad Request' })
  async search(
    @Body() data: CreateEnvolvidoDto,
    @Request() request?: any,
  ): Promise<void> {
    return await this.service.search(data);
  }

  @Post()
  @HttpCode(201)
  @UseGuards(JwtAuthGuard, ACLGuard)
  @ACLPolice({ roles: ['admin'], permissions: ['criar-envolvido'] })
  @ApiOperation({ summary: 'Create a new Envolvido' })
  @ApiCreatedResponse({
    type: UpdateEnvolvidoDto,
    description: 'Created Envolvido',
  })
  @ApiBadRequestResponse({ type: ErrorResponse, description: 'Bad Request' })
  async create(@Body() data: CreateEnvolvidoDto): Promise<void> {
    const response = await this.service.create(data);

    await activityLog({
      module: 'envolvido',
      action: 'create',
      data: response,
      user: request?.user,
    });

    return response;
  }

  @Get(':id')
  @HttpCode(200)
  @UseGuards(JwtAuthGuard, ACLGuard)
  @ACLPolice({ roles: ['admin'], permissions: ['ver-envolvido'] })
  @ApiOperation({ summary: 'Search a Envolvido by id' })
  @ApiOkResponse({
    type: UpdateEnvolvidoDto,
    description: 'The found Envolvido',
  })
  @ApiNotFoundResponse({ type: ErrorResponse, description: 'Not Found' })
  async findById(@Param('id') id: string): Promise<void> {
    return await this.service.findById(id);
  }

  @Put(':id')
  @HttpCode(200)
  @UseGuards(JwtAuthGuard, ACLGuard)
  @ACLPolice({ roles: ['admin'], permissions: ['editar-envolvido'] })
  @ApiOperation({ summary: 'Update a Envolvido' })
  @ApiOkResponse({ type: UpdateEnvolvidoDto, description: 'Updated Envolvido' })
  @ApiNotFoundResponse({ type: ErrorResponse, description: 'Not Found' })
  async update(
    @Param('id') id: string,
    @Body() data: UpdateEnvolvidoDto,
    @Request() request?: any,
  ): Promise<Envolvido> {
    const old = await this.service.findById(id);
    const response = await this.service.update(id, data);

    await activityLog({
      module: 'envolvido',
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
  @ACLPolice({ roles: ['admin'], permissions: ['apagar-envolvido'] })
  @ApiOperation({ summary: 'Delete a Envolvido' })
  @ApiNoContentResponse({ description: 'Deleted Envolvido' })
  @ApiNotFoundResponse({ type: ErrorResponse, description: 'Not Found' })
  async delete(
    @Param('id') id: string,
    @Request() request?: any,
  ): Promise<void> {
    const data = await this.service.delete(id);

    await activityLog({
      module: 'envolvido',
      action: 'delete',
      data,
      user: request?.user,
    });
  }
}

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
import { CreateProcOutrosDto } from '../dtos/create.dto';
import { UpdateProcOutrosDto } from '../dtos/update.dto';
import ProcOutros from '../entity/procoutros.entity';
import { ProcOutrosService } from '../service/procoutros.service';

@ApiTags('ProcOutros')
@Controller('procoutros')
export class ProcOutrosController {
  constructor(private service: ProcOutrosService) {}

  @Get()
  @HttpCode(200)
  @UseGuards(JwtAuthGuard, ACLGuard)
  @ACLPolice({ roles: [], permissions: [] })
  @ApiOperation({ summary: 'Search all CD' })
  @ApiOkResponse({
    type: [CreateProcOutrosDto],
    description: 'The found CD',
  })
  async findAll(): Promise<ProcOutros[]> {
    return await this.service.findAll();
  }

  @Get('/andamento')
  @HttpCode(200)
  @UseGuards(JwtAuthGuard, ACLGuard)
  @ACLPolice({ roles: [], permissions: [] })
  @ApiOperation({ summary: 'Search all andamento CD' })
  @ApiOkResponse({
    type: [CreateProcOutrosDto],
    description: 'The found andamento CD',
  })
  async findAndamento(): Promise<ProcOutros[]> {
    return await this.service.findAndamento();
  }

  @Get('/resultado')
  @HttpCode(200)
  @UseGuards(JwtAuthGuard, ACLGuard)
  @ACLPolice({ roles: [], permissions: [] })
  @ApiOperation({ summary: 'Search all resultado ProcOutros' })
  @ApiOkResponse({
    type: [CreateProcOutrosDto],
    description: 'The found resultado ProcOutros',
  })
  async resultado(): Promise<ProcOutros[]> {
    return await this.service.resultado({});
  }

  @Get('/deleted')
  @HttpCode(200)
  @UseGuards(JwtAuthGuard, ACLGuard)
  @ACLPolice({ roles: [], permissions: [] })
  @ApiOperation({ summary: 'Search all deleted ProcOutros' })
  @ApiOkResponse({
    type: [CreateProcOutrosDto],
    description: 'The found deleted ProcOutros',
  })
  async listDeleted(): Promise<ProcOutros[]> {
    return await this.service.listDeleted();
  }

  // @Post('portarias')
  // @HttpCode(200)
  // @UseGuards(JwtAuthGuard, ACLGuard)
  // @ACLPolice({ roles: [], permissions: [] })
  // @ApiOperation({ summary: 'Found ProcOutros' })
  // @ApiOkResponse({
  //   type: CreateProcOutrosDto,
  //   description: 'Found ProcOutros',
  // })
  // @ApiBadRequestResponse({ type: ErrorResponse, description: 'Bad Request' })
  // async findPortaria(@Body() data: SearchPortariaDto): Promise<any> {
  //   return await this.service.findPortaria(data);
  // }

  @Post()
  @HttpCode(201)
  @UseGuards(JwtAuthGuard, ACLGuard)
  @ACLPolice({ roles: [], permissions: [] })
  @ApiOperation({ summary: 'Create a new ProcOutros' })
  @ApiCreatedResponse({
    type: UpdateProcOutrosDto,
    description: 'Created ProcOutros',
  })
  @ApiBadRequestResponse({ type: ErrorResponse, description: 'Bad Request' })
  async create(
    @Body() data: CreateProcOutrosDto,
    @Request() request?: any,
  ): Promise<ProcOutros> {
    const response = await this.service.create(data);

    await activityLog({
      module: 'procoutros',
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
  @ApiOperation({ summary: 'Search a ProcOutros by id' })
  @ApiOkResponse({
    type: UpdateProcOutrosDto,
    description: 'The found ProcOutros',
  })
  @ApiNotFoundResponse({ type: ErrorResponse, description: 'Not Found' })
  async findById(@Param('id') id: string): Promise<ProcOutros> {
    return await this.service.findById(id);
  }

  @Put(':id')
  @HttpCode(200)
  @UseGuards(JwtAuthGuard, ACLGuard)
  @ACLPolice({ roles: [], permissions: [] })
  @ApiOperation({ summary: 'Update a ProcOutros' })
  @ApiOkResponse({
    type: UpdateProcOutrosDto,
    description: 'Updated ProcOutros',
  })
  @ApiNotFoundResponse({ type: ErrorResponse, description: 'Not Found' })
  async update(
    @Param('id') id: string,
    @Body() data: UpdateProcOutrosDto,
    @Request() request?: any,
  ): Promise<ProcOutros> {
    const old = await this.service.findById(id);
    const response = await this.service.update(id, data);

    await activityLog({
      module: 'procoutros',
      action: 'update',
      data: response,
      old,
      user: request?.user,
    });

    return response;
  }

  @Put(':id/restore')
  @HttpCode(200)
  @UseGuards(JwtAuthGuard, ACLGuard)
  @ACLPolice({ roles: [], permissions: [] })
  @ApiOperation({ summary: 'Delete a ProcOutros' })
  @ApiNoContentResponse({ description: 'Deleted ProcOutros' })
  @ApiNotFoundResponse({ type: ErrorResponse, description: 'Not Found' })
  async restore(
    @Param('id') id: string,
    @Request() request?: any,
  ): Promise<ProcOutros> {
    const data = await this.service.restore(id);

    await activityLog({
      module: 'procoutros',
      action: 'restore',
      data,
      user: request?.user,
    });
    return data;
  }

  @Delete(':id')
  @HttpCode(200)
  @UseGuards(JwtAuthGuard, ACLGuard)
  @ACLPolice({ roles: [], permissions: [] })
  @ApiOperation({ summary: 'Delete a ProcOutros' })
  @ApiNoContentResponse({ description: 'Deleted ProcOutros' })
  @ApiNotFoundResponse({ type: ErrorResponse, description: 'Not Found' })
  async delete(
    @Param('id') id: string,
    @Request() request?: any,
  ): Promise<ProcOutros> {
    const data = await this.service.delete(id);

    await activityLog({
      module: 'procoutros',
      action: 'delete',
      data,
      user: request?.user,
    });
    return data;
  }

  @Delete(':id/force')
  @HttpCode(200)
  @UseGuards(JwtAuthGuard, ACLGuard)
  @ACLPolice({ roles: [], permissions: [] })
  @ApiOperation({ summary: 'Delete definitive a ProcOutros' })
  @ApiNoContentResponse({ description: 'Deleted definitive ProcOutros' })
  @ApiNotFoundResponse({ type: ErrorResponse, description: 'Not Found' })
  async forceDelete(
    @Param('id') id: string,
    @Request() request?: any,
  ): Promise<ProcOutros> {
    const data = await this.service.forceDelete(id);

    await activityLog({
      module: 'procoutros',
      action: 'forceDelete',
      data,
      user: request?.user,
    });
    return data;
  }
}

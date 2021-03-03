import {
  Body,
  Controller,
  Delete,
  Get,
  HttpCode,
  Param,
  Post,
  Put,
  Query,
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
import { CreateReintegradoDto } from '../dtos/create.dto';
import { UpdateReintegradoDto } from '../dtos/update.dto';
import Reintegrado from '../entity/reintegrado.entity';
import { ReintegradoService } from '../service/reintegrado.service';

@ApiTags('Reintegrado')
@Controller('reintegrados')
export class ReintegradoController {
  constructor(private service: ReintegradoService) {}

  @Get()
  @HttpCode(200)
  @UseGuards(JwtAuthGuard, ACLGuard)
  @ACLPolice({ roles: [], permissions: [] })
  @ApiOperation({ summary: 'Search all Reintegrado' })
  @ApiOkResponse({
    type: [CreateReintegradoDto],
    description: 'The found Reintegrado',
  })
  async findAll(): Promise<Reintegrado[]> {
    return await this.service.findAll();
  }

  @Get('/deleted')
  @HttpCode(200)
  @UseGuards(JwtAuthGuard, ACLGuard)
  @ACLPolice({ roles: [], permissions: [] })
  @ApiOperation({ summary: 'Search all deleted Reintegrado' })
  @ApiOkResponse({
    type: [CreateReintegradoDto],
    description: 'The found deleted Reintegrado',
  })
  async listDeleted(): Promise<Reintegrado[]> {
    return await this.service.listDeleted();
  }

  @Get('/andamento')
  @HttpCode(200)
  @ApiOperation({ summary: 'Search all Reintegrado' })
  // @ApiOkResponse({ type: [any], description: 'The found Reintegrado' })
  async andamento(): Promise<any[]> {
    return await this.service.findAndamento();
  }

  @Get('/resultado')
  @HttpCode(200)
  @ApiOperation({ summary: 'Search all Reintegrado' })
  // @ApiOkResponse({ type: [any], description: 'The found Reintegrado' })
  async resultado(@Query() situation: string): Promise<any[]> {
    return await this.service.resultado({ situation });
  }

  // @Post('portarias')
  // @HttpCode(200)
  // @UseGuards(JwtAuthGuard, ACLGuard)
  // @ACLPolice({ roles: [], permissions: [] })
  // @ApiOperation({ summary: 'Found Reintegrado' })
  // @ApiOkResponse({
  //   type: CreateReintegradoDto,
  //   description: 'Found Reintegrado',
  // })
  // @ApiBadRequestResponse({ type: ErrorResponse, description: 'Bad Request' })
  // async findPortaria(@Body() data: SearchPortariaDto): Promise<any> {
  //   return await this.service.findPortaria(data);
  // }

  @Post()
  @HttpCode(201)
  @UseGuards(JwtAuthGuard, ACLGuard)
  @ACLPolice({ roles: [], permissions: [] })
  @ApiOperation({ summary: 'Create a new Reintegrado' })
  @ApiCreatedResponse({
    type: UpdateReintegradoDto,
    description: 'Created Reintegrado',
  })
  @ApiBadRequestResponse({ type: ErrorResponse, description: 'Bad Request' })
  async create(
    @Body() data: CreateReintegradoDto,
    @Request() request?: any,
  ): Promise<Reintegrado> {
    const response = await this.service.create(data);

    await activityLog({
      module: 'reintegrado',
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
  @ApiOperation({ summary: 'Search a Reintegrado by id' })
  @ApiOkResponse({
    type: UpdateReintegradoDto,
    description: 'The found Reintegrado',
  })
  @ApiNotFoundResponse({ type: ErrorResponse, description: 'Not Found' })
  async findById(@Param('id') id: string): Promise<Reintegrado> {
    return await this.service.findById(id);
  }

  @Put(':id')
  @HttpCode(200)
  @UseGuards(JwtAuthGuard, ACLGuard)
  @ACLPolice({ roles: [], permissions: [] })
  @ApiOperation({ summary: 'Update a Reintegrado' })
  @ApiOkResponse({
    type: UpdateReintegradoDto,
    description: 'Updated Reintegrado',
  })
  @ApiNotFoundResponse({ type: ErrorResponse, description: 'Not Found' })
  async update(
    @Param('id') id: string,
    @Body() data: UpdateReintegradoDto,
    @Request() request?: any,
  ): Promise<Reintegrado> {
    const old = await this.service.findById(id);
    const response = await this.service.update(id, data);

    await activityLog({
      module: 'reintegrado',
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
  @ApiOperation({ summary: 'Delete a Reintegrado' })
  @ApiNoContentResponse({ description: 'Deleted Reintegrado' })
  @ApiNotFoundResponse({ type: ErrorResponse, description: 'Not Found' })
  async restore(
    @Param('id') id: string,
    @Request() request?: any,
  ): Promise<Reintegrado> {
    const data = await this.service.restore(id);

    await activityLog({
      module: 'reintegrado',
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
  @ApiOperation({ summary: 'Delete a Reintegrado' })
  @ApiNoContentResponse({ description: 'Deleted Reintegrado' })
  @ApiNotFoundResponse({ type: ErrorResponse, description: 'Not Found' })
  async delete(
    @Param('id') id: string,
    @Request() request?: any,
  ): Promise<Reintegrado> {
    const data = await this.service.delete(id);

    await activityLog({
      module: 'reintegrado',
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
  @ApiOperation({ summary: 'Delete definitive a Reintegrado' })
  @ApiNoContentResponse({ description: 'Deleted definitive Reintegrado' })
  @ApiNotFoundResponse({ type: ErrorResponse, description: 'Not Found' })
  async forceDelete(
    @Param('id') id: string,
    @Request() request?: any,
  ): Promise<Reintegrado> {
    const data = await this.service.forceDelete(id);

    await activityLog({
      module: 'reintegrado',
      action: 'forceDelete',
      data,
      user: request?.user,
    });
    return data;
  }
}

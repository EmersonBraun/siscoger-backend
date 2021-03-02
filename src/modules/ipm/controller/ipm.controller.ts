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
import { CreateIpmDto } from '../dtos/create.dto';
import { SearchPortariaDto } from '../dtos/search-portaria.dto';
import { UpdateIpmDto } from '../dtos/update.dto';
import Ipm from '../entity/ipm.entity';
import { IpmService } from '../service/ipm.service';

@ApiTags('Ipm')
@Controller('ipms')
export class IpmController {
  constructor(private service: IpmService) {}

  @Get()
  @HttpCode(200)
  @UseGuards(JwtAuthGuard, ACLGuard)
  @ACLPolice({ roles: [], permissions: [] })
  @ApiOperation({ summary: 'Search all Ipm' })
  @ApiOkResponse({
    type: [CreateIpmDto],
    description: 'The found Ipm',
  })
  async findAll(): Promise<Ipm[]> {
    return await this.service.findAll();
  }

  @Get('/deleted')
  @HttpCode(200)
  @UseGuards(JwtAuthGuard, ACLGuard)
  @ACLPolice({ roles: [], permissions: [] })
  @ApiOperation({ summary: 'Search all deleted Ipm' })
  @ApiOkResponse({
    type: [CreateIpmDto],
    description: 'The found deleted Ipm',
  })
  async listDeleted(): Promise<Ipm[]> {
    return await this.service.listDeleted();
  }

  @Get('/andamento')
  @HttpCode(200)
  @ApiOperation({ summary: 'Search all Ipm' })
  // @ApiOkResponse({ type: [any], description: 'The found Ipm' })
  async andamento(): Promise<any[]> {
    return await this.service.findAndamento();
  }

  @Get('/resultado')
  @HttpCode(200)
  @ApiOperation({ summary: 'Search all Ipm' })
  // @ApiOkResponse({ type: [any], description: 'The found Ipm' })
  async resultado(@Query() situation: string): Promise<any[]> {
    return await this.service.resultado({ situation });
  }

  @Post('portarias')
  @HttpCode(200)
  @UseGuards(JwtAuthGuard, ACLGuard)
  @ACLPolice({ roles: [], permissions: [] })
  @ApiOperation({ summary: 'Found Ipm' })
  @ApiOkResponse({
    type: CreateIpmDto,
    description: 'Found Ipm',
  })
  @ApiBadRequestResponse({ type: ErrorResponse, description: 'Bad Request' })
  async findPortaria(@Body() data: SearchPortariaDto): Promise<any> {
    return await this.service.findPortaria(data);
  }

  @Post()
  @HttpCode(201)
  @UseGuards(JwtAuthGuard, ACLGuard)
  @ACLPolice({ roles: [], permissions: [] })
  @ApiOperation({ summary: 'Create a new Ipm' })
  @ApiCreatedResponse({
    type: UpdateIpmDto,
    description: 'Created Ipm',
  })
  @ApiBadRequestResponse({ type: ErrorResponse, description: 'Bad Request' })
  async create(
    @Body() data: CreateIpmDto,
    @Request() request?: any,
  ): Promise<Ipm> {
    const response = await this.service.create(data);

    await activityLog({
      module: 'ipm',
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
  @ApiOperation({ summary: 'Search a Ipm by id' })
  @ApiOkResponse({
    type: UpdateIpmDto,
    description: 'The found Ipm',
  })
  @ApiNotFoundResponse({ type: ErrorResponse, description: 'Not Found' })
  async findById(@Param('id') id: string): Promise<Ipm> {
    return await this.service.findById(id);
  }

  @Put(':id')
  @HttpCode(200)
  @UseGuards(JwtAuthGuard, ACLGuard)
  @ACLPolice({ roles: [], permissions: [] })
  @ApiOperation({ summary: 'Update a Ipm' })
  @ApiOkResponse({
    type: UpdateIpmDto,
    description: 'Updated Ipm',
  })
  @ApiNotFoundResponse({ type: ErrorResponse, description: 'Not Found' })
  async update(
    @Param('id') id: string,
    @Body() data: UpdateIpmDto,
    @Request() request?: any,
  ): Promise<Ipm> {
    const old = await this.service.findById(id);
    const response = await this.service.update(id, data);

    await activityLog({
      module: 'ipm',
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
  @ApiOperation({ summary: 'Delete a Ipm' })
  @ApiNoContentResponse({ description: 'Deleted Ipm' })
  @ApiNotFoundResponse({ type: ErrorResponse, description: 'Not Found' })
  async restore(
    @Param('id') id: string,
    @Request() request?: any,
  ): Promise<Ipm> {
    const data = await this.service.restore(id);

    await activityLog({
      module: 'ipm',
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
  @ApiOperation({ summary: 'Delete a Ipm' })
  @ApiNoContentResponse({ description: 'Deleted Ipm' })
  @ApiNotFoundResponse({ type: ErrorResponse, description: 'Not Found' })
  async delete(
    @Param('id') id: string,
    @Request() request?: any,
  ): Promise<Ipm> {
    const data = await this.service.delete(id);

    await activityLog({
      module: 'ipm',
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
  @ApiOperation({ summary: 'Delete definitive a Ipm' })
  @ApiNoContentResponse({ description: 'Deleted definitive Ipm' })
  @ApiNotFoundResponse({ type: ErrorResponse, description: 'Not Found' })
  async forceDelete(
    @Param('id') id: string,
    @Request() request?: any,
  ): Promise<Ipm> {
    const data = await this.service.forceDelete(id);

    await activityLog({
      module: 'ipm',
      action: 'forceDelete',
      data,
      user: request?.user,
    });
    return data;
  }
}

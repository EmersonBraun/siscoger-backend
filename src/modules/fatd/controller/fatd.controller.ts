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
import { ErrorResponse } from '../../../common/responses';
import { CreateFatdDto } from '../dtos/create.dto';
import { UpdateFatdDto } from '../dtos/update.dto';
import Fatd from '../entity/fatd.entity';
import { FatdService } from '../service/fatd.service';

@ApiTags('Fatd')
@Controller('Fatds')
export class FatdController {
  constructor(private service: FatdService) {}

  @Get()
  @HttpCode(200)
  @ApiOperation({ summary: 'Search all Fatd' })
  @ApiOkResponse({ type: [CreateFatdDto], description: 'The found Fatd' })
  async findAll(): Promise<Fatd[]> {
    return await this.service.findAll();
  }

  // @Post('search')
  // @HttpCode(200)
  // @ApiOperation({ summary: 'Search Fatd' })
  // @ApiCreatedResponse({ type: UpdateFatdDto, description: 'Searched Fatd' })
  // @ApiBadRequestResponse({ type: ErrorResponse, description: 'Bad Request' })
  // async search(@Body() data: CreateFatdDto): Promise<Fatd[]> {
  //   return await this.service.search(data);
  // }

  @Get('/andamento')
  @HttpCode(200)
  @ApiOperation({ summary: 'Search all Sindicancia' })
  // @ApiOkResponse({ type: [any], description: 'The found Sindicancia' })
  async andamento(): Promise<any[]> {
    return await this.service.findAndamento();
  }

  @Get('/resultado')
  @HttpCode(200)
  @ApiOperation({ summary: 'Search all Sindicancia' })
  // @ApiOkResponse({ type: [any], description: 'The found Sindicancia' })
  async resultado(@Query() situation: string): Promise<any[]> {
    return await this.service.resultado({ situation });
  }

  @Post()
  @HttpCode(201)
  @ApiOperation({ summary: 'Create a new Fatd' })
  @ApiCreatedResponse({ type: UpdateFatdDto, description: 'Created Fatd' })
  @ApiBadRequestResponse({ type: ErrorResponse, description: 'Bad Request' })
  async create(@Body() data: CreateFatdDto): Promise<Fatd> {
    return await this.service.create(data);
  }

  @Get(':id')
  @HttpCode(200)
  @ApiOperation({ summary: 'Search a Fatd by id' })
  @ApiOkResponse({ type: UpdateFatdDto, description: 'The found Fatd' })
  @ApiNotFoundResponse({ type: ErrorResponse, description: 'Not Found' })
  async findById(@Param('id') id: string): Promise<Fatd> {
    return await this.service.findById(id);
  }

  @Put(':id')
  @HttpCode(200)
  @ApiOperation({ summary: 'Update a Fatd' })
  @ApiOkResponse({ type: UpdateFatdDto, description: 'Updated Fatd' })
  @ApiNotFoundResponse({ type: ErrorResponse, description: 'Not Found' })
  async update(
    @Param('id') id: string,
    @Body() data: UpdateFatdDto,
  ): Promise<Fatd> {
    return this.service.update(id, data);
  }

  @Put(':id/restore')
  @HttpCode(200)
  @UseGuards(JwtAuthGuard, ACLGuard)
  @ACLPolice({ roles: [], permissions: [] })
  @ApiOperation({ summary: 'Delete a Fatd' })
  @ApiNoContentResponse({ description: 'Deleted Fatd' })
  @ApiNotFoundResponse({ type: ErrorResponse, description: 'Not Found' })
  async restore(
    @Param('id') id: string,
    @Request() request?: any,
  ): Promise<Fatd> {
    const data = await this.service.restore(id);

    await activityLog({
      module: 'Fatd',
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
  @ApiOperation({ summary: 'Delete a Fatd' })
  @ApiNoContentResponse({ description: 'Deleted Fatd' })
  @ApiNotFoundResponse({ type: ErrorResponse, description: 'Not Found' })
  async delete(
    @Param('id') id: string,
    @Request() request?: any,
  ): Promise<Fatd> {
    const data = await this.service.delete(id);

    await activityLog({
      module: 'Fatd',
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
  @ApiOperation({ summary: 'Delete definitive a Fatd' })
  @ApiNoContentResponse({ description: 'Deleted definitive Fatd' })
  @ApiNotFoundResponse({ type: ErrorResponse, description: 'Not Found' })
  async forceDelete(
    @Param('id') id: string,
    @Request() request?: any,
  ): Promise<Fatd> {
    const data = await this.service.forceDelete(id);

    await activityLog({
      module: 'Fatd',
      action: 'forceDelete',
      data,
      user: request?.user,
    });
    return data;
  }
}

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
import { CreateFatdDto } from '../dtos/create.dto';
import { UpdateFatdDto } from '../dtos/update.dto';
import Fatd from '../entity/fatd.entity';
import { FatdService } from '../service/fatd.service';

@ApiTags('Fatd')
@Controller('fatd')
export class FatdController {
  constructor(private service: FatdService) {}

  @Get()
  @HttpCode(200)
  @UseGuards(JwtAuthGuard, ACLGuard)
  @ACLPolice({ roles: [], permissions: [] })
  @ApiOperation({ summary: 'Search all CD' })
  @ApiOkResponse({
    type: [CreateFatdDto],
    description: 'The found CD',
  })
  async findAll(): Promise<Fatd[]> {
    return await this.service.findAll();
  }

  @Get('/andamento')
  @HttpCode(200)
  @UseGuards(JwtAuthGuard, ACLGuard)
  @ACLPolice({ roles: [], permissions: [] })
  @ApiOperation({ summary: 'Search all andamento CD' })
  @ApiOkResponse({
    type: [CreateFatdDto],
    description: 'The found andamento CD',
  })
  async findAndamento(): Promise<Fatd[]> {
    return await this.service.findAndamento();
  }

  @Get('/resultado')
  @HttpCode(200)
  @UseGuards(JwtAuthGuard, ACLGuard)
  @ACLPolice({ roles: [], permissions: [] })
  @ApiOperation({ summary: 'Search all resultado Fatd' })
  @ApiOkResponse({
    type: [CreateFatdDto],
    description: 'The found resultado Fatd',
  })
  async resultado(): Promise<Fatd[]> {
    return await this.service.resultado({});
  }

  @Get('/deleted')
  @HttpCode(200)
  @UseGuards(JwtAuthGuard, ACLGuard)
  @ACLPolice({ roles: [], permissions: [] })
  @ApiOperation({ summary: 'Search all deleted Fatd' })
  @ApiOkResponse({
    type: [CreateFatdDto],
    description: 'The found deleted Fatd',
  })
  async listDeleted(): Promise<Fatd[]> {
    return await this.service.listDeleted();
  }

  // @Post('portarias')
  // @HttpCode(200)
  // @UseGuards(JwtAuthGuard, ACLGuard)
  // @ACLPolice({ roles: [], permissions: [] })
  // @ApiOperation({ summary: 'Found Fatd' })
  // @ApiOkResponse({
  //   type: CreateFatdDto,
  //   description: 'Found Fatd',
  // })
  // @ApiBadRequestResponse({ type: ErrorResponse, description: 'Bad Request' })
  // async findPortaria(@Body() data: SearchPortariaDto): Promise<any> {
  //   return await this.service.findPortaria(data);
  // }

  @Post()
  @HttpCode(201)
  @UseGuards(JwtAuthGuard, ACLGuard)
  @ACLPolice({ roles: [], permissions: [] })
  @ApiOperation({ summary: 'Create a new Fatd' })
  @ApiCreatedResponse({
    type: UpdateFatdDto,
    description: 'Created Fatd',
  })
  @ApiBadRequestResponse({ type: ErrorResponse, description: 'Bad Request' })
  async create(
    @Body() data: CreateFatdDto,
    @Request() request?: any,
  ): Promise<Fatd> {
    const response = await this.service.create(data);

    await activityLog({
      module: 'fatd',
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
  @ApiOperation({ summary: 'Search a Fatd by id' })
  @ApiOkResponse({
    type: UpdateFatdDto,
    description: 'The found Fatd',
  })
  @ApiNotFoundResponse({ type: ErrorResponse, description: 'Not Found' })
  async findById(@Param('id') id: string): Promise<Fatd> {
    return await this.service.findById(id);
  }

  @Put(':id')
  @HttpCode(200)
  @UseGuards(JwtAuthGuard, ACLGuard)
  @ACLPolice({ roles: [], permissions: [] })
  @ApiOperation({ summary: 'Update a Fatd' })
  @ApiOkResponse({
    type: UpdateFatdDto,
    description: 'Updated Fatd',
  })
  @ApiNotFoundResponse({ type: ErrorResponse, description: 'Not Found' })
  async update(
    @Param('id') id: string,
    @Body() data: UpdateFatdDto,
    @Request() request?: any,
  ): Promise<Fatd> {
    const old = await this.service.findById(id);
    const response = await this.service.update(id, data);

    await activityLog({
      module: 'fatd',
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
  @ApiOperation({ summary: 'Delete a Fatd' })
  @ApiNoContentResponse({ description: 'Deleted Fatd' })
  @ApiNotFoundResponse({ type: ErrorResponse, description: 'Not Found' })
  async restore(
    @Param('id') id: string,
    @Request() request?: any,
  ): Promise<Fatd> {
    const data = await this.service.restore(id);

    await activityLog({
      module: 'fatd',
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
      module: 'fatd',
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
      module: 'fatd',
      action: 'forceDelete',
      data,
      user: request?.user,
    });
    return data;
  }
}

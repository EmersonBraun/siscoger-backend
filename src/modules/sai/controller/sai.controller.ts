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
import { CreateSaiDto } from '../dtos/create.dto';
import { UpdateSaiDto } from '../dtos/update.dto';
import Sai from '../entity/sai.entity';
import { SaiService } from '../service/sai.service';

@ApiTags('Sai')
@Controller('sais')
export class SaiController {
  constructor(private service: SaiService) {}

  @Get()
  @HttpCode(200)
  @UseGuards(JwtAuthGuard, ACLGuard)
  @ACLPolice({ roles: [], permissions: [] })
  @ApiOperation({ summary: 'Search all Sai' })
  @ApiOkResponse({
    type: [CreateSaiDto],
    description: 'The found Sai',
  })
  async findAll(): Promise<Sai[]> {
    return await this.service.findAll();
  }

  @Get('/deleted')
  @HttpCode(200)
  @UseGuards(JwtAuthGuard, ACLGuard)
  @ACLPolice({ roles: [], permissions: [] })
  @ApiOperation({ summary: 'Search all deleted Sai' })
  @ApiOkResponse({
    type: [CreateSaiDto],
    description: 'The found deleted Sai',
  })
  async listDeleted(): Promise<Sai[]> {
    return await this.service.listDeleted();
  }

  @Get('/andamento')
  @HttpCode(200)
  @ApiOperation({ summary: 'Search all Sai' })
  // @ApiOkResponse({ type: [any], description: 'The found Sai' })
  async andamento(): Promise<any[]> {
    return await this.service.findAndamento();
  }

  @Get('/resultado')
  @HttpCode(200)
  @ApiOperation({ summary: 'Search all Sai' })
  // @ApiOkResponse({ type: [any], description: 'The found Sai' })
  async resultado(@Query() situation: string): Promise<any[]> {
    return await this.service.resultado({ situation });
  }

  // @Post('portarias')
  // @HttpCode(200)
  // @UseGuards(JwtAuthGuard, ACLGuard)
  // @ACLPolice({ roles: [], permissions: [] })
  // @ApiOperation({ summary: 'Found Sai' })
  // @ApiOkResponse({
  //   type: CreateSaiDto,
  //   description: 'Found Sai',
  // })
  // @ApiBadRequestResponse({ type: ErrorResponse, description: 'Bad Request' })
  // async findPortaria(@Body() data: SearchPortariaDto): Promise<any> {
  //   return await this.service.findPortaria(data);
  // }

  @Post()
  @HttpCode(201)
  @UseGuards(JwtAuthGuard, ACLGuard)
  @ACLPolice({ roles: [], permissions: [] })
  @ApiOperation({ summary: 'Create a new Sai' })
  @ApiCreatedResponse({
    type: UpdateSaiDto,
    description: 'Created Sai',
  })
  @ApiBadRequestResponse({ type: ErrorResponse, description: 'Bad Request' })
  async create(
    @Body() data: CreateSaiDto,
    @Request() request?: any,
  ): Promise<Sai> {
    const response = await this.service.create(data);

    await activityLog({
      module: 'sai',
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
  @ApiOperation({ summary: 'Search a Sai by id' })
  @ApiOkResponse({
    type: UpdateSaiDto,
    description: 'The found Sai',
  })
  @ApiNotFoundResponse({ type: ErrorResponse, description: 'Not Found' })
  async findById(@Param('id') id: string): Promise<Sai> {
    return await this.service.findById(id);
  }

  @Put(':id')
  @HttpCode(200)
  @UseGuards(JwtAuthGuard, ACLGuard)
  @ACLPolice({ roles: [], permissions: [] })
  @ApiOperation({ summary: 'Update a Sai' })
  @ApiOkResponse({
    type: UpdateSaiDto,
    description: 'Updated Sai',
  })
  @ApiNotFoundResponse({ type: ErrorResponse, description: 'Not Found' })
  async update(
    @Param('id') id: string,
    @Body() data: UpdateSaiDto,
    @Request() request?: any,
  ): Promise<Sai> {
    const old = await this.service.findById(id);
    const response = await this.service.update(id, data);

    await activityLog({
      module: 'sai',
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
  @ApiOperation({ summary: 'Delete a Sai' })
  @ApiNoContentResponse({ description: 'Deleted Sai' })
  @ApiNotFoundResponse({ type: ErrorResponse, description: 'Not Found' })
  async restore(
    @Param('id') id: string,
    @Request() request?: any,
  ): Promise<Sai> {
    const data = await this.service.restore(id);

    await activityLog({
      module: 'sai',
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
  @ApiOperation({ summary: 'Delete a Sai' })
  @ApiNoContentResponse({ description: 'Deleted Sai' })
  @ApiNotFoundResponse({ type: ErrorResponse, description: 'Not Found' })
  async delete(
    @Param('id') id: string,
    @Request() request?: any,
  ): Promise<Sai> {
    const data = await this.service.delete(id);

    await activityLog({
      module: 'sai',
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
  @ApiOperation({ summary: 'Delete definitive a Sai' })
  @ApiNoContentResponse({ description: 'Deleted definitive Sai' })
  @ApiNotFoundResponse({ type: ErrorResponse, description: 'Not Found' })
  async forceDelete(
    @Param('id') id: string,
    @Request() request?: any,
  ): Promise<Sai> {
    const data = await this.service.forceDelete(id);

    await activityLog({
      module: 'sai',
      action: 'forceDelete',
      data,
      user: request?.user,
    });
    return data;
  }
}

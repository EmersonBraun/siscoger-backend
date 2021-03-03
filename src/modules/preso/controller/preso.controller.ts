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
import { CreatePresoDto } from '../dtos/create.dto';
import { UpdatePresoDto } from '../dtos/update.dto';
import Preso from '../entity/preso.entity';
import { PresoService } from '../service/preso.service';

@ApiTags('Preso')
@Controller('presos')
export class PresoController {
  constructor(private service: PresoService) {}

  @Get()
  @HttpCode(200)
  @UseGuards(JwtAuthGuard, ACLGuard)
  @ACLPolice({ roles: [], permissions: [] })
  @ApiOperation({ summary: 'Search all Preso' })
  @ApiOkResponse({
    type: [CreatePresoDto],
    description: 'The found Preso',
  })
  async findAll(): Promise<Preso[]> {
    return await this.service.findAll();
  }

  @Get('/deleted')
  @HttpCode(200)
  @UseGuards(JwtAuthGuard, ACLGuard)
  @ACLPolice({ roles: [], permissions: [] })
  @ApiOperation({ summary: 'Search all deleted Preso' })
  @ApiOkResponse({
    type: [CreatePresoDto],
    description: 'The found deleted Preso',
  })
  async listDeleted(): Promise<Preso[]> {
    return await this.service.listDeleted();
  }

  @Get('/andamento')
  @HttpCode(200)
  @ApiOperation({ summary: 'Search all Preso' })
  // @ApiOkResponse({ type: [any], description: 'The found Preso' })
  async andamento(): Promise<any[]> {
    return await this.service.findAndamento();
  }

  @Get('/resultado')
  @HttpCode(200)
  @ApiOperation({ summary: 'Search all Preso' })
  // @ApiOkResponse({ type: [any], description: 'The found Preso' })
  async resultado(@Query() situation: string): Promise<any[]> {
    return await this.service.resultado({ situation });
  }

  // @Post('portarias')
  // @HttpCode(200)
  // @UseGuards(JwtAuthGuard, ACLGuard)
  // @ACLPolice({ roles: [], permissions: [] })
  // @ApiOperation({ summary: 'Found Preso' })
  // @ApiOkResponse({
  //   type: CreatePresoDto,
  //   description: 'Found Preso',
  // })
  // @ApiBadRequestResponse({ type: ErrorResponse, description: 'Bad Request' })
  // async findPortaria(@Body() data: SearchPortariaDto): Promise<any> {
  //   return await this.service.findPortaria(data);
  // }

  @Post()
  @HttpCode(201)
  @UseGuards(JwtAuthGuard, ACLGuard)
  @ACLPolice({ roles: [], permissions: [] })
  @ApiOperation({ summary: 'Create a new Preso' })
  @ApiCreatedResponse({
    type: UpdatePresoDto,
    description: 'Created Preso',
  })
  @ApiBadRequestResponse({ type: ErrorResponse, description: 'Bad Request' })
  async create(
    @Body() data: CreatePresoDto,
    @Request() request?: any,
  ): Promise<Preso> {
    const response = await this.service.create(data);

    await activityLog({
      module: 'preso',
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
  @ApiOperation({ summary: 'Search a Preso by id' })
  @ApiOkResponse({
    type: UpdatePresoDto,
    description: 'The found Preso',
  })
  @ApiNotFoundResponse({ type: ErrorResponse, description: 'Not Found' })
  async findById(@Param('id') id: string): Promise<Preso> {
    return await this.service.findById(id);
  }

  @Put(':id')
  @HttpCode(200)
  @UseGuards(JwtAuthGuard, ACLGuard)
  @ACLPolice({ roles: [], permissions: [] })
  @ApiOperation({ summary: 'Update a Preso' })
  @ApiOkResponse({
    type: UpdatePresoDto,
    description: 'Updated Preso',
  })
  @ApiNotFoundResponse({ type: ErrorResponse, description: 'Not Found' })
  async update(
    @Param('id') id: string,
    @Body() data: UpdatePresoDto,
    @Request() request?: any,
  ): Promise<Preso> {
    const old = await this.service.findById(id);
    const response = await this.service.update(id, data);

    await activityLog({
      module: 'preso',
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
  @ApiOperation({ summary: 'Delete a Preso' })
  @ApiNoContentResponse({ description: 'Deleted Preso' })
  @ApiNotFoundResponse({ type: ErrorResponse, description: 'Not Found' })
  async restore(
    @Param('id') id: string,
    @Request() request?: any,
  ): Promise<Preso> {
    const data = await this.service.restore(id);

    await activityLog({
      module: 'preso',
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
  @ApiOperation({ summary: 'Delete a Preso' })
  @ApiNoContentResponse({ description: 'Deleted Preso' })
  @ApiNotFoundResponse({ type: ErrorResponse, description: 'Not Found' })
  async delete(
    @Param('id') id: string,
    @Request() request?: any,
  ): Promise<Preso> {
    const data = await this.service.delete(id);

    await activityLog({
      module: 'preso',
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
  @ApiOperation({ summary: 'Delete definitive a Preso' })
  @ApiNoContentResponse({ description: 'Deleted definitive Preso' })
  @ApiNotFoundResponse({ type: ErrorResponse, description: 'Not Found' })
  async forceDelete(
    @Param('id') id: string,
    @Request() request?: any,
  ): Promise<Preso> {
    const data = await this.service.forceDelete(id);

    await activityLog({
      module: 'preso',
      action: 'forceDelete',
      data,
      user: request?.user,
    });
    return data;
  }
}

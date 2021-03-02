import {
  Body,
  Controller,
  Delete,
  Get,
  HttpCode,
  Param,
  Post,
  Put,
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
import { ErrorResponse } from '../../../common/responses';
import { CreateprocoutrosDto } from '../dtos/create.dto';
import { UpdateprocoutrosDto } from '../dtos/update.dto';
import { procoutros } from '../entity/procoutros.entity';
import { procoutrosService } from '../service/procoutros.service';

@ApiTags('procoutros')
@Controller('procoutross')
export class procoutrosController {
  constructor(private service: procoutrosService) {}

  @Get()
  @HttpCode(200)
  @ApiOperation({ summary: 'Search all procoutros' })
  @ApiOkResponse({
    type: [CreateprocoutrosDto],
    description: 'The found procoutros',
  })
  async findAll(): Promise<procoutros[]> {
    return await this.service.findAll();
  }

  @Post('search')
  @HttpCode(200)
  @ApiOperation({ summary: 'Search procoutros' })
  @ApiCreatedResponse({
    type: UpdateprocoutrosDto,
    description: 'Searched procoutros',
  })
  @ApiBadRequestResponse({ type: ErrorResponse, description: 'Bad Request' })
  async search(@Body() data: CreateprocoutrosDto): Promise<procoutros[]> {
    return await this.service.search(data);
  }

  @Post()
  @HttpCode(201)
  @ApiOperation({ summary: 'Create a new procoutros' })
  @ApiCreatedResponse({
    type: UpdateprocoutrosDto,
    description: 'Created procoutros',
  })
  @ApiBadRequestResponse({ type: ErrorResponse, description: 'Bad Request' })
  async create(@Body() data: CreateprocoutrosDto): Promise<procoutros> {
    return await this.service.create(data);
  }

  @Get(':id')
  @HttpCode(200)
  @ApiOperation({ summary: 'Search a procoutros by id' })
  @ApiOkResponse({
    type: UpdateprocoutrosDto,
    description: 'The found procoutros',
  })
  @ApiNotFoundResponse({ type: ErrorResponse, description: 'Not Found' })
  async findById(@Param('id') id: string): Promise<procoutros> {
    return await this.service.findById(id);
  }

  @Put(':id')
  @HttpCode(200)
  @ApiOperation({ summary: 'Update a procoutros' })
  @ApiOkResponse({
    type: UpdateprocoutrosDto,
    description: 'Updated procoutros',
  })
  @ApiNotFoundResponse({ type: ErrorResponse, description: 'Not Found' })
  async update(
    @Param('id') id: string,
    @Body() data: UpdateprocoutrosDto,
  ): Promise<procoutros> {
    return this.service.update(id, data);
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

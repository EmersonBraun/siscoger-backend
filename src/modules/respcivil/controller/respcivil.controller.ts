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
import { CreaterespcivilDto } from '../dtos/create.dto';
import { UpdaterespcivilDto } from '../dtos/update.dto';
import { respcivil } from '../entity/respcivil.entity';
import { respcivilService } from '../service/respcivil.service';

@ApiTags('respcivil')
@Controller('respcivils')
export class respcivilController {
  constructor(private service: respcivilService) {}

  @Get()
  @HttpCode(200)
  @ApiOperation({ summary: 'Search all respcivil' })
  @ApiOkResponse({
    type: [CreaterespcivilDto],
    description: 'The found respcivil',
  })
  async findAll(): Promise<respcivil[]> {
    return await this.service.findAll();
  }

  @Post('search')
  @HttpCode(200)
  @ApiOperation({ summary: 'Search respcivil' })
  @ApiCreatedResponse({
    type: UpdaterespcivilDto,
    description: 'Searched respcivil',
  })
  @ApiBadRequestResponse({ type: ErrorResponse, description: 'Bad Request' })
  async search(@Body() data: CreaterespcivilDto): Promise<respcivil[]> {
    return await this.service.search(data);
  }

  @Post()
  @HttpCode(201)
  @ApiOperation({ summary: 'Create a new respcivil' })
  @ApiCreatedResponse({
    type: UpdaterespcivilDto,
    description: 'Created respcivil',
  })
  @ApiBadRequestResponse({ type: ErrorResponse, description: 'Bad Request' })
  async create(@Body() data: CreaterespcivilDto): Promise<respcivil> {
    return await this.service.create(data);
  }

  @Get(':id')
  @HttpCode(200)
  @ApiOperation({ summary: 'Search a respcivil by id' })
  @ApiOkResponse({
    type: UpdaterespcivilDto,
    description: 'The found respcivil',
  })
  @ApiNotFoundResponse({ type: ErrorResponse, description: 'Not Found' })
  async findById(@Param('id') id: string): Promise<respcivil> {
    return await this.service.findById(id);
  }

  @Put(':id')
  @HttpCode(200)
  @ApiOperation({ summary: 'Update a respcivil' })
  @ApiOkResponse({ type: UpdaterespcivilDto, description: 'Updated respcivil' })
  @ApiNotFoundResponse({ type: ErrorResponse, description: 'Not Found' })
  async update(
    @Param('id') id: string,
    @Body() data: UpdaterespcivilDto,
  ): Promise<respcivil> {
    return this.service.update(id, data);
  }

  @Put(':id/restore')
  @HttpCode(200)
  @UseGuards(JwtAuthGuard, ACLGuard)
  @ACLPolice({ roles: [], permissions: [] })
  @ApiOperation({ summary: 'Delete a RespCivil' })
  @ApiNoContentResponse({ description: 'Deleted RespCivil' })
  @ApiNotFoundResponse({ type: ErrorResponse, description: 'Not Found' })
  async restore(
    @Param('id') id: string,
    @Request() request?: any,
  ): Promise<RespCivil> {
    const data = await this.service.restore(id);

    await activityLog({
      module: 'respcivil',
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
  @ApiOperation({ summary: 'Delete a RespCivil' })
  @ApiNoContentResponse({ description: 'Deleted RespCivil' })
  @ApiNotFoundResponse({ type: ErrorResponse, description: 'Not Found' })
  async delete(
    @Param('id') id: string,
    @Request() request?: any,
  ): Promise<RespCivil> {
    const data = await this.service.delete(id);

    await activityLog({
      module: 'respcivil',
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
  @ApiOperation({ summary: 'Delete definitive a RespCivil' })
  @ApiNoContentResponse({ description: 'Deleted definitive RespCivil' })
  @ApiNotFoundResponse({ type: ErrorResponse, description: 'Not Found' })
  async forceDelete(
    @Param('id') id: string,
    @Request() request?: any,
  ): Promise<RespCivil> {
    const data = await this.service.forceDelete(id);

    await activityLog({
      module: 'respcivil',
      action: 'forceDelete',
      data,
      user: request?.user,
    });
    return data;
  }
}

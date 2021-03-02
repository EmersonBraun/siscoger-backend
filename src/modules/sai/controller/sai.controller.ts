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
import { CreatesaiDto } from '../dtos/create.dto';
import { UpdatesaiDto } from '../dtos/update.dto';
import { sai } from '../entity/sai.entity';
import { saiService } from '../service/sai.service';

@ApiTags('sai')
@Controller('sais')
export class saiController {
  constructor(private service: saiService) {}

  @Get()
  @HttpCode(200)
  @ApiOperation({ summary: 'Search all sai' })
  @ApiOkResponse({ type: [CreatesaiDto], description: 'The found sai' })
  async findAll(): Promise<sai[]> {
    return await this.service.findAll();
  }

  @Post('search')
  @HttpCode(200)
  @ApiOperation({ summary: 'Search sai' })
  @ApiCreatedResponse({ type: UpdatesaiDto, description: 'Searched sai' })
  @ApiBadRequestResponse({ type: ErrorResponse, description: 'Bad Request' })
  async search(@Body() data: CreatesaiDto): Promise<sai[]> {
    return await this.service.search(data);
  }

  @Post()
  @HttpCode(201)
  @ApiOperation({ summary: 'Create a new sai' })
  @ApiCreatedResponse({ type: UpdatesaiDto, description: 'Created sai' })
  @ApiBadRequestResponse({ type: ErrorResponse, description: 'Bad Request' })
  async create(@Body() data: CreatesaiDto): Promise<sai> {
    return await this.service.create(data);
  }

  @Get(':id')
  @HttpCode(200)
  @ApiOperation({ summary: 'Search a sai by id' })
  @ApiOkResponse({ type: UpdatesaiDto, description: 'The found sai' })
  @ApiNotFoundResponse({ type: ErrorResponse, description: 'Not Found' })
  async findById(@Param('id') id: string): Promise<sai> {
    return await this.service.findById(id);
  }

  @Put(':id')
  @HttpCode(200)
  @ApiOperation({ summary: 'Update a sai' })
  @ApiOkResponse({ type: UpdatesaiDto, description: 'Updated sai' })
  @ApiNotFoundResponse({ type: ErrorResponse, description: 'Not Found' })
  async update(
    @Param('id') id: string,
    @Body() data: UpdatesaiDto,
  ): Promise<sai> {
    return this.service.update(id, data);
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

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
import { CreateisoDto } from '../dtos/create.dto';
import { UpdateisoDto } from '../dtos/update.dto';
import { iso } from '../entity/iso.entity';
import { isoService } from '../service/iso.service';

@ApiTags('iso')
@Controller('isos')
export class isoController {
  constructor(private service: isoService) {}

  @Get()
  @HttpCode(200)
  @ApiOperation({ summary: 'Search all iso' })
  @ApiOkResponse({ type: [CreateisoDto], description: 'The found iso' })
  async findAll(): Promise<iso[]> {
    return await this.service.findAll();
  }

  @Post('search')
  @HttpCode(200)
  @ApiOperation({ summary: 'Search iso' })
  @ApiCreatedResponse({ type: UpdateisoDto, description: 'Searched iso' })
  @ApiBadRequestResponse({ type: ErrorResponse, description: 'Bad Request' })
  async search(@Body() data: CreateisoDto): Promise<iso[]> {
    return await this.service.search(data);
  }

  @Post()
  @HttpCode(201)
  @ApiOperation({ summary: 'Create a new iso' })
  @ApiCreatedResponse({ type: UpdateisoDto, description: 'Created iso' })
  @ApiBadRequestResponse({ type: ErrorResponse, description: 'Bad Request' })
  async create(@Body() data: CreateisoDto): Promise<iso> {
    return await this.service.create(data);
  }

  @Get(':id')
  @HttpCode(200)
  @ApiOperation({ summary: 'Search a iso by id' })
  @ApiOkResponse({ type: UpdateisoDto, description: 'The found iso' })
  @ApiNotFoundResponse({ type: ErrorResponse, description: 'Not Found' })
  async findById(@Param('id') id: string): Promise<iso> {
    return await this.service.findById(id);
  }

  @Put(':id')
  @HttpCode(200)
  @ApiOperation({ summary: 'Update a iso' })
  @ApiOkResponse({ type: UpdateisoDto, description: 'Updated iso' })
  @ApiNotFoundResponse({ type: ErrorResponse, description: 'Not Found' })
  async update(
    @Param('id') id: string,
    @Body() data: UpdateisoDto,
  ): Promise<iso> {
    return this.service.update(id, data);
  }

  @Put(':id/restore')
  @HttpCode(200)
  @UseGuards(JwtAuthGuard, ACLGuard)
  @ACLPolice({ roles: [], permissions: [] })
  @ApiOperation({ summary: 'Delete a Iso' })
  @ApiNoContentResponse({ description: 'Deleted Iso' })
  @ApiNotFoundResponse({ type: ErrorResponse, description: 'Not Found' })
  async restore(
    @Param('id') id: string,
    @Request() request?: any,
  ): Promise<Iso> {
    const data = await this.service.restore(id);

    await activityLog({
      module: 'iso',
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
  @ApiOperation({ summary: 'Delete a Iso' })
  @ApiNoContentResponse({ description: 'Deleted Iso' })
  @ApiNotFoundResponse({ type: ErrorResponse, description: 'Not Found' })
  async delete(
    @Param('id') id: string,
    @Request() request?: any,
  ): Promise<Iso> {
    const data = await this.service.delete(id);

    await activityLog({
      module: 'iso',
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
  @ApiOperation({ summary: 'Delete definitive a Iso' })
  @ApiNoContentResponse({ description: 'Deleted definitive Iso' })
  @ApiNotFoundResponse({ type: ErrorResponse, description: 'Not Found' })
  async forceDelete(
    @Param('id') id: string,
    @Request() request?: any,
  ): Promise<Iso> {
    const data = await this.service.forceDelete(id);

    await activityLog({
      module: 'iso',
      action: 'forceDelete',
      data,
      user: request?.user,
    });
    return data;
  }
}

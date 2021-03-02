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
import { CreateipmDto } from '../dtos/create.dto';
import { UpdateipmDto } from '../dtos/update.dto';
import { ipm } from '../entity/ipm.entity';
import { ipmService } from '../service/ipm.service';

@ApiTags('ipm')
@Controller('ipms')
export class ipmController {
  constructor(private service: ipmService) {}

  @Get()
  @HttpCode(200)
  @ApiOperation({ summary: 'Search all ipm' })
  @ApiOkResponse({ type: [CreateipmDto], description: 'The found ipm' })
  async findAll(): Promise<ipm[]> {
    return await this.service.findAll();
  }

  @Post('search')
  @HttpCode(200)
  @ApiOperation({ summary: 'Search ipm' })
  @ApiCreatedResponse({ type: UpdateipmDto, description: 'Searched ipm' })
  @ApiBadRequestResponse({ type: ErrorResponse, description: 'Bad Request' })
  async search(@Body() data: CreateipmDto): Promise<ipm[]> {
    return await this.service.search(data);
  }

  @Post()
  @HttpCode(201)
  @ApiOperation({ summary: 'Create a new ipm' })
  @ApiCreatedResponse({ type: UpdateipmDto, description: 'Created ipm' })
  @ApiBadRequestResponse({ type: ErrorResponse, description: 'Bad Request' })
  async create(@Body() data: CreateipmDto): Promise<ipm> {
    return await this.service.create(data);
  }

  @Get(':id')
  @HttpCode(200)
  @ApiOperation({ summary: 'Search a ipm by id' })
  @ApiOkResponse({ type: UpdateipmDto, description: 'The found ipm' })
  @ApiNotFoundResponse({ type: ErrorResponse, description: 'Not Found' })
  async findById(@Param('id') id: string): Promise<ipm> {
    return await this.service.findById(id);
  }

  @Put(':id')
  @HttpCode(200)
  @ApiOperation({ summary: 'Update a ipm' })
  @ApiOkResponse({ type: UpdateipmDto, description: 'Updated ipm' })
  @ApiNotFoundResponse({ type: ErrorResponse, description: 'Not Found' })
  async update(
    @Param('id') id: string,
    @Body() data: UpdateipmDto,
  ): Promise<ipm> {
    return this.service.update(id, data);
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

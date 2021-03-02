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
import { CreatefatdDto } from '../dtos/create.dto';
import { UpdatefatdDto } from '../dtos/update.dto';
import { fatd } from '../entity/fatd.entity';
import { fatdService } from '../service/fatd.service';

@ApiTags('fatd')
@Controller('fatds')
export class fatdController {
  constructor(private service: fatdService) {}

  @Get()
  @HttpCode(200)
  @ApiOperation({ summary: 'Search all fatd' })
  @ApiOkResponse({ type: [CreatefatdDto], description: 'The found fatd' })
  async findAll(): Promise<fatd[]> {
    return await this.service.findAll();
  }

  @Post('search')
  @HttpCode(200)
  @ApiOperation({ summary: 'Search fatd' })
  @ApiCreatedResponse({ type: UpdatefatdDto, description: 'Searched fatd' })
  @ApiBadRequestResponse({ type: ErrorResponse, description: 'Bad Request' })
  async search(@Body() data: CreatefatdDto): Promise<fatd[]> {
    return await this.service.search(data);
  }

  @Post()
  @HttpCode(201)
  @ApiOperation({ summary: 'Create a new fatd' })
  @ApiCreatedResponse({ type: UpdatefatdDto, description: 'Created fatd' })
  @ApiBadRequestResponse({ type: ErrorResponse, description: 'Bad Request' })
  async create(@Body() data: CreatefatdDto): Promise<fatd> {
    return await this.service.create(data);
  }

  @Get(':id')
  @HttpCode(200)
  @ApiOperation({ summary: 'Search a fatd by id' })
  @ApiOkResponse({ type: UpdatefatdDto, description: 'The found fatd' })
  @ApiNotFoundResponse({ type: ErrorResponse, description: 'Not Found' })
  async findById(@Param('id') id: string): Promise<fatd> {
    return await this.service.findById(id);
  }

  @Put(':id')
  @HttpCode(200)
  @ApiOperation({ summary: 'Update a fatd' })
  @ApiOkResponse({ type: UpdatefatdDto, description: 'Updated fatd' })
  @ApiNotFoundResponse({ type: ErrorResponse, description: 'Not Found' })
  async update(
    @Param('id') id: string,
    @Body() data: UpdatefatdDto,
  ): Promise<fatd> {
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

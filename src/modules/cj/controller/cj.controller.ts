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
  UseGuards
} from '@nestjs/common';
import {
  ApiBadRequestResponse,
  ApiCreatedResponse,
  ApiNoContentResponse,
  ApiNotFoundResponse,
  ApiOkResponse,
  ApiOperation,
  ApiTags
} from '@nestjs/swagger';
import { activityLog } from '../../../common/activiti-log';
import ACLPolice from '../../../common/decorators/acl.decorator';
import ACLGuard from '../../../common/guards/acl.guard';
import JwtAuthGuard from '../../../common/guards/jwt.guard';
import { ErrorResponse } from '../../../common/responses/error';
import { CreateCjDto } from '../dtos/create.dto';
import { UpdateCjDto } from '../dtos/update.dto';
import { Cj } from '../entity/cj.entity';
import { CjService } from '../service/cj.service';

@ApiTags('Cj')
@Controller('cj')
export class CjController {
  constructor(private service: CjService) {}

  @Get()
  @HttpCode(200)
  @UseGuards(JwtAuthGuard, ACLGuard)
  @ACLPolice({ roles: [], permissions: [] })
  @ApiOperation({ summary: 'Search all CJ' })
  @ApiOkResponse({
    type: [CreateCjDto],
    description: 'The found CD',
  })
  async findAll(): Promise<Cj[]> {
    return await this.service.findAll();
  }

  @Post()
  @HttpCode(201)
  @UseGuards(JwtAuthGuard, ACLGuard)
  @ACLPolice({ roles: [], permissions: [] })
  @ApiOperation({ summary: 'Create a new CJ' })
  @ApiCreatedResponse({
    type: UpdateCjDto,
    description: 'Created CJ',
  })
  @ApiBadRequestResponse({ type: ErrorResponse, description: 'Bad Request' })
  async create(
    @Body() data: CreateCjDto,
    @Request() request?: any,
  ): Promise<Cj> {
    const response = await this.service.create(data);

    await activityLog({
      module: 'cj',
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
  @ApiOperation({ summary: 'Search a CJ by id' })
  @ApiOkResponse({
    type: UpdateCjDto,
    description: 'The found CJ',
  })
  @ApiNotFoundResponse({ type: ErrorResponse, description: 'Not Found' })
  async findById(@Param('id') id: string): Promise<Cj> {
    return await this.service.findById(id);
  }

  @Put(':id')
  @HttpCode(200)
  @UseGuards(JwtAuthGuard, ACLGuard)
  @ACLPolice({ roles: [], permissions: [] })
  @ApiOperation({ summary: 'Update a CJ' })
  @ApiOkResponse({
    type: UpdateCjDto,
    description: 'Updated Cj',
  })
  @ApiNotFoundResponse({ type: ErrorResponse, description: 'Not Found' })
  async update(
    @Param('id') id: string,
    @Body() data: UpdateCjDto,
    @Request() request?: any,
  ): Promise<Cj> {
    const old = await this.service.findById(id);
    const response = await this.service.update(id, data);

    await activityLog({
      module: 'cj',
      action: 'update',
      data: response,
      old,
      user: request?.user,
    });

    return response;
  }

  @Delete(':id')
  @HttpCode(204)
  @UseGuards(JwtAuthGuard, ACLGuard)
  @ACLPolice({ roles: [], permissions: [] })
  @ApiOperation({ summary: 'Delete a Cj' })
  @ApiNoContentResponse({ description: 'Deleted Cj' })
  @ApiNotFoundResponse({ type: ErrorResponse, description: 'Not Found' })
  async delete(
    @Param('id') id: string,
    @Request() request?: any,
  ): Promise<void> {
    const data = await this.service.delete(id);

    await activityLog({
      module: 'cj',
      action: 'delete',
      data,
      user: request?.user,
    });
  }
}

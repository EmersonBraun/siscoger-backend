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
import { CreateApfdDto } from '../dtos/create.dto';
import { UpdateApfdDto } from '../dtos/update.dto';
import { Apfd } from '../entity/apfd.entity';
import { ApfdService } from '../service/apfd.service';

@ApiTags('Apfd')
@Controller('apfds')
export class ApfdController {
  constructor(private service: ApfdService) {}

  @Get()
  @HttpCode(200)
  @UseGuards(JwtAuthGuard, ACLGuard)
  @ACLPolice({ roles: ['admin'], permissions: ['criar-apfd'] })
  @ApiOperation({ summary: 'Search all Apfd' })
  @ApiOkResponse({ type: [CreateApfdDto], description: 'The found Apfd' })
  async findAll(): Promise<Apfd[]> {
    return await this.service.findAll();
  }

  @Post()
  @HttpCode(201)
  @UseGuards(JwtAuthGuard, ACLGuard)
  @ACLPolice({ roles: ['admin'], permissions: ['criar-apfd'] })
  @ApiOperation({ summary: 'Create a new Apfd' })
  @ApiCreatedResponse({ type: UpdateApfdDto, description: 'Created Apfd' })
  @ApiBadRequestResponse({ type: ErrorResponse, description: 'Bad Request' })
  async create(
    @Body() data: CreateApfdDto,
    @Request() request?: any,
  ): Promise<Apfd> {
    const response = await this.service.create(data);

    await activityLog({
      module: 'apfd',
      action: 'create',
      data: response,
      user: request?.user,
    });

    return response;
  }

  @Get(':id')
  @HttpCode(200)
  @UseGuards(JwtAuthGuard, ACLGuard)
  @ACLPolice({ roles: ['admin'], permissions: ['criar-apfd'] })
  @ApiOperation({ summary: 'Search a Apfd by id' })
  @ApiOkResponse({ type: UpdateApfdDto, description: 'The found Apfd' })
  @ApiNotFoundResponse({ type: ErrorResponse, description: 'Not Found' })
  async findById(@Param('id') id: string): Promise<Apfd> {
    return await this.service.findById(id);
  }

  @Put(':id')
  @HttpCode(200)
  @UseGuards(JwtAuthGuard, ACLGuard)
  @ACLPolice({ roles: ['admin'], permissions: ['editar-apfd'] })
  @ApiOperation({ summary: 'Update a Apfd' })
  @ApiOkResponse({ type: UpdateApfdDto, description: 'Updated Apfd' })
  @ApiNotFoundResponse({ type: ErrorResponse, description: 'Not Found' })
  async update(
    @Param('id') id: string,
    @Body() data: UpdateApfdDto,
    @Request() request?: any,
  ): Promise<Apfd> {
    const old = await this.service.findById(id);
    const response = await this.service.update(id, data);

    await activityLog({
      module: 'apfd',
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
  @ACLPolice({ roles: ['admin'], permissions: ['apagar-apfd'] })
  @ApiOperation({ summary: 'Delete a Apfd' })
  @ApiNoContentResponse({ description: 'Deleted Apfd' })
  @ApiNotFoundResponse({ type: ErrorResponse, description: 'Not Found' })
  async delete(
    @Param('id') id: string,
    @Request() request?: any,
  ): Promise<void> {
    const data = await this.service.delete(id);

    await activityLog({
      module: 'apfd',
      action: 'delete',
      data,
      user: request?.user,
    });
  }
}

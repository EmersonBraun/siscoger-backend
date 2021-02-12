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
import { CreateOfendidoDto } from '../dtos/create.dto';
import { UpdateOfendidoDto } from '../dtos/update.dto';
import { Ofendido } from '../entity/ofendido.entity';
import { OfendidoService } from '../service/ofendido.service';

@ApiTags('Ofendido')
@Controller('ofendidos')
export class OfendidoController {
  constructor(private service: OfendidoService) {}

  @Get()
  @HttpCode(200)
  @UseGuards(JwtAuthGuard, ACLGuard)
  @ACLPolice({ roles: [], permissions: [] })
  @ApiOperation({ summary: 'Search all Ofendido' })
  @ApiOkResponse({
    type: [CreateOfendidoDto],
    description: 'The found Ofendido',
  })
  async findAll(): Promise<void> {
    return await this.service.findAll();
  }

  @Post('search')
  @HttpCode(200)
  @UseGuards(JwtAuthGuard, ACLGuard)
  @ACLPolice({ roles: [], permissions: [] })
  @ApiOperation({ summary: 'Search ofendido' })
  @ApiCreatedResponse({
    type: UpdateOfendidoDto,
    description: 'Searched Ligacao',
  })
  @ApiBadRequestResponse({ type: ErrorResponse, description: 'Bad Request' })
  async search(@Body() data: CreateOfendidoDto): Promise<void> {
    return await this.service.search(data);
  }

  @Post()
  @HttpCode(201)
  @UseGuards(JwtAuthGuard, ACLGuard)
  @ACLPolice({ roles: [], permissions: [] })
  @ApiOperation({ summary: 'Create a new Ofendido' })
  @ApiCreatedResponse({
    type: UpdateOfendidoDto,
    description: 'Created Ofendido',
  })
  @ApiBadRequestResponse({ type: ErrorResponse, description: 'Bad Request' })
  async create(
    @Body() data: CreateOfendidoDto,
    @Request() request?: any,
  ): Promise<void> {
    const response = await this.service.create(data);

    await activityLog({
      module: 'ofendido',
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
  @ApiOperation({ summary: 'Search a Ofendido by id' })
  @ApiOkResponse({ type: UpdateOfendidoDto, description: 'The found Ofendido' })
  @ApiNotFoundResponse({ type: ErrorResponse, description: 'Not Found' })
  async findById(@Param('id') id: string): Promise<void> {
    return await this.service.findById(id);
  }

  @Put(':id')
  @HttpCode(200)
  @UseGuards(JwtAuthGuard, ACLGuard)
  @ACLPolice({ roles: [], permissions: [] })
  @ApiOperation({ summary: 'Update a Ofendido' })
  @ApiOkResponse({ type: UpdateOfendidoDto, description: 'Updated Ofendido' })
  @ApiNotFoundResponse({ type: ErrorResponse, description: 'Not Found' })
  async update(
    @Param('id') id: string,
    @Body() data: UpdateOfendidoDto,
    @Request() request?: any,
  ): Promise<Ofendido> {
    const old = await this.service.findById(id);
    const response = await this.service.update(id, data);

    await activityLog({
      module: 'ofendido',
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
  @ApiOperation({ summary: 'Delete a Ofendido' })
  @ApiNoContentResponse({ description: 'Deleted Ofendido' })
  @ApiNotFoundResponse({ type: ErrorResponse, description: 'Not Found' })
  async delete(
    @Param('id') id: string,
    @Request() request?: any,
  ): Promise<void> {
    const data = await this.service.delete(id);

    await activityLog({
      module: 'ofendido',
      action: 'delete',
      data,
      user: request?.user,
    });
  }
}

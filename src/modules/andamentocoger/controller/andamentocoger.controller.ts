import {
  Body,
  Controller,
  Delete,
  Get,
  HttpCode,
  Param,
  Post,
  Put,
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
import ACLPolice from '../../../common/decorators/acl.decorator';
import ACLGuard from '../../../common/guards/acl.guard';
import JwtAuthGuard from '../../../common/guards/jwt.guard';
import ErrorResponse from '../../../common/responses/error';
import { CreateAndamentocogerDto } from '../dtos/create.dto';
import { UpdateAndamentocogerDto } from '../dtos/update.dto';
import { Andamentocoger } from '../entity/andamentocoger.entity';
import { AndamentocogerService } from '../service/andamentocoger.service';

@ApiTags('Andamentocoger')
@Controller('andamentoscoger')
export class AndamentocogerController {
  constructor(private service: AndamentocogerService) {}

  @Get()
  @HttpCode(200)
  @UseGuards(JwtAuthGuard, ACLGuard)
  @ACLPolice({ roles: ['admin'], permissions: [] })
  @ApiOperation({ summary: 'Search all Andamentocoger' })
  @ApiOkResponse({
    type: [CreateAndamentocogerDto],
    description: 'The found Andamentocoger',
  })
  async findAll(): Promise<void> {
    await this.service.findAll();
  }

  @Post()
  @HttpCode(201)
  @UseGuards(JwtAuthGuard, ACLGuard)
  @ACLPolice({ roles: ['admin'], permissions: [] })
  @ApiOperation({ summary: 'Create a new Andamentocoger' })
  @ApiCreatedResponse({
    type: UpdateAndamentocogerDto,
    description: 'Created Andamentocoger',
  })
  @ApiBadRequestResponse({ type: ErrorResponse, description: 'Bad Request' })
  async create(@Body() data: CreateAndamentocogerDto): Promise<void> {
    await this.service.create(data);
  }

  @Get(':id')
  @HttpCode(200)
  @UseGuards(JwtAuthGuard, ACLGuard)
  @ACLPolice({ roles: ['admin'], permissions: [] })
  @ApiOperation({ summary: 'Search a Andamentocoger by id' })
  @ApiOkResponse({
    type: UpdateAndamentocogerDto,
    description: 'The found Andamentocoger',
  })
  @ApiNotFoundResponse({ type: ErrorResponse, description: 'Not Found' })
  async findById(@Param('id') id: string): Promise<void> {
    await this.service.findById(id);
  }

  @Put(':id')
  @HttpCode(200)
  @UseGuards(JwtAuthGuard, ACLGuard)
  @ACLPolice({ roles: ['admin'], permissions: [] })
  @ApiOperation({ summary: 'Update a Andamentocoger' })
  @ApiOkResponse({
    type: UpdateAndamentocogerDto,
    description: 'Updated Andamentocoger',
  })
  @ApiNotFoundResponse({ type: ErrorResponse, description: 'Not Found' })
  async update(
    @Param('id') id: string,
    @Body() data: UpdateAndamentocogerDto,
  ): Promise<Andamentocoger> {
    return this.service.update(id, data);
  }

  @Delete(':id')
  @HttpCode(204)
  @UseGuards(JwtAuthGuard, ACLGuard)
  @ACLPolice({ roles: ['admin'], permissions: [] })
  @ApiOperation({ summary: 'Delete a Andamentocoger' })
  @ApiNoContentResponse({ description: 'Deleted Andamentocoger' })
  @ApiNotFoundResponse({ type: ErrorResponse, description: 'Not Found' })
  async delete(@Param('id') id: string): Promise<void> {
    await this.service.delete(id);
  }
}

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
import { ErrorResponse } from '../../../common/responses/error';
import { CreateMotivoconselhoDto } from '../dtos/create.dto';
import { UpdateMotivoconselhoDto } from '../dtos/update.dto';
import { Motivoconselho } from '../entity/motivoconselho.entity';
import { MotivoconselhoService } from '../service/motivoconselho.service';

@ApiTags('Motivoconselho')
@Controller('motivosconselho')
export class MotivoconselhoController {
  constructor(private service: MotivoconselhoService) {}

  @Get()
  @HttpCode(200)
  @UseGuards(JwtAuthGuard, ACLGuard)
  @ACLPolice({ roles: [], permissions: [] })
  @ApiOperation({ summary: 'Search all Motivoconselho' })
  @ApiOkResponse({
    type: [CreateMotivoconselhoDto],
    description: 'The found Motivoconselho',
  })
  async findAll(): Promise<Motivoconselho[]> {
    return await this.service.findAll();
  }

  @Post()
  @HttpCode(201)
  @UseGuards(JwtAuthGuard, ACLGuard)
  @ACLPolice({ roles: [], permissions: [] })
  @ApiOperation({ summary: 'Create a new Motivoconselho' })
  @ApiCreatedResponse({
    type: UpdateMotivoconselhoDto,
    description: 'Created Motivoconselho',
  })
  @ApiBadRequestResponse({ type: ErrorResponse, description: 'Bad Request' })
  async create(@Body() data: CreateMotivoconselhoDto): Promise<Motivoconselho> {
    return await this.service.create(data);
  }

  @Get(':id')
  @HttpCode(200)
  @UseGuards(JwtAuthGuard, ACLGuard)
  @ACLPolice({ roles: [], permissions: [] })
  @ApiOperation({ summary: 'Search a Motivoconselho by id' })
  @ApiOkResponse({
    type: UpdateMotivoconselhoDto,
    description: 'The found Motivoconselho',
  })
  @ApiNotFoundResponse({ type: ErrorResponse, description: 'Not Found' })
  async findById(@Param('id') id: string): Promise<Motivoconselho> {
    return await this.service.findById(id);
  }

  @Put(':id')
  @HttpCode(200)
  @UseGuards(JwtAuthGuard, ACLGuard)
  @ACLPolice({ roles: [], permissions: [] })
  @ApiOperation({ summary: 'Update a Motivoconselho' })
  @ApiOkResponse({
    type: UpdateMotivoconselhoDto,
    description: 'Updated Motivoconselho',
  })
  @ApiNotFoundResponse({ type: ErrorResponse, description: 'Not Found' })
  async update(
    @Param('id') id: string,
    @Body() data: UpdateMotivoconselhoDto,
  ): Promise<Motivoconselho> {
    return this.service.update(id, data);
  }

  @Delete(':id')
  @HttpCode(204)
  @UseGuards(JwtAuthGuard, ACLGuard)
  @ACLPolice({ roles: [], permissions: [] })
  @ApiOperation({ summary: 'Delete a Motivoconselho' })
  @ApiNoContentResponse({ description: 'Deleted Motivoconselho' })
  @ApiNotFoundResponse({ type: ErrorResponse, description: 'Not Found' })
  async delete(@Param('id') id: string): Promise<void> {
    await this.service.delete(id);
  }
}

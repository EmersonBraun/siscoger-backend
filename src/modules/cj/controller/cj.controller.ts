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
  async findAll(): Promise<void> {
    await this.service.findAll();
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
  async create(@Body() data: CreateCjDto): Promise<void> {
    await this.service.create(data);
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
  async findById(@Param('id') id: string): Promise<void> {
    await this.service.findById(id);
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
  ): Promise<Cj> {
    return this.service.update(id, data);
  }

  @Delete(':id')
  @HttpCode(204)
  @UseGuards(JwtAuthGuard, ACLGuard)
  @ACLPolice({ roles: [], permissions: [] })
  @ApiOperation({ summary: 'Delete a Cj' })
  @ApiNoContentResponse({ description: 'Deleted Cj' })
  @ApiNotFoundResponse({ type: ErrorResponse, description: 'Not Found' })
  async delete(@Param('id') id: string): Promise<void> {
    await this.service.delete(id);
  }
}

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
import { CreateAdlDto } from '../dtos/create.dto';
import { UpdateAdlDto } from '../dtos/update.dto';
import Adl from '../entity/adl.entity';
import { AdlService } from '../service/adl.service';

@ApiTags('Adl')
@Controller('adls')
export default class AdlController {
  constructor(private service: AdlService) {}

  @Get()
  @HttpCode(200)
  @UseGuards(JwtAuthGuard, ACLGuard)
  @ACLPolice({ roles: [], permissions: [] })
  @ApiOperation({ summary: 'Search all Adl' })
  @ApiOkResponse({ type: [CreateAdlDto], description: 'The found Adl' })
  async findAll(): Promise<void> {
    await this.service.findAll();
  }

  @Post()
  @HttpCode(201)
  @UseGuards(JwtAuthGuard, ACLGuard)
  @ACLPolice({ roles: [], permissions: [] })
  @ApiOperation({ summary: 'Create a new Adl' })
  @ApiCreatedResponse({ type: UpdateAdlDto, description: 'Created Adl' })
  @ApiBadRequestResponse({ type: ErrorResponse, description: 'Bad Request' })
  async create(@Body() data: CreateAdlDto): Promise<void> {
    await this.service.create(data);
  }

  @Get(':id')
  @HttpCode(200)
  @UseGuards(JwtAuthGuard, ACLGuard)
  @ACLPolice({ roles: [], permissions: [] })
  @ApiOperation({ summary: 'Search a Adl by id' })
  @ApiOkResponse({ type: UpdateAdlDto, description: 'The found Adl' })
  @ApiNotFoundResponse({ type: ErrorResponse, description: 'Not Found' })
  async findById(@Param('id') id: string): Promise<void> {
    await this.service.findById(id);
  }

  @Put(':id')
  @HttpCode(200)
  @UseGuards(JwtAuthGuard, ACLGuard)
  @ACLPolice({ roles: [], permissions: [] })
  @ApiOperation({ summary: 'Update a Adl' })
  @ApiOkResponse({ type: UpdateAdlDto, description: 'Updated Adl' })
  @ApiNotFoundResponse({ type: ErrorResponse, description: 'Not Found' })
  async update(
    @Param('id') id: string,
    @Body() data: UpdateAdlDto,
  ): Promise<Adl> {
    return this.service.update(id, data);
  }

  @Delete(':id')
  @HttpCode(204)
  @UseGuards(JwtAuthGuard, ACLGuard)
  @ACLPolice({ roles: [], permissions: [] })
  @ApiOperation({ summary: 'Delete a Adl' })
  @ApiNoContentResponse({ description: 'Deleted Adl' })
  @ApiNotFoundResponse({ type: ErrorResponse, description: 'Not Found' })
  async delete(@Param('id') id: string): Promise<void> {
    await this.service.delete(id);
  }
}

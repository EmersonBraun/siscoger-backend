import {
  Body,
  Controller,
  Delete,
  Get,
  HttpCode,
  Param,
  Post,
  Put
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
import { ErrorResponse } from '../../../common/responses';
import { CreateApfdDto } from '../dtos/create.dto';
import { UpdateApfdDto } from '../dtos/update.dto';
import { Apfd } from '../entity/apfd.entity';
import { ApfdService } from '../service/apfd.service';


@ApiTags('Apfd')
@Controller('apfd')
export class ApfdController {
  constructor(private service: ApfdService) {}

  @Get()
  @HttpCode(200)
  @ApiOperation({ summary: 'Search all Apfd' })
  @ApiOkResponse({ type: [CreateApfdDto], description: 'The found Apfd' })
  async findAll(): Promise<Apfd[]> {
    return await this.service.findAll();
  }

  @Post()
  @HttpCode(201)
  @ApiOperation({ summary: 'Create a new Apfd' })
  @ApiCreatedResponse({ type: UpdateApfdDto, description: 'Created Apfd' })
  @ApiBadRequestResponse({ type: ErrorResponse, description: 'Bad Request', })
  async create(@Body() data: CreateApfdDto): Promise<Apfd> {
    return await this.service.create(data);
  }

  @Get(':id')
  @HttpCode(200)
  @ApiOperation({ summary: 'Search a Apfd by id' })
  @ApiOkResponse({ type: UpdateApfdDto, description: 'The found Apfd' })
  @ApiNotFoundResponse({ type: ErrorResponse, description: 'Not Found' })
  async findById(@Param('id') id: string): Promise<Apfd> {
    return await this.service.findById(id);
  }

  @Put(':id')
  @HttpCode(200)
  @ApiOperation({ summary: 'Update a Apfd' })
  @ApiOkResponse({ type: UpdateApfdDto, description: 'Updated Apfd' })
  @ApiNotFoundResponse({ type: ErrorResponse, description: 'Not Found' })
  async update(
    @Param('id') id: string,
    @Body() data: UpdateApfdDto,
  ): Promise<Apfd> {
    return this.service.update(id, data);
  }

  @Delete(':id')
  @HttpCode(204)
  @ApiOperation({ summary: 'Delete a Apfd' })
  @ApiNoContentResponse({ description: 'Deleted Apfd' })
  @ApiNotFoundResponse({ type: ErrorResponse, description: 'Not Found' })
  async delete(@Param('id') id: string): Promise<void> {
    await this.service.delete(id);
  }
}
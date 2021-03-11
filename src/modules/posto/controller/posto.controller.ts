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
import { CreatePostoDto } from '../dtos/create.dto';
import { UpdatePostoDto } from '../dtos/update.dto';
import Posto from '../entity/posto.entity';
import { PostoService } from '../service/posto.service';

@ApiTags('Posto')
@Controller('postos')
export class PostoController {
  constructor(private service: PostoService) {}

  @Get()
  @HttpCode(200)
  @ApiOperation({ summary: 'Search all Posto' })
  @ApiOkResponse({ type: [CreatePostoDto], description: 'The found Posto' })
  async findAll(): Promise<Posto[]> {
    return await this.service.findAll();
  }

  @Post('search')
  @HttpCode(200)
  @ApiOperation({ summary: 'Search Posto' })
  @ApiCreatedResponse({ type: UpdatePostoDto, description: 'Searched Posto' })
  @ApiBadRequestResponse({ type: ErrorResponse, description: 'Bad Request' })
  async search(@Body() data: CreatePostoDto): Promise<Posto[]> {
    return await this.service.search(data);
  }

  @Post()
  @HttpCode(201)
  @ApiOperation({ summary: 'Create a new Posto' })
  @ApiCreatedResponse({ type: UpdatePostoDto, description: 'Created Posto' })
  @ApiBadRequestResponse({ type: ErrorResponse, description: 'Bad Request' })
  async create(@Body() data: CreatePostoDto): Promise<Posto> {
    return await this.service.create(data);
  }

  @Get(':id')
  @HttpCode(200)
  @ApiOperation({ summary: 'Search a Posto by id' })
  @ApiOkResponse({ type: UpdatePostoDto, description: 'The found Posto' })
  @ApiNotFoundResponse({ type: ErrorResponse, description: 'Not Found' })
  async findById(@Param('id') id: string): Promise<Posto> {
    return await this.service.findById(id);
  }

  @Put(':id')
  @HttpCode(200)
  @ApiOperation({ summary: 'Update a Posto' })
  @ApiOkResponse({ type: UpdatePostoDto, description: 'Updated Posto' })
  @ApiNotFoundResponse({ type: ErrorResponse, description: 'Not Found' })
  async update(
    @Param('id') id: string,
    @Body() data: UpdatePostoDto,
  ): Promise<Posto> {
    return this.service.update(id, data);
  }

  @Delete(':id')
  @HttpCode(204)
  @ApiOperation({ summary: 'Delete a Posto' })
  @ApiNoContentResponse({ description: 'Deleted Posto' })
  @ApiNotFoundResponse({ type: ErrorResponse, description: 'Not Found' })
  async delete(@Param('id') id: string): Promise<void> {
    await this.service.delete(id);
  }
}

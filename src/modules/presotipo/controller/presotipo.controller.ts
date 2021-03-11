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
import { CreatePresoTipoDto } from '../dtos/create.dto';
import { UpdatePresoTipoDto } from '../dtos/update.dto';
import PresoTipo from '../entity/presotipo.entity';
import { PresoTipoService } from '../service/presotipo.service';

@ApiTags('PresoTipo')
@Controller('presotipos')
export class PresoTipoController {
  constructor(private service: PresoTipoService) {}

  @Get()
  @HttpCode(200)
  @ApiOperation({ summary: 'Search all PresoTipo' })
  @ApiOkResponse({
    type: [CreatePresoTipoDto],
    description: 'The found PresoTipo',
  })
  async findAll(): Promise<PresoTipo[]> {
    return await this.service.findAll();
  }

  @Post('search')
  @HttpCode(200)
  @ApiOperation({ summary: 'Search PresoTipo' })
  @ApiCreatedResponse({
    type: UpdatePresoTipoDto,
    description: 'Searched PresoTipo',
  })
  @ApiBadRequestResponse({ type: ErrorResponse, description: 'Bad Request' })
  async search(@Body() data: CreatePresoTipoDto): Promise<PresoTipo[]> {
    return await this.service.search(data);
  }

  @Post()
  @HttpCode(201)
  @ApiOperation({ summary: 'Create a new PresoTipo' })
  @ApiCreatedResponse({
    type: UpdatePresoTipoDto,
    description: 'Created PresoTipo',
  })
  @ApiBadRequestResponse({ type: ErrorResponse, description: 'Bad Request' })
  async create(@Body() data: CreatePresoTipoDto): Promise<PresoTipo> {
    return await this.service.create(data);
  }

  @Get(':id')
  @HttpCode(200)
  @ApiOperation({ summary: 'Search a PresoTipo by id' })
  @ApiOkResponse({
    type: UpdatePresoTipoDto,
    description: 'The found PresoTipo',
  })
  @ApiNotFoundResponse({ type: ErrorResponse, description: 'Not Found' })
  async findById(@Param('id') id: string): Promise<PresoTipo> {
    return await this.service.findById(id);
  }

  @Put(':id')
  @HttpCode(200)
  @ApiOperation({ summary: 'Update a PresoTipo' })
  @ApiOkResponse({ type: UpdatePresoTipoDto, description: 'Updated PresoTipo' })
  @ApiNotFoundResponse({ type: ErrorResponse, description: 'Not Found' })
  async update(
    @Param('id') id: string,
    @Body() data: UpdatePresoTipoDto,
  ): Promise<PresoTipo> {
    return this.service.update(id, data);
  }

  @Delete(':id')
  @HttpCode(204)
  @ApiOperation({ summary: 'Delete a PresoTipo' })
  @ApiNoContentResponse({ description: 'Deleted PresoTipo' })
  @ApiNotFoundResponse({ type: ErrorResponse, description: 'Not Found' })
  async delete(@Param('id') id: string): Promise<void> {
    await this.service.delete(id);
  }
}

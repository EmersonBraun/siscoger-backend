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
import { CreateRespCivilDto } from '../dtos/create.dto';
import { UpdateRespCivilDto } from '../dtos/update.dto';
import RespCivil from '../entity/respcivil.entity';
import { RespCivilService } from '../service/respcivil.service';

@ApiTags('RespCivil')
@Controller('RespCivils')
export class RespCivilController {
  constructor(private service: RespCivilService) {}

  @Get()
  @HttpCode(200)
  @ApiOperation({ summary: 'Search all RespCivil' })
  @ApiOkResponse({
    type: [CreateRespCivilDto],
    description: 'The found RespCivil',
  })
  async findAll(): Promise<RespCivil[]> {
    return await this.service.findAll();
  }

  // @Post('search')
  // @HttpCode(200)
  // @ApiOperation({ summary: 'Search RespCivil' })
  // @ApiCreatedResponse({
  //   type: UpdateRespCivilDto,
  //   description: 'Searched RespCivil',
  // })
  // @ApiBadRequestResponse({ type: ErrorResponse, description: 'Bad Request' })
  // async search(@Body() data: CreateRespCivilDto): Promise<RespCivil[]> {
  //   return await this.service.search(data);
  // }

  @Post()
  @HttpCode(201)
  @ApiOperation({ summary: 'Create a new RespCivil' })
  @ApiCreatedResponse({
    type: UpdateRespCivilDto,
    description: 'Created RespCivil',
  })
  @ApiBadRequestResponse({ type: ErrorResponse, description: 'Bad Request' })
  async create(@Body() data: CreateRespCivilDto): Promise<RespCivil> {
    return await this.service.create(data);
  }

  @Get(':id')
  @HttpCode(200)
  @ApiOperation({ summary: 'Search a RespCivil by id' })
  @ApiOkResponse({
    type: UpdateRespCivilDto,
    description: 'The found RespCivil',
  })
  @ApiNotFoundResponse({ type: ErrorResponse, description: 'Not Found' })
  async findById(@Param('id') id: string): Promise<RespCivil> {
    return await this.service.findById(id);
  }

  @Put(':id')
  @HttpCode(200)
  @ApiOperation({ summary: 'Update a RespCivil' })
  @ApiOkResponse({ type: UpdateRespCivilDto, description: 'Updated RespCivil' })
  @ApiNotFoundResponse({ type: ErrorResponse, description: 'Not Found' })
  async update(
    @Param('id') id: string,
    @Body() data: UpdateRespCivilDto,
  ): Promise<RespCivil> {
    return this.service.update(id, data);
  }

  @Delete(':id')
  @HttpCode(204)
  @ApiOperation({ summary: 'Delete a RespCivil' })
  @ApiNoContentResponse({ description: 'Deleted RespCivil' })
  @ApiNotFoundResponse({ type: ErrorResponse, description: 'Not Found' })
  async delete(@Param('id') id: string): Promise<RespCivil> {
    const data = await this.service.delete(id);
    return data;
  }
}

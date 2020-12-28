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
import { CreateTasksDto } from '../dtos/create.dto';
import { UpdateTasksDto } from '../dtos/update.dto';
import { Tasks } from '../schema/task.schema';
import { TasksService } from '../service/task.service';


@ApiTags('Tasks')
@Controller('tasks')
export class TasksController {
  constructor(private service: TasksService) {}

  @Get()
  @HttpCode(200)
  @ApiOperation({ summary: 'Search all Tasks' })
  @ApiOkResponse({ type: [CreateTasksDto], description: 'The found Tasks' })
  async findAll(): Promise<Tasks[]> {
    return await this.service.findAll();
  }

  @Post('search')
  @HttpCode(200)
  @ApiOperation({ summary: 'Search Tasks' })
  @ApiCreatedResponse({ type: UpdateTasksDto, description: 'Searched Tasks' })
  @ApiBadRequestResponse({ type: ErrorResponse, description: 'Bad Request', })
  async search(@Body() data: CreateTasksDto): Promise<Tasks[]> {
    return await this.service.search(data);
  }

  @Post()
  @HttpCode(201)
  @ApiOperation({ summary: 'Create a new Tasks' })
  @ApiCreatedResponse({ type: UpdateTasksDto, description: 'Created Tasks' })
  @ApiBadRequestResponse({ type: ErrorResponse, description: 'Bad Request', })
  async create(@Body() data: CreateTasksDto) {
    return await this.service.create(data);
  }

  @Get(':id')
  @HttpCode(200)
  @ApiOperation({ summary: 'Search a Tasks by id' })
  @ApiOkResponse({ type: UpdateTasksDto, description: 'The found Tasks' })
  @ApiNotFoundResponse({ type: ErrorResponse, description: 'Not Found' })
  async findById(@Param('id') id: string): Promise<Tasks> {
    return await this.service.findById(id);
  }

  @Put(':id')
  @HttpCode(200)
  @ApiOperation({ summary: 'Update a Tasks' })
  @ApiOkResponse({ type: UpdateTasksDto, description: 'Updated Tasks' })
  @ApiNotFoundResponse({ type: ErrorResponse, description: 'Not Found' })
  async update(
    @Param('id') id: string,
    @Body() data: UpdateTasksDto,
  ): Promise<Tasks> {
    return this.service.update(id, data);
  }

  @Delete(':id')
  @HttpCode(204)
  @ApiOperation({ summary: 'Delete a Tasks' })
  @ApiNoContentResponse({ description: 'Deleted Tasks' })
  @ApiNotFoundResponse({ type: ErrorResponse, description: 'Not Found' })
  async delete(@Param('id') id: string): Promise<void> {
    await this.service.delete(id);
  }
}
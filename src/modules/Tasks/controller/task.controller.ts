import {
  Body,
  Controller,
  Get,
  HttpCode,
  Post
} from '@nestjs/common';
import {
  ApiBadRequestResponse,
  ApiCreatedResponse,


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
}
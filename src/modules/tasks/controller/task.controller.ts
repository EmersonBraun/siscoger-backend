import {
  Body,
  Controller,
  Get,
  HttpCode,
  Post,
  UseGuards,
} from '@nestjs/common';
import {
  ApiBadRequestResponse,
  ApiCreatedResponse,
  ApiOkResponse,
  ApiOperation,
  ApiTags,
} from '@nestjs/swagger';
import ACLPolice from '../../../common/decorators/acl.decorator';
import ACLGuard from '../../../common/guards/acl.guard';
import JwtAuthGuard from '../../../common/guards/jwt.guard';
import ErrorResponse from '../../../common/responses/error';
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
  @UseGuards(JwtAuthGuard, ACLGuard)
  @ACLPolice({ roles: [], permissions: [] })
  @ApiOperation({ summary: 'Search all Tasks' })
  @ApiOkResponse({ type: [CreateTasksDto], description: 'The found Tasks' })
  async findAll(): Promise<void> {
    await this.service.findAll();
  }

  @Post('search')
  @HttpCode(200)
  @UseGuards(JwtAuthGuard, ACLGuard)
  @ACLPolice({ roles: [], permissions: [] })
  @ApiOperation({ summary: 'Search Tasks' })
  @ApiCreatedResponse({ type: UpdateTasksDto, description: 'Searched Tasks' })
  @ApiBadRequestResponse({ type: ErrorResponse, description: 'Bad Request' })
  async search(@Body() data: CreateTasksDto): Promise<void> {
    await this.service.search(data);
  }
}

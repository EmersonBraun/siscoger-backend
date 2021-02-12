import {
  Body,
  Controller,
  Delete,
  Get,
  HttpCode,
  Param,
  Post,
  Put,
  Request,
  UploadedFile,
  UseGuards,
  UseInterceptors
} from '@nestjs/common';
import { FileInterceptor } from '@nestjs/platform-express';
import {
  ApiBadRequestResponse,
  ApiCreatedResponse,
  ApiNoContentResponse,
  ApiNotFoundResponse,
  ApiOkResponse,
  ApiOperation,
  ApiTags
} from '@nestjs/swagger';
import { activityLog } from '../../../common/activiti-log';
import ACLPolice from '../../../common/decorators/acl.decorator';
import ACLGuard from '../../../common/guards/acl.guard';
import JwtAuthGuard from '../../../common/guards/jwt.guard';
import { ErrorResponse } from '../../../common/responses/error';
import { PDFFileFilter } from '../../../common/utils/file-upload.utils';
import { fileUploadConfig } from '../../../config';
import { CreateUploadDto } from '../dtos';
import { UpdateUploadDto } from '../dtos/update.dto';
import { Upload } from '../schema/upload.schema';
import { UploadService } from '../service/upload.service';

@ApiTags('Upload')
@Controller('uploads')
export class UploadController {
  constructor(private service: UploadService) {}

  @Get()
  @HttpCode(200)
  @UseGuards(JwtAuthGuard, ACLGuard)
  @ACLPolice({ roles: [], permissions: [] })
  @ApiOperation({ summary: 'Search all Upload' })
  @ApiOkResponse({ type: [CreateUploadDto], description: 'The found Upload' })
  async findAll(): Promise<Upload[]> {
    return await this.service.findAll();
  }

  @Post('search')
  @HttpCode(200)
  @UseGuards(JwtAuthGuard, ACLGuard)
  @ACLPolice({ roles: [], permissions: [] })
  @ApiOperation({ summary: 'Search Upload' })
  @ApiCreatedResponse({ type: UpdateUploadDto, description: 'Searched Upload' })
  @ApiBadRequestResponse({ type: ErrorResponse, description: 'Bad Request' })
  async search(@Body() data: CreateUploadDto): Promise<Upload[]> {
    return await this.service.search(data);
  }

  @Post()
  @HttpCode(201)
  @UseGuards(JwtAuthGuard, ACLGuard)
  @ACLPolice({ roles: [], permissions: [] })
  @ApiOperation({ summary: 'Create a new Upload' })
  @ApiCreatedResponse({ type: UpdateUploadDto, description: 'Created Upload' })
  @ApiBadRequestResponse({ type: ErrorResponse, description: 'Bad Request' })
  @UseInterceptors(FileInterceptor('file', fileUploadConfig(PDFFileFilter)))
  async create(
    @UploadedFile() file,
    @Body() body: CreateUploadDto,
    @Request() request?: any,
  ): Promise<Upload> {
    const { originalname: name, mimetype: mime, path, size } = file;
    const response = await this.service.create({
      name,
      mime,
      path,
      size,
      ...body,
    });

    await activityLog({
      module: 'upload',
      action: 'create',
      data: response,
      user: request?.user,
    });

    return response;
  }

  @Get(':id')
  @HttpCode(200)
  @UseGuards(JwtAuthGuard, ACLGuard)
  @ACLPolice({ roles: [], permissions: [] })
  @ApiOperation({ summary: 'Search a Upload by id' })
  @ApiOkResponse({ type: UpdateUploadDto, description: 'The found Upload' })
  @ApiNotFoundResponse({ type: ErrorResponse, description: 'Not Found' })
  async findById(@Param('id') id: string): Promise<Upload> {
    return await this.service.findById(id);
  }

  @Put(':id')
  @HttpCode(200)
  @UseGuards(JwtAuthGuard, ACLGuard)
  @ACLPolice({ roles: [], permissions: [] })
  @ApiOperation({ summary: 'Update a Upload' })
  @ApiOkResponse({ type: UpdateUploadDto, description: 'Updated Upload' })
  @ApiNotFoundResponse({ type: ErrorResponse, description: 'Not Found' })
  async update(
    @Param('id') id: string,
    @Body() data: UpdateUploadDto,
    @Request() request?: any,
  ): Promise<Upload> {
    const old = await this.service.findById(id);
    const response = await this.service.update(id, data);

    await activityLog({
      module: 'upload',
      action: 'update',
      data: response,
      old,
      user: request?.user,
    });

    return response;
  }

  @Delete(':id')
  @HttpCode(204)
  @UseGuards(JwtAuthGuard, ACLGuard)
  @ACLPolice({ roles: [], permissions: [] })
  @ApiOperation({ summary: 'Delete a Upload' })
  @ApiNoContentResponse({ description: 'Deleted Upload' })
  @ApiNotFoundResponse({ type: ErrorResponse, description: 'Not Found' })
  async delete(
    @Param('id') id: string,
    @Request() request?: any,
  ): Promise<void> {
    const data = await this.service.delete(id);

    await activityLog({
      module: 'upload',
      action: 'delete',
      data,
      user: request?.user,
    });
  }
}

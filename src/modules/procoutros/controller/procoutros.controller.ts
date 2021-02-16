// import {
//   Body,
//   Controller,
//   Delete,
//   Get,
//   HttpCode,
//   Param,
//   Post,
//   Put,
// } from '@nestjs/common';
// import {
//   ApiBadRequestResponse,
//   ApiCreatedResponse,
//   ApiNoContentResponse,
//   ApiNotFoundResponse,
//   ApiOkResponse,
//   ApiOperation,
//   ApiTags,
// } from '@nestjs/swagger';
// import { ErrorResponse } from '../../../common/responses';

// import { CreateprocoutrosDto } from '../dtos/create.dto';
// import { UpdateprocoutrosDto } from '../dtos/update.dto';
// import { procoutros } from '../entity/procoutros.entity';
// import { procoutrosService } from '../service/procoutros.service';

// @ApiTags('procoutros')
// @Controller('procoutross')
// export class procoutrosController {
//   constructor(private service: procoutrosService) {}

//   @Get()
//   @HttpCode(200)
//   @ApiOperation({ summary: 'Search all procoutros' })
//   @ApiOkResponse({ type: [CreateprocoutrosDto], description: 'The found procoutros' })
//   async findAll(): Promise<procoutros[]> {
//     return await this.service.findAll();
//   }

//   @Post('search')
//   @HttpCode(200)
//   @ApiOperation({ summary: 'Search procoutros' })
//   @ApiCreatedResponse({ type: UpdateprocoutrosDto, description: 'Searched procoutros' })
//   @ApiBadRequestResponse({ type: ErrorResponse, description: 'Bad Request', })
//   async search(@Body() data: CreateprocoutrosDto): Promise<procoutros[]> {
//     return await this.service.search(data);
//   }

//   @Post()
//   @HttpCode(201)
//   @ApiOperation({ summary: 'Create a new procoutros' })
//   @ApiCreatedResponse({ type: UpdateprocoutrosDto, description: 'Created procoutros' })
//   @ApiBadRequestResponse({ type: ErrorResponse, description: 'Bad Request', })
//   async create(@Body() data: CreateprocoutrosDto): Promise<procoutros> {
//     return await this.service.create(data);
//   }

//   @Get(':id')
//   @HttpCode(200)
//   @ApiOperation({ summary: 'Search a procoutros by id' })
//   @ApiOkResponse({ type: UpdateprocoutrosDto, description: 'The found procoutros' })
//   @ApiNotFoundResponse({ type: ErrorResponse, description: 'Not Found' })
//   async findById(@Param('id') id: string): Promise<procoutros> {
//     return await this.service.findById(id);
//   }

//   @Put(':id')
//   @HttpCode(200)
//   @ApiOperation({ summary: 'Update a procoutros' })
//   @ApiOkResponse({ type: UpdateprocoutrosDto, description: 'Updated procoutros' })
//   @ApiNotFoundResponse({ type: ErrorResponse, description: 'Not Found' })
//   async update(
//     @Param('id') id: string,
//     @Body() data: UpdateprocoutrosDto,
//   ): Promise<procoutros> {
//     return this.service.update(id, data);
//   }

//   @Delete(':id')
//   @HttpCode(204)
//   @ApiOperation({ summary: 'Delete a procoutros' })
//   @ApiNoContentResponse({ description: 'Deleted procoutros' })
//   @ApiNotFoundResponse({ type: ErrorResponse, description: 'Not Found' })
//   async delete(@Param('id') id: string): Promise<void> {
//     await this.service.delete(id);
//   }
// }

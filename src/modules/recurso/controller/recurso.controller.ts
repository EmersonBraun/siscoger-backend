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

// import { CreaterecursoDto } from '../dtos/create.dto';
// import { UpdaterecursoDto } from '../dtos/update.dto';
// import { recurso } from '../entity/recurso.entity';
// import { recursoService } from '../service/recurso.service';

// @ApiTags('recurso')
// @Controller('recursos')
// export class recursoController {
//   constructor(private service: recursoService) {}

//   @Get()
//   @HttpCode(200)
//   @ApiOperation({ summary: 'Search all recurso' })
//   @ApiOkResponse({ type: [CreaterecursoDto], description: 'The found recurso' })
//   async findAll(): Promise<recurso[]> {
//     return await this.service.findAll();
//   }

//   @Post('search')
//   @HttpCode(200)
//   @ApiOperation({ summary: 'Search recurso' })
//   @ApiCreatedResponse({ type: UpdaterecursoDto, description: 'Searched recurso' })
//   @ApiBadRequestResponse({ type: ErrorResponse, description: 'Bad Request', })
//   async search(@Body() data: CreaterecursoDto): Promise<recurso[]> {
//     return await this.service.search(data);
//   }

//   @Post()
//   @HttpCode(201)
//   @ApiOperation({ summary: 'Create a new recurso' })
//   @ApiCreatedResponse({ type: UpdaterecursoDto, description: 'Created recurso' })
//   @ApiBadRequestResponse({ type: ErrorResponse, description: 'Bad Request', })
//   async create(@Body() data: CreaterecursoDto): Promise<recurso> {
//     return await this.service.create(data);
//   }

//   @Get(':id')
//   @HttpCode(200)
//   @ApiOperation({ summary: 'Search a recurso by id' })
//   @ApiOkResponse({ type: UpdaterecursoDto, description: 'The found recurso' })
//   @ApiNotFoundResponse({ type: ErrorResponse, description: 'Not Found' })
//   async findById(@Param('id') id: string): Promise<recurso> {
//     return await this.service.findById(id);
//   }

//   @Put(':id')
//   @HttpCode(200)
//   @ApiOperation({ summary: 'Update a recurso' })
//   @ApiOkResponse({ type: UpdaterecursoDto, description: 'Updated recurso' })
//   @ApiNotFoundResponse({ type: ErrorResponse, description: 'Not Found' })
//   async update(
//     @Param('id') id: string,
//     @Body() data: UpdaterecursoDto,
//   ): Promise<recurso> {
//     return this.service.update(id, data);
//   }

//   @Delete(':id')
//   @HttpCode(204)
//   @ApiOperation({ summary: 'Delete a recurso' })
//   @ApiNoContentResponse({ description: 'Deleted recurso' })
//   @ApiNotFoundResponse({ type: ErrorResponse, description: 'Not Found' })
//   async delete(@Param('id') id: string): Promise<void> {
//     await this.service.delete(id);
//   }
// }

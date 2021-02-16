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

// import { CreateresultadoDto } from '../dtos/create.dto';
// import { UpdateresultadoDto } from '../dtos/update.dto';
// import { resultado } from '../entity/resultado.entity';
// import { resultadoService } from '../service/resultado.service';

// @ApiTags('resultado')
// @Controller('resultados')
// export class resultadoController {
//   constructor(private service: resultadoService) {}

//   @Get()
//   @HttpCode(200)
//   @ApiOperation({ summary: 'Search all resultado' })
//   @ApiOkResponse({ type: [CreateresultadoDto], description: 'The found resultado' })
//   async findAll(): Promise<resultado[]> {
//     return await this.service.findAll();
//   }

//   @Post('search')
//   @HttpCode(200)
//   @ApiOperation({ summary: 'Search resultado' })
//   @ApiCreatedResponse({ type: UpdateresultadoDto, description: 'Searched resultado' })
//   @ApiBadRequestResponse({ type: ErrorResponse, description: 'Bad Request', })
//   async search(@Body() data: CreateresultadoDto): Promise<resultado[]> {
//     return await this.service.search(data);
//   }

//   @Post()
//   @HttpCode(201)
//   @ApiOperation({ summary: 'Create a new resultado' })
//   @ApiCreatedResponse({ type: UpdateresultadoDto, description: 'Created resultado' })
//   @ApiBadRequestResponse({ type: ErrorResponse, description: 'Bad Request', })
//   async create(@Body() data: CreateresultadoDto): Promise<resultado> {
//     return await this.service.create(data);
//   }

//   @Get(':id')
//   @HttpCode(200)
//   @ApiOperation({ summary: 'Search a resultado by id' })
//   @ApiOkResponse({ type: UpdateresultadoDto, description: 'The found resultado' })
//   @ApiNotFoundResponse({ type: ErrorResponse, description: 'Not Found' })
//   async findById(@Param('id') id: string): Promise<resultado> {
//     return await this.service.findById(id);
//   }

//   @Put(':id')
//   @HttpCode(200)
//   @ApiOperation({ summary: 'Update a resultado' })
//   @ApiOkResponse({ type: UpdateresultadoDto, description: 'Updated resultado' })
//   @ApiNotFoundResponse({ type: ErrorResponse, description: 'Not Found' })
//   async update(
//     @Param('id') id: string,
//     @Body() data: UpdateresultadoDto,
//   ): Promise<resultado> {
//     return this.service.update(id, data);
//   }

//   @Delete(':id')
//   @HttpCode(204)
//   @ApiOperation({ summary: 'Delete a resultado' })
//   @ApiNoContentResponse({ description: 'Deleted resultado' })
//   @ApiNotFoundResponse({ type: ErrorResponse, description: 'Not Found' })
//   async delete(@Param('id') id: string): Promise<void> {
//     await this.service.delete(id);
//   }
// }

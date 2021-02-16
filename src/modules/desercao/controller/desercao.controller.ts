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

// import { CreatedesercaoDto } from '../dtos/create.dto';
// import { UpdatedesercaoDto } from '../dtos/update.dto';
// import { desercao } from '../entity/desercao.entity';
// import { desercaoService } from '../service/desercao.service';

// @ApiTags('desercao')
// @Controller('desercaos')
// export class desercaoController {
//   constructor(private service: desercaoService) {}

//   @Get()
//   @HttpCode(200)
//   @ApiOperation({ summary: 'Search all desercao' })
//   @ApiOkResponse({ type: [CreatedesercaoDto], description: 'The found desercao' })
//   async findAll(): Promise<desercao[]> {
//     return await this.service.findAll();
//   }

//   @Post('search')
//   @HttpCode(200)
//   @ApiOperation({ summary: 'Search desercao' })
//   @ApiCreatedResponse({ type: UpdatedesercaoDto, description: 'Searched desercao' })
//   @ApiBadRequestResponse({ type: ErrorResponse, description: 'Bad Request', })
//   async search(@Body() data: CreatedesercaoDto): Promise<desercao[]> {
//     return await this.service.search(data);
//   }

//   @Post()
//   @HttpCode(201)
//   @ApiOperation({ summary: 'Create a new desercao' })
//   @ApiCreatedResponse({ type: UpdatedesercaoDto, description: 'Created desercao' })
//   @ApiBadRequestResponse({ type: ErrorResponse, description: 'Bad Request', })
//   async create(@Body() data: CreatedesercaoDto): Promise<desercao> {
//     return await this.service.create(data);
//   }

//   @Get(':id')
//   @HttpCode(200)
//   @ApiOperation({ summary: 'Search a desercao by id' })
//   @ApiOkResponse({ type: UpdatedesercaoDto, description: 'The found desercao' })
//   @ApiNotFoundResponse({ type: ErrorResponse, description: 'Not Found' })
//   async findById(@Param('id') id: string): Promise<desercao> {
//     return await this.service.findById(id);
//   }

//   @Put(':id')
//   @HttpCode(200)
//   @ApiOperation({ summary: 'Update a desercao' })
//   @ApiOkResponse({ type: UpdatedesercaoDto, description: 'Updated desercao' })
//   @ApiNotFoundResponse({ type: ErrorResponse, description: 'Not Found' })
//   async update(
//     @Param('id') id: string,
//     @Body() data: UpdatedesercaoDto,
//   ): Promise<desercao> {
//     return this.service.update(id, data);
//   }

//   @Delete(':id')
//   @HttpCode(204)
//   @ApiOperation({ summary: 'Delete a desercao' })
//   @ApiNoContentResponse({ description: 'Deleted desercao' })
//   @ApiNotFoundResponse({ type: ErrorResponse, description: 'Not Found' })
//   async delete(@Param('id') id: string): Promise<void> {
//     await this.service.delete(id);
//   }
// }

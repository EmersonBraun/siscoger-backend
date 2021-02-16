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

// import { CreatepjDto } from '../dtos/create.dto';
// import { UpdatepjDto } from '../dtos/update.dto';
// import { pj } from '../entity/pj.entity';
// import { pjService } from '../service/pj.service';

// @ApiTags('pj')
// @Controller('pjs')
// export class pjController {
//   constructor(private service: pjService) {}

//   @Get()
//   @HttpCode(200)
//   @ApiOperation({ summary: 'Search all pj' })
//   @ApiOkResponse({ type: [CreatepjDto], description: 'The found pj' })
//   async findAll(): Promise<pj[]> {
//     return await this.service.findAll();
//   }

//   @Post('search')
//   @HttpCode(200)
//   @ApiOperation({ summary: 'Search pj' })
//   @ApiCreatedResponse({ type: UpdatepjDto, description: 'Searched pj' })
//   @ApiBadRequestResponse({ type: ErrorResponse, description: 'Bad Request', })
//   async search(@Body() data: CreatepjDto): Promise<pj[]> {
//     return await this.service.search(data);
//   }

//   @Post()
//   @HttpCode(201)
//   @ApiOperation({ summary: 'Create a new pj' })
//   @ApiCreatedResponse({ type: UpdatepjDto, description: 'Created pj' })
//   @ApiBadRequestResponse({ type: ErrorResponse, description: 'Bad Request', })
//   async create(@Body() data: CreatepjDto): Promise<pj> {
//     return await this.service.create(data);
//   }

//   @Get(':id')
//   @HttpCode(200)
//   @ApiOperation({ summary: 'Search a pj by id' })
//   @ApiOkResponse({ type: UpdatepjDto, description: 'The found pj' })
//   @ApiNotFoundResponse({ type: ErrorResponse, description: 'Not Found' })
//   async findById(@Param('id') id: string): Promise<pj> {
//     return await this.service.findById(id);
//   }

//   @Put(':id')
//   @HttpCode(200)
//   @ApiOperation({ summary: 'Update a pj' })
//   @ApiOkResponse({ type: UpdatepjDto, description: 'Updated pj' })
//   @ApiNotFoundResponse({ type: ErrorResponse, description: 'Not Found' })
//   async update(
//     @Param('id') id: string,
//     @Body() data: UpdatepjDto,
//   ): Promise<pj> {
//     return this.service.update(id, data);
//   }

//   @Delete(':id')
//   @HttpCode(204)
//   @ApiOperation({ summary: 'Delete a pj' })
//   @ApiNoContentResponse({ description: 'Deleted pj' })
//   @ApiNotFoundResponse({ type: ErrorResponse, description: 'Not Found' })
//   async delete(@Param('id') id: string): Promise<void> {
//     await this.service.delete(id);
//   }
// }

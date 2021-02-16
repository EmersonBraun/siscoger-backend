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

// import { CreatepadDto } from '../dtos/create.dto';
// import { UpdatepadDto } from '../dtos/update.dto';
// import { pad } from '../entity/pad.entity';
// import { padService } from '../service/pad.service';

// @ApiTags('pad')
// @Controller('pads')
// export class padController {
//   constructor(private service: padService) {}

//   @Get()
//   @HttpCode(200)
//   @ApiOperation({ summary: 'Search all pad' })
//   @ApiOkResponse({ type: [CreatepadDto], description: 'The found pad' })
//   async findAll(): Promise<pad[]> {
//     return await this.service.findAll();
//   }

//   @Post('search')
//   @HttpCode(200)
//   @ApiOperation({ summary: 'Search pad' })
//   @ApiCreatedResponse({ type: UpdatepadDto, description: 'Searched pad' })
//   @ApiBadRequestResponse({ type: ErrorResponse, description: 'Bad Request', })
//   async search(@Body() data: CreatepadDto): Promise<pad[]> {
//     return await this.service.search(data);
//   }

//   @Post()
//   @HttpCode(201)
//   @ApiOperation({ summary: 'Create a new pad' })
//   @ApiCreatedResponse({ type: UpdatepadDto, description: 'Created pad' })
//   @ApiBadRequestResponse({ type: ErrorResponse, description: 'Bad Request', })
//   async create(@Body() data: CreatepadDto): Promise<pad> {
//     return await this.service.create(data);
//   }

//   @Get(':id')
//   @HttpCode(200)
//   @ApiOperation({ summary: 'Search a pad by id' })
//   @ApiOkResponse({ type: UpdatepadDto, description: 'The found pad' })
//   @ApiNotFoundResponse({ type: ErrorResponse, description: 'Not Found' })
//   async findById(@Param('id') id: string): Promise<pad> {
//     return await this.service.findById(id);
//   }

//   @Put(':id')
//   @HttpCode(200)
//   @ApiOperation({ summary: 'Update a pad' })
//   @ApiOkResponse({ type: UpdatepadDto, description: 'Updated pad' })
//   @ApiNotFoundResponse({ type: ErrorResponse, description: 'Not Found' })
//   async update(
//     @Param('id') id: string,
//     @Body() data: UpdatepadDto,
//   ): Promise<pad> {
//     return this.service.update(id, data);
//   }

//   @Delete(':id')
//   @HttpCode(204)
//   @ApiOperation({ summary: 'Delete a pad' })
//   @ApiNoContentResponse({ description: 'Deleted pad' })
//   @ApiNotFoundResponse({ type: ErrorResponse, description: 'Not Found' })
//   async delete(@Param('id') id: string): Promise<void> {
//     await this.service.delete(id);
//   }
// }

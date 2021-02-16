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

// import { CreateexclusaojudicialDto } from '../dtos/create.dto';
// import { UpdateexclusaojudicialDto } from '../dtos/update.dto';
// import { exclusaojudicial } from '../entity/exclusaojudicial.entity';
// import { exclusaojudicialService } from '../service/exclusaojudicial.service';

// @ApiTags('exclusaojudicial')
// @Controller('exclusaojudicials')
// export class exclusaojudicialController {
//   constructor(private service: exclusaojudicialService) {}

//   @Get()
//   @HttpCode(200)
//   @ApiOperation({ summary: 'Search all exclusaojudicial' })
//   @ApiOkResponse({ type: [CreateexclusaojudicialDto], description: 'The found exclusaojudicial' })
//   async findAll(): Promise<exclusaojudicial[]> {
//     return await this.service.findAll();
//   }

//   @Post('search')
//   @HttpCode(200)
//   @ApiOperation({ summary: 'Search exclusaojudicial' })
//   @ApiCreatedResponse({ type: UpdateexclusaojudicialDto, description: 'Searched exclusaojudicial' })
//   @ApiBadRequestResponse({ type: ErrorResponse, description: 'Bad Request', })
//   async search(@Body() data: CreateexclusaojudicialDto): Promise<exclusaojudicial[]> {
//     return await this.service.search(data);
//   }

//   @Post()
//   @HttpCode(201)
//   @ApiOperation({ summary: 'Create a new exclusaojudicial' })
//   @ApiCreatedResponse({ type: UpdateexclusaojudicialDto, description: 'Created exclusaojudicial' })
//   @ApiBadRequestResponse({ type: ErrorResponse, description: 'Bad Request', })
//   async create(@Body() data: CreateexclusaojudicialDto): Promise<exclusaojudicial> {
//     return await this.service.create(data);
//   }

//   @Get(':id')
//   @HttpCode(200)
//   @ApiOperation({ summary: 'Search a exclusaojudicial by id' })
//   @ApiOkResponse({ type: UpdateexclusaojudicialDto, description: 'The found exclusaojudicial' })
//   @ApiNotFoundResponse({ type: ErrorResponse, description: 'Not Found' })
//   async findById(@Param('id') id: string): Promise<exclusaojudicial> {
//     return await this.service.findById(id);
//   }

//   @Put(':id')
//   @HttpCode(200)
//   @ApiOperation({ summary: 'Update a exclusaojudicial' })
//   @ApiOkResponse({ type: UpdateexclusaojudicialDto, description: 'Updated exclusaojudicial' })
//   @ApiNotFoundResponse({ type: ErrorResponse, description: 'Not Found' })
//   async update(
//     @Param('id') id: string,
//     @Body() data: UpdateexclusaojudicialDto,
//   ): Promise<exclusaojudicial> {
//     return this.service.update(id, data);
//   }

//   @Delete(':id')
//   @HttpCode(204)
//   @ApiOperation({ summary: 'Delete a exclusaojudicial' })
//   @ApiNoContentResponse({ description: 'Deleted exclusaojudicial' })
//   @ApiNotFoundResponse({ type: ErrorResponse, description: 'Not Found' })
//   async delete(@Param('id') id: string): Promise<void> {
//     await this.service.delete(id);
//   }
// }

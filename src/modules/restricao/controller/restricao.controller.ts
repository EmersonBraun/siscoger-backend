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

// import { CreaterestricaoDto } from '../dtos/create.dto';
// import { UpdaterestricaoDto } from '../dtos/update.dto';
// import { restricao } from '../entity/restricao.entity';
// import { restricaoService } from '../service/restricao.service';

// @ApiTags('restricao')
// @Controller('restricaos')
// export class restricaoController {
//   constructor(private service: restricaoService) {}

//   @Get()
//   @HttpCode(200)
//   @ApiOperation({ summary: 'Search all restricao' })
//   @ApiOkResponse({ type: [CreaterestricaoDto], description: 'The found restricao' })
//   async findAll(): Promise<restricao[]> {
//     return await this.service.findAll();
//   }

//   @Post('search')
//   @HttpCode(200)
//   @ApiOperation({ summary: 'Search restricao' })
//   @ApiCreatedResponse({ type: UpdaterestricaoDto, description: 'Searched restricao' })
//   @ApiBadRequestResponse({ type: ErrorResponse, description: 'Bad Request', })
//   async search(@Body() data: CreaterestricaoDto): Promise<restricao[]> {
//     return await this.service.search(data);
//   }

//   @Post()
//   @HttpCode(201)
//   @ApiOperation({ summary: 'Create a new restricao' })
//   @ApiCreatedResponse({ type: UpdaterestricaoDto, description: 'Created restricao' })
//   @ApiBadRequestResponse({ type: ErrorResponse, description: 'Bad Request', })
//   async create(@Body() data: CreaterestricaoDto): Promise<restricao> {
//     return await this.service.create(data);
//   }

//   @Get(':id')
//   @HttpCode(200)
//   @ApiOperation({ summary: 'Search a restricao by id' })
//   @ApiOkResponse({ type: UpdaterestricaoDto, description: 'The found restricao' })
//   @ApiNotFoundResponse({ type: ErrorResponse, description: 'Not Found' })
//   async findById(@Param('id') id: string): Promise<restricao> {
//     return await this.service.findById(id);
//   }

//   @Put(':id')
//   @HttpCode(200)
//   @ApiOperation({ summary: 'Update a restricao' })
//   @ApiOkResponse({ type: UpdaterestricaoDto, description: 'Updated restricao' })
//   @ApiNotFoundResponse({ type: ErrorResponse, description: 'Not Found' })
//   async update(
//     @Param('id') id: string,
//     @Body() data: UpdaterestricaoDto,
//   ): Promise<restricao> {
//     return this.service.update(id, data);
//   }

//   @Delete(':id')
//   @HttpCode(204)
//   @ApiOperation({ summary: 'Delete a restricao' })
//   @ApiNoContentResponse({ description: 'Deleted restricao' })
//   @ApiNotFoundResponse({ type: ErrorResponse, description: 'Not Found' })
//   async delete(@Param('id') id: string): Promise<void> {
//     await this.service.delete(id);
//   }
// }

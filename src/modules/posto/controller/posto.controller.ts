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

// import { CreatepostoDto } from '../dtos/create.dto';
// import { UpdatepostoDto } from '../dtos/update.dto';
// import { posto } from '../entity/posto.entity';
// import { postoService } from '../service/posto.service';

// @ApiTags('posto')
// @Controller('postos')
// export class postoController {
//   constructor(private service: postoService) {}

//   @Get()
//   @HttpCode(200)
//   @ApiOperation({ summary: 'Search all posto' })
//   @ApiOkResponse({ type: [CreatepostoDto], description: 'The found posto' })
//   async findAll(): Promise<posto[]> {
//     return await this.service.findAll();
//   }

//   @Post('search')
//   @HttpCode(200)
//   @ApiOperation({ summary: 'Search posto' })
//   @ApiCreatedResponse({ type: UpdatepostoDto, description: 'Searched posto' })
//   @ApiBadRequestResponse({ type: ErrorResponse, description: 'Bad Request', })
//   async search(@Body() data: CreatepostoDto): Promise<posto[]> {
//     return await this.service.search(data);
//   }

//   @Post()
//   @HttpCode(201)
//   @ApiOperation({ summary: 'Create a new posto' })
//   @ApiCreatedResponse({ type: UpdatepostoDto, description: 'Created posto' })
//   @ApiBadRequestResponse({ type: ErrorResponse, description: 'Bad Request', })
//   async create(@Body() data: CreatepostoDto): Promise<posto> {
//     return await this.service.create(data);
//   }

//   @Get(':id')
//   @HttpCode(200)
//   @ApiOperation({ summary: 'Search a posto by id' })
//   @ApiOkResponse({ type: UpdatepostoDto, description: 'The found posto' })
//   @ApiNotFoundResponse({ type: ErrorResponse, description: 'Not Found' })
//   async findById(@Param('id') id: string): Promise<posto> {
//     return await this.service.findById(id);
//   }

//   @Put(':id')
//   @HttpCode(200)
//   @ApiOperation({ summary: 'Update a posto' })
//   @ApiOkResponse({ type: UpdatepostoDto, description: 'Updated posto' })
//   @ApiNotFoundResponse({ type: ErrorResponse, description: 'Not Found' })
//   async update(
//     @Param('id') id: string,
//     @Body() data: UpdatepostoDto,
//   ): Promise<posto> {
//     return this.service.update(id, data);
//   }

//   @Delete(':id')
//   @HttpCode(204)
//   @ApiOperation({ summary: 'Delete a posto' })
//   @ApiNoContentResponse({ description: 'Deleted posto' })
//   @ApiNotFoundResponse({ type: ErrorResponse, description: 'Not Found' })
//   async delete(@Param('id') id: string): Promise<void> {
//     await this.service.delete(id);
//   }
// }

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

// import { CreatepresoDto } from '../dtos/create.dto';
// import { UpdatepresoDto } from '../dtos/update.dto';
// import { preso } from '../entity/preso.entity';
// import { presoService } from '../service/preso.service';

// @ApiTags('preso')
// @Controller('presos')
// export class presoController {
//   constructor(private service: presoService) {}

//   @Get()
//   @HttpCode(200)
//   @ApiOperation({ summary: 'Search all preso' })
//   @ApiOkResponse({ type: [CreatepresoDto], description: 'The found preso' })
//   async findAll(): Promise<preso[]> {
//     return await this.service.findAll();
//   }

//   @Post('search')
//   @HttpCode(200)
//   @ApiOperation({ summary: 'Search preso' })
//   @ApiCreatedResponse({ type: UpdatepresoDto, description: 'Searched preso' })
//   @ApiBadRequestResponse({ type: ErrorResponse, description: 'Bad Request', })
//   async search(@Body() data: CreatepresoDto): Promise<preso[]> {
//     return await this.service.search(data);
//   }

//   @Post()
//   @HttpCode(201)
//   @ApiOperation({ summary: 'Create a new preso' })
//   @ApiCreatedResponse({ type: UpdatepresoDto, description: 'Created preso' })
//   @ApiBadRequestResponse({ type: ErrorResponse, description: 'Bad Request', })
//   async create(@Body() data: CreatepresoDto): Promise<preso> {
//     return await this.service.create(data);
//   }

//   @Get(':id')
//   @HttpCode(200)
//   @ApiOperation({ summary: 'Search a preso by id' })
//   @ApiOkResponse({ type: UpdatepresoDto, description: 'The found preso' })
//   @ApiNotFoundResponse({ type: ErrorResponse, description: 'Not Found' })
//   async findById(@Param('id') id: string): Promise<preso> {
//     return await this.service.findById(id);
//   }

//   @Put(':id')
//   @HttpCode(200)
//   @ApiOperation({ summary: 'Update a preso' })
//   @ApiOkResponse({ type: UpdatepresoDto, description: 'Updated preso' })
//   @ApiNotFoundResponse({ type: ErrorResponse, description: 'Not Found' })
//   async update(
//     @Param('id') id: string,
//     @Body() data: UpdatepresoDto,
//   ): Promise<preso> {
//     return this.service.update(id, data);
//   }

//   @Delete(':id')
//   @HttpCode(204)
//   @ApiOperation({ summary: 'Delete a preso' })
//   @ApiNoContentResponse({ description: 'Deleted preso' })
//   @ApiNotFoundResponse({ type: ErrorResponse, description: 'Not Found' })
//   async delete(@Param('id') id: string): Promise<void> {
//     await this.service.delete(id);
//   }
// }

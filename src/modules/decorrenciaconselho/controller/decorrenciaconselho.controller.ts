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

// import { CreateDecorrenciaConselhoDto } from '../dtos/create.dto';
// import { UpdateDecorrenciaConselhoDto } from '../dtos/update.dto';
// import { DecorrenciaConselho } from '../entity/decorrenciaconselho.entity';
// import { DecorrenciaConselhoService } from '../service/decorrenciaconselho.service';

// @ApiTags('DecorrenciaConselho')
// @Controller('decorrenciaconselhos')
// export class DecorrenciaConselhoController {
//   constructor(private service: DecorrenciaConselhoService) {}

//   @Get()
//   @HttpCode(200)
//   @ApiOperation({ summary: 'Search all DecorrenciaConselho' })
//   @ApiOkResponse({ type: [CreateDecorrenciaConselhoDto], description: 'The found DecorrenciaConselho' })
//   async findAll(): Promise<DecorrenciaConselho[]> {
//     return await this.service.findAll();
//   }

//   @Post('search')
//   @HttpCode(200)
//   @ApiOperation({ summary: 'Search DecorrenciaConselho' })
//   @ApiCreatedResponse({ type: UpdateDecorrenciaConselhoDto, description: 'Searched DecorrenciaConselho' })
//   @ApiBadRequestResponse({ type: ErrorResponse, description: 'Bad Request', })
//   async search(@Body() data: CreateDecorrenciaConselhoDto): Promise<DecorrenciaConselho[]> {
//     return await this.service.search(data);
//   }

//   @Post()
//   @HttpCode(201)
//   @ApiOperation({ summary: 'Create a new DecorrenciaConselho' })
//   @ApiCreatedResponse({ type: UpdateDecorrenciaConselhoDto, description: 'Created DecorrenciaConselho' })
//   @ApiBadRequestResponse({ type: ErrorResponse, description: 'Bad Request', })
//   async create(@Body() data: CreateDecorrenciaConselhoDto): Promise<DecorrenciaConselho> {
//     return await this.service.create(data);
//   }

//   @Get(':id')
//   @HttpCode(200)
//   @ApiOperation({ summary: 'Search a DecorrenciaConselho by id' })
//   @ApiOkResponse({ type: UpdateDecorrenciaConselhoDto, description: 'The found DecorrenciaConselho' })
//   @ApiNotFoundResponse({ type: ErrorResponse, description: 'Not Found' })
//   async findById(@Param('id') id: string): Promise<DecorrenciaConselho> {
//     return await this.service.findById(id);
//   }

//   @Put(':id')
//   @HttpCode(200)
//   @ApiOperation({ summary: 'Update a DecorrenciaConselho' })
//   @ApiOkResponse({ type: UpdateDecorrenciaConselhoDto, description: 'Updated DecorrenciaConselho' })
//   @ApiNotFoundResponse({ type: ErrorResponse, description: 'Not Found' })
//   async update(
//     @Param('id') id: string,
//     @Body() data: UpdateDecorrenciaConselhoDto,
//   ): Promise<DecorrenciaConselho> {
//     return this.service.update(id, data);
//   }

//   @Delete(':id')
//   @HttpCode(204)
//   @ApiOperation({ summary: 'Delete a DecorrenciaConselho' })
//   @ApiNoContentResponse({ description: 'Deleted DecorrenciaConselho' })
//   @ApiNotFoundResponse({ type: ErrorResponse, description: 'Not Found' })
//   async delete(@Param('id') id: string): Promise<void> {
//     await this.service.delete(id);
//   }
// }

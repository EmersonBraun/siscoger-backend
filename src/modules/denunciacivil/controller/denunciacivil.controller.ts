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

// import { CreatedenunciacivilDto } from '../dtos/create.dto';
// import { UpdatedenunciacivilDto } from '../dtos/update.dto';
// import { denunciacivil } from '../entity/denunciacivil.entity';
// import { denunciacivilService } from '../service/denunciacivil.service';

// @ApiTags('denunciacivil')
// @Controller('denunciacivils')
// export class denunciacivilController {
//   constructor(private service: denunciacivilService) {}

//   @Get()
//   @HttpCode(200)
//   @ApiOperation({ summary: 'Search all denunciacivil' })
//   @ApiOkResponse({ type: [CreatedenunciacivilDto], description: 'The found denunciacivil' })
//   async findAll(): Promise<denunciacivil[]> {
//     return await this.service.findAll();
//   }

//   @Post('search')
//   @HttpCode(200)
//   @ApiOperation({ summary: 'Search denunciacivil' })
//   @ApiCreatedResponse({ type: UpdatedenunciacivilDto, description: 'Searched denunciacivil' })
//   @ApiBadRequestResponse({ type: ErrorResponse, description: 'Bad Request', })
//   async search(@Body() data: CreatedenunciacivilDto): Promise<denunciacivil[]> {
//     return await this.service.search(data);
//   }

//   @Post()
//   @HttpCode(201)
//   @ApiOperation({ summary: 'Create a new denunciacivil' })
//   @ApiCreatedResponse({ type: UpdatedenunciacivilDto, description: 'Created denunciacivil' })
//   @ApiBadRequestResponse({ type: ErrorResponse, description: 'Bad Request', })
//   async create(@Body() data: CreatedenunciacivilDto): Promise<denunciacivil> {
//     return await this.service.create(data);
//   }

//   @Get(':id')
//   @HttpCode(200)
//   @ApiOperation({ summary: 'Search a denunciacivil by id' })
//   @ApiOkResponse({ type: UpdatedenunciacivilDto, description: 'The found denunciacivil' })
//   @ApiNotFoundResponse({ type: ErrorResponse, description: 'Not Found' })
//   async findById(@Param('id') id: string): Promise<denunciacivil> {
//     return await this.service.findById(id);
//   }

//   @Put(':id')
//   @HttpCode(200)
//   @ApiOperation({ summary: 'Update a denunciacivil' })
//   @ApiOkResponse({ type: UpdatedenunciacivilDto, description: 'Updated denunciacivil' })
//   @ApiNotFoundResponse({ type: ErrorResponse, description: 'Not Found' })
//   async update(
//     @Param('id') id: string,
//     @Body() data: UpdatedenunciacivilDto,
//   ): Promise<denunciacivil> {
//     return this.service.update(id, data);
//   }

//   @Delete(':id')
//   @HttpCode(204)
//   @ApiOperation({ summary: 'Delete a denunciacivil' })
//   @ApiNoContentResponse({ description: 'Deleted denunciacivil' })
//   @ApiNotFoundResponse({ type: ErrorResponse, description: 'Not Found' })
//   async delete(@Param('id') id: string): Promise<void> {
//     await this.service.delete(id);
//   }
// }

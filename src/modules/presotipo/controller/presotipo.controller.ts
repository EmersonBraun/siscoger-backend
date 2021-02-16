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

// import { CreatepresotipoDto } from '../dtos/create.dto';
// import { UpdatepresotipoDto } from '../dtos/update.dto';
// import { presotipo } from '../entity/presotipo.entity';
// import { presotipoService } from '../service/presotipo.service';

// @ApiTags('presotipo')
// @Controller('presotipos')
// export class presotipoController {
//   constructor(private service: presotipoService) {}

//   @Get()
//   @HttpCode(200)
//   @ApiOperation({ summary: 'Search all presotipo' })
//   @ApiOkResponse({ type: [CreatepresotipoDto], description: 'The found presotipo' })
//   async findAll(): Promise<presotipo[]> {
//     return await this.service.findAll();
//   }

//   @Post('search')
//   @HttpCode(200)
//   @ApiOperation({ summary: 'Search presotipo' })
//   @ApiCreatedResponse({ type: UpdatepresotipoDto, description: 'Searched presotipo' })
//   @ApiBadRequestResponse({ type: ErrorResponse, description: 'Bad Request', })
//   async search(@Body() data: CreatepresotipoDto): Promise<presotipo[]> {
//     return await this.service.search(data);
//   }

//   @Post()
//   @HttpCode(201)
//   @ApiOperation({ summary: 'Create a new presotipo' })
//   @ApiCreatedResponse({ type: UpdatepresotipoDto, description: 'Created presotipo' })
//   @ApiBadRequestResponse({ type: ErrorResponse, description: 'Bad Request', })
//   async create(@Body() data: CreatepresotipoDto): Promise<presotipo> {
//     return await this.service.create(data);
//   }

//   @Get(':id')
//   @HttpCode(200)
//   @ApiOperation({ summary: 'Search a presotipo by id' })
//   @ApiOkResponse({ type: UpdatepresotipoDto, description: 'The found presotipo' })
//   @ApiNotFoundResponse({ type: ErrorResponse, description: 'Not Found' })
//   async findById(@Param('id') id: string): Promise<presotipo> {
//     return await this.service.findById(id);
//   }

//   @Put(':id')
//   @HttpCode(200)
//   @ApiOperation({ summary: 'Update a presotipo' })
//   @ApiOkResponse({ type: UpdatepresotipoDto, description: 'Updated presotipo' })
//   @ApiNotFoundResponse({ type: ErrorResponse, description: 'Not Found' })
//   async update(
//     @Param('id') id: string,
//     @Body() data: UpdatepresotipoDto,
//   ): Promise<presotipo> {
//     return this.service.update(id, data);
//   }

//   @Delete(':id')
//   @HttpCode(204)
//   @ApiOperation({ summary: 'Delete a presotipo' })
//   @ApiNoContentResponse({ description: 'Deleted presotipo' })
//   @ApiNotFoundResponse({ type: ErrorResponse, description: 'Not Found' })
//   async delete(@Param('id') id: string): Promise<void> {
//     await this.service.delete(id);
//   }
// }

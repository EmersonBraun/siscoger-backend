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

// import { Create{{moduleName | toCamelCase}}Dto } from '../dtos/create.dto';
// import { Update{{moduleName | toCamelCase}}Dto } from '../dtos/update.dto';
// import { {{moduleName | toCamelCase}} } from '../entity/{{moduleName | toLowerCase}}.entity';
// import { {{moduleName | toCamelCase}}Service } from '../service/{{moduleName | toLowerCase}}.service';

// @ApiTags('{{moduleName | toCamelCase}}')
// @Controller('{{moduleName | toLowerCase}}s')
// export class {{moduleName | toCamelCase}}Controller {
//   constructor(private service: {{moduleName | toCamelCase}}Service) {}

//   @Get()
//   @HttpCode(200)
//   @ApiOperation({ summary: 'Search all {{moduleName | toCamelCase}}' })
//   @ApiOkResponse({ type: [Create{{moduleName | toCamelCase}}Dto], description: 'The found {{moduleName | toCamelCase}}' })
//   async findAll(): Promise<{{moduleName | toCamelCase}}[]> {
//     return await this.service.findAll();
//   }

//   @Post('search')
//   @HttpCode(200)
//   @ApiOperation({ summary: 'Search {{moduleName | toCamelCase}}' })
//   @ApiCreatedResponse({ type: Update{{moduleName | toCamelCase}}Dto, description: 'Searched {{moduleName | toCamelCase}}' })
//   @ApiBadRequestResponse({ type: ErrorResponse, description: 'Bad Request', })
//   async search(@Body() data: Create{{moduleName | toCamelCase}}Dto): Promise<{{moduleName | toCamelCase}}[]> {
//     return await this.service.search(data);
//   }

//   @Post()
//   @HttpCode(201)
//   @ApiOperation({ summary: 'Create a new {{moduleName | toCamelCase}}' })
//   @ApiCreatedResponse({ type: Update{{moduleName | toCamelCase}}Dto, description: 'Created {{moduleName | toCamelCase}}' })
//   @ApiBadRequestResponse({ type: ErrorResponse, description: 'Bad Request', })
//   async create(@Body() data: Create{{moduleName | toCamelCase}}Dto): Promise<{{moduleName | toCamelCase}}> {
//     return await this.service.create(data);
//   }

//   @Get(':id')
//   @HttpCode(200)
//   @ApiOperation({ summary: 'Search a {{moduleName | toCamelCase}} by id' })
//   @ApiOkResponse({ type: Update{{moduleName | toCamelCase}}Dto, description: 'The found {{moduleName | toCamelCase}}' })
//   @ApiNotFoundResponse({ type: ErrorResponse, description: 'Not Found' })
//   async findById(@Param('id') id: string): Promise<{{moduleName | toCamelCase}}> {
//     return await this.service.findById(id);
//   }

//   @Put(':id')
//   @HttpCode(200)
//   @ApiOperation({ summary: 'Update a {{moduleName | toCamelCase}}' })
//   @ApiOkResponse({ type: Update{{moduleName | toCamelCase}}Dto, description: 'Updated {{moduleName | toCamelCase}}' })
//   @ApiNotFoundResponse({ type: ErrorResponse, description: 'Not Found' })
//   async update(
//     @Param('id') id: string,
//     @Body() data: Update{{moduleName | toCamelCase}}Dto,
//   ): Promise<{{moduleName | toCamelCase}}> {
//     return this.service.update(id, data);
//   }

//   @Delete(':id')
//   @HttpCode(204)
//   @ApiOperation({ summary: 'Delete a {{moduleName | toCamelCase}}' })
//   @ApiNoContentResponse({ description: 'Deleted {{moduleName | toCamelCase}}' })
//   @ApiNotFoundResponse({ type: ErrorResponse, description: 'Not Found' })
//   async delete(@Param('id') id: string): Promise<void> {
//     await this.service.delete(id);
//   }
// }
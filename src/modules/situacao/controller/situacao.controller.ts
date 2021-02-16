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

// import { CreatesituacaoDto } from '../dtos/create.dto';
// import { UpdatesituacaoDto } from '../dtos/update.dto';
// import { situacao } from '../entity/situacao.entity';
// import { situacaoService } from '../service/situacao.service';

// @ApiTags('situacao')
// @Controller('situacaos')
// export class situacaoController {
//   constructor(private service: situacaoService) {}

//   @Get()
//   @HttpCode(200)
//   @ApiOperation({ summary: 'Search all situacao' })
//   @ApiOkResponse({ type: [CreatesituacaoDto], description: 'The found situacao' })
//   async findAll(): Promise<situacao[]> {
//     return await this.service.findAll();
//   }

//   @Post('search')
//   @HttpCode(200)
//   @ApiOperation({ summary: 'Search situacao' })
//   @ApiCreatedResponse({ type: UpdatesituacaoDto, description: 'Searched situacao' })
//   @ApiBadRequestResponse({ type: ErrorResponse, description: 'Bad Request', })
//   async search(@Body() data: CreatesituacaoDto): Promise<situacao[]> {
//     return await this.service.search(data);
//   }

//   @Post()
//   @HttpCode(201)
//   @ApiOperation({ summary: 'Create a new situacao' })
//   @ApiCreatedResponse({ type: UpdatesituacaoDto, description: 'Created situacao' })
//   @ApiBadRequestResponse({ type: ErrorResponse, description: 'Bad Request', })
//   async create(@Body() data: CreatesituacaoDto): Promise<situacao> {
//     return await this.service.create(data);
//   }

//   @Get(':id')
//   @HttpCode(200)
//   @ApiOperation({ summary: 'Search a situacao by id' })
//   @ApiOkResponse({ type: UpdatesituacaoDto, description: 'The found situacao' })
//   @ApiNotFoundResponse({ type: ErrorResponse, description: 'Not Found' })
//   async findById(@Param('id') id: string): Promise<situacao> {
//     return await this.service.findById(id);
//   }

//   @Put(':id')
//   @HttpCode(200)
//   @ApiOperation({ summary: 'Update a situacao' })
//   @ApiOkResponse({ type: UpdatesituacaoDto, description: 'Updated situacao' })
//   @ApiNotFoundResponse({ type: ErrorResponse, description: 'Not Found' })
//   async update(
//     @Param('id') id: string,
//     @Body() data: UpdatesituacaoDto,
//   ): Promise<situacao> {
//     return this.service.update(id, data);
//   }

//   @Delete(':id')
//   @HttpCode(204)
//   @ApiOperation({ summary: 'Delete a situacao' })
//   @ApiNoContentResponse({ description: 'Deleted situacao' })
//   @ApiNotFoundResponse({ type: ErrorResponse, description: 'Not Found' })
//   async delete(@Param('id') id: string): Promise<void> {
//     await this.service.delete(id);
//   }
// }

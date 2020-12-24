import { ApiProperty } from '@nestjs/swagger';
import {
  IsOptional,
  IsString
} from 'class-validator';

export class SearchFeriadoDto {
  @IsString() @ApiProperty() init: string
  @IsOptional() @IsString() @ApiProperty() end?: string
}
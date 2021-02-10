import { ApiProperty } from '@nestjs/swagger';
import {
  IsOptional, IsString
} from 'class-validator';

export class UpdateLogDto {
  @IsString() @ApiProperty() module: string
  @IsString() @ApiProperty() action: string
  @IsOptional() @ApiProperty() user?: any
  @IsOptional() @ApiProperty() data: any
  @IsOptional() @ApiProperty() old?: any
}
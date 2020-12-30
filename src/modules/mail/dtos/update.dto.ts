import { ApiProperty } from '@nestjs/swagger';
import {
  IsOptional, IsString
} from 'class-validator';

export class UpdateMailDto {
  @IsOptional() @IsString() @ApiProperty() to: string
  @IsOptional() @IsString() @ApiProperty() from: string
  @IsOptional() @IsString() @ApiProperty() subject: string
  @IsOptional() @IsString() @ApiProperty() template: string
  @IsOptional() @ApiProperty() context: any[]
}
import { ApiProperty } from '@nestjs/swagger';
import {
  IsOptional,
  IsString
} from 'class-validator';

export class CreateUploadDto {
  @IsOptional()
  @IsString()
  @ApiProperty()
  name: string

  @IsString()
  @ApiProperty()
  campo: string

  @IsOptional()
  @IsString()
  @ApiProperty()
  mime: string

  @IsOptional()
  @IsString()
  @ApiProperty()
  path: string

  @IsOptional()
  @IsString()
  @ApiProperty()
  size: string

  @IsOptional()
  @IsString()
  @ApiProperty()
  rg: string

  @ApiProperty()
  id_proc: number

  @IsString()
  @ApiProperty()
  proc: string

  @IsOptional()
  @IsString()
  @ApiProperty()
  obs: string

  @IsOptional()
  @ApiProperty()
  is_old_file: boolean

  @IsOptional()
  @IsString()
  @ApiProperty()
  data_arquivo: string
}
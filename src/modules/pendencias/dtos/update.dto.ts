import { ApiProperty } from '@nestjs/swagger';
import {
  IsNumber,
  IsOptional, IsString
} from 'class-validator';

export class UpdatePendenciaDto {
  @IsOptional() @IsString() @ApiProperty() cdopm: string
  @IsOptional() @IsNumber() @ApiProperty() id_proc: number
  @IsOptional() @IsNumber() @ApiProperty() sjd_ref: number
  @IsOptional() @IsNumber() @ApiProperty() sjd_ref_ano: number
  @IsOptional() @IsString() @ApiProperty() proc: string
  @IsOptional() @ApiProperty() pendencias: string[]
  @IsOptional() @ApiProperty() state: any[]
}
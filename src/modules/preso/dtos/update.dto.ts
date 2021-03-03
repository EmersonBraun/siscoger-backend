import { ApiProperty } from '@nestjs/swagger';
import { IsDateString, IsNumber, IsOptional, IsString } from 'class-validator';

export class UpdatePresoDto {
  @IsOptional() @ApiProperty() @IsNumber() id?: number;
  @IsOptional() @ApiProperty() @IsString() rg: string;
  @IsOptional() @ApiProperty() @IsString() nome: string;
  @IsOptional() @ApiProperty() @IsString() cargo: string;
  @IsOptional() @ApiProperty() @IsString() cdopm_quandopreso: string;
  @IsOptional() @ApiProperty() @IsString() cdopm_prisao: string;
  @IsOptional() @ApiProperty() @IsString() localreclusao: string;
  @IsOptional() @ApiProperty() @IsString() local: string;
  @IsOptional() @ApiProperty() @IsString() processo: string;
  @IsOptional() @ApiProperty() @IsString() natureza: string;
  @IsOptional() @ApiProperty() @IsString() complemento: string;
  @IsOptional() @ApiProperty() @IsString() numeromandado: string;
  @IsOptional() @ApiProperty() @IsNumber() id_presotipo: number;
  @IsOptional() @ApiProperty() @IsString() origem_proc: string;
  @IsOptional() @ApiProperty() @IsNumber() origem_sjd_ref: number;
  @IsOptional() @ApiProperty() @IsNumber() origem_sjd_ref_ano: number;
  @IsOptional() @ApiProperty() @IsString() origem_opm: string;
  @IsOptional() @ApiProperty() @IsDateString() inicio_data?: Date;
  @IsOptional() @ApiProperty() @IsDateString() fim_data?: Date;
  @IsOptional() @ApiProperty() @IsString() vara: string;
  @IsOptional() @ApiProperty() @IsString() comarca: string;
  @IsOptional() @ApiProperty() @IsString() obs_txt: string; // text
}

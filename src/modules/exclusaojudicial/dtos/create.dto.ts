import { ApiProperty } from '@nestjs/swagger';
import { IsDateString, IsNumber, IsOptional, IsString } from 'class-validator';

export class CreateExclusaoJudicialDto {
  @IsOptional() @ApiProperty() id?: number;
  @IsOptional() @ApiProperty() @IsString() rg: string;
  @IsOptional() @ApiProperty() @IsString() cargo: string;
  @IsOptional() @ApiProperty() @IsString() nome: string;
  @IsOptional() @ApiProperty() @IsString() cdopm_quandoexcluido: string;
  @IsOptional() @ApiProperty() @IsString() origem_proc: string;
  @IsOptional() @ApiProperty() @IsNumber() origem_sjd_ref: number;
  @IsOptional() @ApiProperty() @IsNumber() origem_sjd_ref_ano: number;
  @IsOptional() @ApiProperty() @IsString() origem_opm: string;
  @IsOptional() @ApiProperty() @IsString() processo: string;
  @IsOptional() @ApiProperty() @IsString() complemento: string;
  @IsOptional() @ApiProperty() @IsString() vara: string;
  @IsOptional() @ApiProperty() @IsString() numerounico: string;
  @IsOptional() @ApiProperty() @IsDateString() data: Date;
  @IsOptional() @ApiProperty() @IsDateString() exclusao_data: Date;
  @IsOptional() @ApiProperty() @IsString() obs_txt: string; // text
  @IsOptional() @ApiProperty() @IsNumber() portaria_numero: number;
  @IsOptional() @ApiProperty() @IsNumber() bg_numero: number;
  @IsOptional() @ApiProperty() @IsNumber() bg_ano: number;
  @IsOptional() @ApiProperty() @IsNumber() prioridade: number;
}

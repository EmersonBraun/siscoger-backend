import { ApiProperty } from '@nestjs/swagger';
import {
  IsBoolean,
  IsDateString,
  IsNumber,
  IsOptional,
  IsString,
} from 'class-validator';

export class CreatePadDto {
  @IsOptional() @ApiProperty() @IsNumber() id?: number;
  @IsOptional() @ApiProperty() @IsNumber() id_andamento: number;
  @IsOptional() @ApiProperty() @IsNumber() id_andamentocoger: number;
  @IsOptional() @ApiProperty() @IsNumber() sjd_ref: number;
  @IsOptional() @ApiProperty() @IsNumber() sjd_ref_ano: number;
  @IsOptional() @ApiProperty() @IsString() doc_origem_txt: string; // text
  @IsOptional() @ApiProperty() @IsDateString() fato_data: Date;
  @IsOptional() @ApiProperty() @IsString() cdopm: string;
  @IsOptional() @ApiProperty() @IsString() sintese_txt: string; // text
  @IsOptional() @ApiProperty() @IsString() portaria_numero: string;
  @IsOptional() @ApiProperty() @IsDateString() portaria_data: Date;
  @IsOptional() @ApiProperty() @IsString() doc_tipo: string;
  @IsOptional() @ApiProperty() @IsString() doc_numero: string;
  @IsOptional() @ApiProperty() @IsDateString() abertura_data: Date;
  @IsOptional() @ApiProperty() @IsString() relatorio_file: string;
  @IsOptional() @ApiProperty() @IsString() solucao_file: string;
  @IsOptional() @ApiProperty() @IsNumber() prioridade: number;
  @IsOptional() @IsBoolean() @ApiProperty() completo?: boolean;
}

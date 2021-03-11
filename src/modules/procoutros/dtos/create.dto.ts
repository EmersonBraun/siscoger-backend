import { ApiProperty } from '@nestjs/swagger';
import {
  IsBoolean,
  IsDateString,
  IsNumber,
  IsOptional,
  IsString,
} from 'class-validator';

export class CreateProcOutrosDto {
  @IsOptional() @ApiProperty() @IsNumber() id?: number;
  @IsOptional() @ApiProperty() @IsNumber() sjd_ref: number;
  @IsOptional() @ApiProperty() @IsNumber() sjd_ref_ano: number;
  @IsOptional() @ApiProperty() @IsString() rg_cadastro: string;
  @IsOptional() @ApiProperty() @IsString() cdopm: string;
  @IsOptional() @ApiProperty() @IsString() opm_abreviatura: string;
  @IsOptional() @ApiProperty() @IsString() cdopm_apuracao: string;
  @IsOptional() @ApiProperty() @IsDateString() abertura_data: Date;
  @IsOptional() @ApiProperty() @IsDateString() data: Date;
  @IsOptional() @ApiProperty() @IsString() bou_ano: string;
  @IsOptional() @ApiProperty() @IsString() bou_numero: string;
  @IsOptional() @ApiProperty() @IsNumber() id_municipio: number;
  @IsOptional() @ApiProperty() @IsString() doc_origem: string;
  @IsOptional() @ApiProperty() @IsString() num_doc_origem: string;
  @IsOptional() @ApiProperty() @IsString() motivo_abertura: string;
  @IsOptional() @ApiProperty() @IsString() sintese_txt: string; // text
  @IsOptional() @ApiProperty() @IsString() relatorio1: string;
  @IsOptional() @ApiProperty() @IsString() relatorio1_file: string;
  @IsOptional() @ApiProperty() @IsDateString() relatorio1_data: Date;
  @IsOptional() @ApiProperty() @IsString() relatorio2: string;
  @IsOptional() @ApiProperty() @IsString() relatorio2_file: string;
  @IsOptional() @ApiProperty() @IsDateString() relatorio2_data: Date;
  @IsOptional() @ApiProperty() @IsString() relatorio3: string;
  @IsOptional() @ApiProperty() @IsString() relatorio3_file: string;
  @IsOptional() @ApiProperty() @IsDateString() relatorio3_data: Date;
  @IsOptional() @ApiProperty() @IsString() desc_outros: string;
  @IsOptional() @ApiProperty() @IsString() andamento: string;
  @IsOptional() @ApiProperty() @IsString() andamentocoger: string;
  @IsOptional() @ApiProperty() @IsString() vtr1_placa: string;
  @IsOptional() @ApiProperty() @IsString() vtr1_prefixo: string;
  @IsOptional() @ApiProperty() @IsString() vtr2_placa: string;
  @IsOptional() @ApiProperty() @IsString() vtr2_prefixo: string;
  @IsOptional() @ApiProperty() @IsString() digitador: string;
  @IsOptional() @ApiProperty() @IsString() num_pid: string;
  @IsOptional() @ApiProperty() @IsDateString() limite_data: Date;
  @IsOptional() @IsBoolean() @ApiProperty() completo?: boolean;
}

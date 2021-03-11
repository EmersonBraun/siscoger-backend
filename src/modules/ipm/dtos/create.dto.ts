import { ApiProperty } from '@nestjs/swagger';
import {
  IsBoolean,
  IsDateString,
  IsNumber,
  IsOptional,
  IsString,
} from 'class-validator';

export class CreateIpmDto {
  @IsOptional() @ApiProperty() @IsNumber() id_andamento: number;
  @IsOptional() @ApiProperty() @IsNumber() id_andamentocoger: number;
  @IsOptional() @ApiProperty() @IsNumber() id_municipio: number;
  @IsOptional() @ApiProperty() @IsNumber() id_situacao: number;
  @IsOptional() @ApiProperty() @IsString() cdopm: string;
  @IsOptional() @ApiProperty() @IsString() opm_sigla: string;
  @IsOptional() @ApiProperty() @IsNumber() opm_ref: number;
  @IsOptional() @ApiProperty() @IsNumber() opm_ref_ano: number;
  @IsOptional() @ApiProperty() @IsNumber() sjd_ref: number;
  @IsOptional() @ApiProperty() @IsNumber() sjd_ref_ano: number;
  @IsOptional() @ApiProperty() @IsDateString() abertura_data: Date;
  @IsOptional() @ApiProperty() @IsDateString() fato_data: Date;
  @IsOptional() @ApiProperty() @IsDateString() autuacao_data: Date;
  @IsOptional() @ApiProperty() @IsString() crime: string;
  @IsOptional() @ApiProperty() @IsString() tentado: string;
  @IsOptional() @ApiProperty() @IsString() crime_especificar: string;
  @IsOptional() @ApiProperty() @IsString() sintese_txt: string; // text
  @IsOptional() @ApiProperty() @IsString() relato_enc: string;
  @IsOptional() @ApiProperty() @IsDateString() relato_enc_data: Date;
  @IsOptional() @ApiProperty() @IsString() relato_cmtopm: string;
  @IsOptional() @ApiProperty() @IsDateString() relato_cmtopm_data: Date;
  @IsOptional() @ApiProperty() @IsString() relato_cmtgeral: string;
  @IsOptional() @ApiProperty() @IsDateString() relato_cmtgeral_data: Date;
  @IsOptional() @ApiProperty() @IsString() vajme_ref: string;
  @IsOptional() @ApiProperty() @IsString() justicacomum_ref: string;
  @IsOptional() @ApiProperty() @IsString() vitima: string;
  @IsOptional() @ApiProperty() @IsString() confronto_armado_bl: string;
  @IsOptional() @ApiProperty() @IsNumber() vitima_qtdd: number;
  @IsOptional() @ApiProperty() @IsString() julgamento: string;
  @IsOptional() @ApiProperty() @IsString() portaria_numero: string;
  @IsOptional() @ApiProperty() @IsString() exclusao_txt: string; // text
  @IsOptional() @ApiProperty() @IsString() relato_enc_file: string;
  @IsOptional() @ApiProperty() @IsString() relato_cmtopm_file: string;
  @IsOptional() @ApiProperty() @IsString() relato_cmtgeral_file: string;
  @IsOptional() @ApiProperty() @IsString() defensor_oab: string;
  @IsOptional() @ApiProperty() @IsString() defensor_nome: string;
  @IsOptional() @ApiProperty() @IsString() relcomplementar_file: string;
  @IsOptional() @ApiProperty() @IsDateString() relcomplementar_data: Date;
  @IsOptional() @ApiProperty() @IsString() opm_meta4: string;
  @IsOptional() @ApiProperty() @IsNumber() bou_ano: number;
  @IsOptional() @ApiProperty() @IsNumber() bou_numero: number;
  @IsOptional() @ApiProperty() @IsNumber() prioridade: number;
  @IsOptional() @IsBoolean() @ApiProperty() completo?: boolean;
}

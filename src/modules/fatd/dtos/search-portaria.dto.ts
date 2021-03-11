import { ApiProperty } from '@nestjs/swagger';
import {
  IsBoolean,
  IsDateString,
  IsNumber,
  IsOptional,
  IsString,
} from 'class-validator';

export class SearchPortariaDto {
  @IsOptional() @ApiProperty() @IsNumber() id?: number;
  @IsOptional() @ApiProperty() @IsNumber() id_andamento: number;
  @IsOptional() @ApiProperty() @IsNumber() id_andamentocoger: number;
  @IsOptional() @ApiProperty() @IsNumber() sjd_ref: number;
  @IsOptional() @ApiProperty() @IsNumber() sjd_ref_ano: number;
  @IsOptional() @ApiProperty() @IsDateString() fato_data: Date;
  @IsOptional() @ApiProperty() @IsDateString() abertura_data: Date;
  @IsOptional() @ApiProperty() @IsString() sintese_txt: string; // text
  @IsOptional() @ApiProperty() @IsString() cdopm: string;
  @IsOptional() @ApiProperty() @IsString() doc_tipo: string;
  @IsOptional() @ApiProperty() @IsString() doc_numero: string;
  @IsOptional() @ApiProperty() @IsString() doc_origem_txt: string; // text
  @IsOptional() @ApiProperty() @IsString() despacho_numero: string;
  @IsOptional() @ApiProperty() @IsDateString() portaria_data: Date;
  @IsOptional() @ApiProperty() @IsString() fato_file: string;
  @IsOptional() @ApiProperty() @IsString() relatorio_file: string;
  @IsOptional() @ApiProperty() @IsString() sol_cmt_file: string;
  @IsOptional() @ApiProperty() @IsString() sol_cg_file: string;
  @IsOptional() @ApiProperty() @IsString() rec_ato_file: string;
  @IsOptional() @ApiProperty() @IsString() rec_cmt_file: string;
  @IsOptional() @ApiProperty() @IsString() rec_crpm_file: string;
  @IsOptional() @ApiProperty() @IsString() rec_cg_file: string;
  @IsOptional() @ApiProperty() @IsString() opm_meta4: string;
  @IsOptional() @ApiProperty() @IsString() notapunicao_file: string;
  @IsOptional() @ApiProperty() @IsString() publicacaonp: string;
  @IsOptional() @ApiProperty() @IsNumber() prioridade: number;
  @IsOptional() @ApiProperty() @IsString() situacao_fatd: string;
  @IsOptional() @ApiProperty() @IsString() motivo_fatd: string;
  @IsOptional() @ApiProperty() @IsString() motivo_outros: string;
  @IsOptional() @IsBoolean() @ApiProperty() completo?: boolean;
}

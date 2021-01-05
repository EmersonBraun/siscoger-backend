import { ApiProperty } from '@nestjs/swagger';
import {
  IsBoolean,
  IsNotEmpty,
  IsNumber,
  IsOptional,
  IsPositive,
  IsString,
  MinLength,
} from 'class-validator';

export class UpdateSindicanciaDto {
  @IsOptional() @IsNumber() @ApiProperty() id_andamentocoger: number;

  @IsOptional() @IsNumber() @ApiProperty() id_andamento: number;

  @IsOptional() @IsNumber() @IsPositive() @ApiProperty() sjd_ref?: number;

  @IsOptional() @IsNumber() @IsPositive() @ApiProperty() sjd_ref_ano?: number;

  @IsOptional() @ApiProperty() fato_data?: string | Date;

  @IsOptional() @ApiProperty() abertura_data?: string | Date;

  @IsString() @IsNotEmpty() @MinLength(100) @ApiProperty() sintese_txt: string;

  @IsString() @IsNotEmpty() @ApiProperty() cdopm: string;

  @IsOptional() @IsString() @ApiProperty() doc_tipo?: string;

  @IsOptional() @IsString() @ApiProperty() doc_numero?: string;

  @IsOptional() @IsString() @ApiProperty() doc_origem_txt: string;

  @IsString() @IsNotEmpty() @ApiProperty() portaria_numero: string;

  @IsNotEmpty() @ApiProperty() portaria_data: string | Date;

  @IsOptional() @IsString() @ApiProperty() sol_cmt_file?: string;

  @IsOptional() @ApiProperty() sol_cmt_data?: string | Date;

  @IsOptional() @IsString() @ApiProperty() sol_cmtgeral_file?: string;

  @IsOptional() @ApiProperty() sol_cmtgeral_data?: string | Date;

  @IsOptional() @IsString() @ApiProperty() opm_meta4?: string;

  @IsOptional() @IsString() @ApiProperty() relatorio_file?: string;

  @IsOptional() @ApiProperty() relatorio_data?: string | Date;

  @IsOptional() @IsBoolean() @ApiProperty() prioridade?: boolean;

  @IsOptional() @IsString() @ApiProperty() motivo_cancelamento?: string;

  @IsOptional() @IsString() @ApiProperty() motivo_abertura?: string;

  @IsOptional() @IsString() @ApiProperty() motivo_outros?: string;

  @IsOptional() @IsBoolean() @ApiProperty() prorogacao?: boolean;

  @IsOptional() @IsNumber() @ApiProperty() prorogacao_dias?: number;

  @IsOptional() @IsBoolean() @ApiProperty() completo?: boolean;

  @IsOptional() @IsNumber() @ApiProperty() diasuteis_sobrestado?: number;

  @IsOptional() @IsString() @ApiProperty() motivo_sobrestado?: string | any;

  @IsOptional() @IsNumber() @ApiProperty() prazo_decorrido?: number;
}

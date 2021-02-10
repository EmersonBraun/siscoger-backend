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

export class UpdateCdDto {
  @IsOptional() @IsNumber() @ApiProperty() id_andamentocoger: number;

  @IsOptional() @IsNumber() @ApiProperty() id_andamento: number;

  @IsOptional() @IsNumber() @ApiProperty() id_motivoconselho: number;

  @IsOptional() @IsNumber() @ApiProperty() id_decorrenciaconselho: number;

  @IsOptional() @IsNumber() @ApiProperty() id_situacaoconselho: number;

  @IsOptional() @IsNumber() @IsPositive() @ApiProperty() sjd_ref?: number;

  @IsOptional() @IsNumber() @IsPositive() @ApiProperty() sjd_ref_ano?: number;

  @IsOptional() @IsString() @ApiProperty() motivo_outros: string;

  @IsOptional() @ApiProperty() fato_data?: string | Date;

  @IsOptional() @ApiProperty() abertura_data?: string | Date;

  @IsString() @IsNotEmpty() @MinLength(100) @ApiProperty() sintese_text: string;

  @IsOptional() @IsString() @ApiProperty() libelo_file: string;

  @IsString() @IsNotEmpty() @ApiProperty() cdopm: string;

  @IsOptional() @IsString() @ApiProperty() doc_tipo: string;

  @IsOptional() @IsString() @ApiProperty() doc_numero: string;

  @IsOptional() @IsString() @ApiProperty() portaria_numero: string;

  @IsOptional() @IsString() @ApiProperty() portaria_data: string | Date;

  @IsOptional() @IsString() @ApiProperty() portaria_file: string;

  @IsOptional() @IsString() @ApiProperty() parecer_file: string;

  @IsOptional() @IsString() @ApiProperty() decisao_file: string;

  @IsOptional() @IsString() @ApiProperty() doc_prorrogacao: string;

  @IsOptional() @IsString() @ApiProperty() prescricao_comissao: string;

  @IsOptional() @IsString() @ApiProperty() parecer_cmtgeral: string;

  @IsOptional() @IsString() @ApiProperty() exclusao_text: string;

  @IsOptional() @IsString() @ApiProperty() rec_ato_file: string;

  @IsOptional() @IsString() @ApiProperty() rec_gov_file: string;

  @IsOptional() @IsString() @ApiProperty() ac_desempenho_bl: string;

  @IsOptional() @IsString() @ApiProperty() ac_conduta_bl: string;

  @IsOptional() @IsString() @ApiProperty() ac_honra_bl: string;

  @IsOptional() @IsString() @ApiProperty() tjpr_file: string;

  @IsOptional() @IsString() @ApiProperty() sjd_file: string;

  @IsOptional() @IsBoolean() @ApiProperty() prioridade?: boolean;
}

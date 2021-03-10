import { ApiProperty } from '@nestjs/swagger';
import { IsBoolean, IsNumber, IsOptional, IsString } from 'class-validator';

export class CreateAdlDto {
  @IsOptional()
  @IsNumber()
  @ApiProperty()
  id_andamento: number;

  @IsOptional()
  @IsNumber()
  @ApiProperty()
  id_andamentocoger: number;

  @IsOptional()
  @IsNumber()
  @ApiProperty()
  id_motivoconselho: number;

  @IsOptional()
  @IsNumber()
  @ApiProperty()
  id_decorrenciaconselho: number;

  @IsOptional()
  @IsNumber()
  @ApiProperty()
  id_situacaoconselho: number;

  @IsOptional()
  @IsString()
  @ApiProperty()
  outromotivo: string;

  @IsOptional()
  @IsString()
  @ApiProperty()
  cdopm: string;

  @IsOptional()
  @ApiProperty()
  fato_data: Date;

  @IsOptional()
  @ApiProperty()
  abertura_data: Date;

  @IsOptional()
  @IsString()
  @ApiProperty()
  sintese_txt: string;

  @IsOptional()
  @IsString()
  @ApiProperty()
  libelo_file: string;

  @IsOptional()
  @IsString()
  @ApiProperty()
  doc_tipo: string;

  @IsOptional()
  @IsString()
  @ApiProperty()
  doc_numero: string;

  @IsOptional()
  @IsString()
  @ApiProperty()
  portaria_numero: string;

  @IsOptional()
  @ApiProperty()
  portaria_data: Date;

  @IsOptional()
  @IsString()
  @ApiProperty()
  parecer_file: string;

  @IsOptional()
  @IsString()
  @ApiProperty()
  decisao_file: string;

  @IsOptional()
  @IsString()
  @ApiProperty()
  doc_prorrogacao: string;

  @IsOptional()
  @IsNumber()
  @ApiProperty()
  sjd_ref: number;

  @IsOptional()
  @IsNumber()
  @ApiProperty()
  sjd_ref_ano: number;

  @IsOptional()
  @ApiProperty()
  prescricao_data: Date;

  @IsOptional()
  @IsString()
  @ApiProperty()
  parecer_comissao: string;

  @IsOptional()
  @IsString()
  @ApiProperty()
  parecer_cmtgeral: string;

  @IsOptional()
  @IsString()
  @ApiProperty()
  exclusao_txt: string;

  @IsOptional()
  @IsString()
  @ApiProperty()
  rec_ato_file: string;

  @IsOptional()
  @IsString()
  @ApiProperty()
  rec_gov_file: string;

  @IsOptional()
  @IsString()
  @ApiProperty()
  ac_desempenho_bl: string;

  @IsOptional()
  @IsString()
  @ApiProperty()
  ac_conduta_bl: string;

  @IsOptional()
  @IsString()
  @ApiProperty()
  ac_honra_bl: string;

  @IsOptional()
  @IsString()
  @ApiProperty()
  tjpr_file: string;

  @IsOptional()
  @IsString()
  @ApiProperty()
  stj_file: string;

  @IsOptional()
  @IsBoolean()
  @ApiProperty()
  completo?: boolean;

  @IsOptional()
  @IsBoolean()
  @ApiProperty()
  prioridade: boolean;
}

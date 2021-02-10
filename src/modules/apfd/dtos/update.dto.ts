import { ApiProperty } from '@nestjs/swagger';
import { IsNumber, IsOptional, IsString } from 'class-validator';

export class UpdateApfdDto {
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
  sjd_ref: number;

  @IsOptional()
  @IsNumber()
  @ApiProperty()
  sjd_ref_ano: number;

  @IsOptional()
  @IsString()
  @ApiProperty()
  tipo: string;

  @IsOptional()
  @IsString()
  @ApiProperty()
  cdopm: string;

  @IsOptional()
  @ApiProperty()
  fato_data: Date;

  @IsOptional()
  @IsString()
  @ApiProperty()
  sintese_txt: string;

  @IsOptional()
  @IsString()
  @ApiProperty()
  tipo_penal: string;

  @IsOptional()
  @IsString()
  @ApiProperty()
  tipo_penal_novo: string;

  @IsOptional()
  @IsString()
  @ApiProperty()
  especificar: string;

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
  exclusao_txt: string;

  @IsOptional()
  @IsString()
  @ApiProperty()
  opm_meta4: string;

  @IsOptional()
  @IsString()
  @ApiProperty()
  referenciavajme: string;

  @IsOptional()
  @IsNumber()
  @ApiProperty()
  prioridade: number;
}

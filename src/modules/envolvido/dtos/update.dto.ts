import { ApiProperty } from '@nestjs/swagger';
import { IsNumber, IsOptional, IsString } from 'class-validator';

export class UpdateEnvolvidoDto {
  @IsOptional()
  @IsString()
  @ApiProperty()
  rg_substituto?: string;

  @IsOptional()
  @IsString()
  @ApiProperty()
  nome?: string;

  @IsOptional()
  @IsString()
  @ApiProperty()
  rg?: string;

  @IsOptional()
  @IsString()
  @ApiProperty()
  situacao?: string;

  @IsOptional()
  @IsString()
  @ApiProperty()
  cargo?: string;

  @IsOptional()
  @IsString()
  @ApiProperty()
  resultado?: string;

  @IsOptional()
  @IsNumber()
  @ApiProperty()
  inclusao_ano?: number;

  @IsOptional()
  @IsString()
  @ApiProperty()
  ipm_julgamento?: string;

  @IsOptional()
  @IsString()
  @ApiProperty()
  ipm_processocrime?: string;

  @IsOptional()
  @IsNumber()
  @ApiProperty()
  ipm_pena_anos?: number;

  @IsOptional()
  @IsNumber()
  @ApiProperty()
  ipm_pena_meses?: number;

  @IsOptional()
  @IsNumber()
  @ApiProperty()
  ipm_pena_dias?: number;

  @IsOptional()
  @IsString()
  @ApiProperty()
  ipm_tipodapena?: string;

  @IsOptional()
  @IsString()
  @ApiProperty()
  ipm_transitojulgado_bl?: string;

  @IsOptional()
  @IsString()
  @ApiProperty()
  ipm_restritiva_bl?: string;

  @IsOptional()
  @IsString()
  @ApiProperty()
  obs_txt?: string;

  @IsOptional()
  @ApiProperty()
  exclusaoportaria_data: Date;

  @IsOptional()
  @IsString()
  @ApiProperty()
  exclusaoportaria_numero?: string;

  @IsOptional()
  @IsString()
  @ApiProperty()
  exclusaoboletim?: string;

  @IsOptional()
  @IsNumber()
  @ApiProperty()
  exclusaobg_numero?: number;

  @IsOptional()
  @IsNumber()
  @ApiProperty()
  exclusaobg_ano?: number;

  @IsOptional()
  @ApiProperty()
  exclusaobg_data?: Date;

  @IsOptional()
  @IsString()
  @ApiProperty()
  exclusaoopm?: string;

  @IsOptional()
  @IsNumber()
  @ApiProperty()
  id_ipm?: number;

  @IsOptional()
  @IsNumber()
  @ApiProperty()
  id_cj?: number;

  @IsOptional()
  @IsNumber()
  @ApiProperty()
  id_cd?: number;

  @IsOptional()
  @IsNumber()
  @ApiProperty()
  id_adl?: number;

  @IsOptional()
  @IsNumber()
  @ApiProperty()
  id_sindicancia?: number;

  @IsOptional()
  @IsNumber()
  @ApiProperty()
  id_fatd?: number;

  @IsOptional()
  @IsNumber()
  @ApiProperty()
  id_desercao?: number;

  @IsOptional()
  @IsNumber()
  @ApiProperty()
  id_apfd?: number;

  @IsOptional()
  @IsNumber()
  @ApiProperty()
  id_iso?: number;

  @IsOptional()
  @IsNumber()
  @ApiProperty()
  id_it?: number;

  @IsOptional()
  @IsNumber()
  @ApiProperty()
  id_pad?: number;

  @IsOptional()
  @IsNumber()
  @ApiProperty()
  id_sai?: number;

  @IsOptional()
  @IsNumber()
  @ApiProperty()
  id_punicao?: number;

  @IsOptional()
  @IsNumber()
  @ApiProperty()
  id_proc_outros?: number;
}

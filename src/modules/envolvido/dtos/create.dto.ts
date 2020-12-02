import { ApiProperty } from '@nestjs/swagger';
import {
  IsDate,
  IsNumber,
  IsOptional,
  IsPositive,
  IsString,
} from 'class-validator';

export class CreateEnvolvidoDto {
  @IsOptional()
  @IsString()
  @ApiProperty()
  rg_substituto?: string
  
  @IsOptional()
  @IsString()
  @ApiProperty()
  nome?: string
  
  @IsOptional()
  @IsString()
  @ApiProperty()
  rg?: string
  
  @IsOptional()
  @IsString()
  @ApiProperty()
  situacao?: string
  
  @IsOptional()
  @IsString()
  @ApiProperty()
  cargo?: string
  
  @IsOptional()
  @IsString()
  @ApiProperty()
  resultado?: string
  
  @IsOptional()
  @IsNumber()
  @IsPositive()
  @ApiProperty()
  inclusao_ano?: number
  
  @IsOptional()
  @IsString()
  @ApiProperty()
  ipm_julgamento?: string
  
  @IsOptional()
  @IsString()
  @ApiProperty()
  ipm_processocrime?: string
  
  @IsOptional()
  @IsNumber()
  @IsPositive()
  @ApiProperty()
  ipm_pena_anos?: number
  
  @IsOptional()
  @IsNumber()
  @IsPositive()
  @ApiProperty()
  ipm_pena_meses?: number
  
  @IsOptional()
  @IsNumber()
  @IsPositive()
  @ApiProperty()
  ipm_pena_dias?: number
  
  @IsOptional()
  @IsString()
  @ApiProperty()
  ipm_tipodapena?: string
  
  @IsOptional()
  @IsString()
  @ApiProperty()
  ipm_transitojulgado_bl?: string
  
  @IsOptional()
  @IsString()
  @ApiProperty()
  ipm_restritiva_bl?: string

  @IsOptional()
  @IsString()
  @ApiProperty()
  obs_txt?:string

  @IsOptional()
  @IsDate()
  @ApiProperty()
  exclusaoportaria_data: Date
  
  @IsOptional()
  @IsString()
  @ApiProperty()
  exclusaoportaria_numero?: string
  
  @IsOptional()
  @IsString()
  @ApiProperty()
  exclusaoboletim?: string

  
  @IsOptional()
  @IsNumber()
  @IsPositive()
  @ApiProperty()
  exclusaobg_numero?: number
  
  @IsOptional()
  @IsNumber()
  @IsPositive()
  @ApiProperty()
  exclusaobg_ano?: number

  @IsOptional()
  @IsDate()
  @ApiProperty()
  exclusaobg_data?: Date
  
  @IsOptional()
  @IsString()
  @ApiProperty()
  exclusaoopm?: string
  
  @IsOptional()
  @IsNumber()
  @IsPositive()
  @ApiProperty()
  id_ipm?: number
  
  @IsOptional()
  @IsNumber()
  @IsPositive()
  @ApiProperty()
  id_cj?: number
  
  @IsOptional()
  @IsNumber()
  @IsPositive()
  @ApiProperty()
  id_cd?: number
  
  @IsOptional()
  @IsNumber()
  @IsPositive()
  @ApiProperty()
  id_adl?: number
  
  @IsOptional()
  @IsNumber()
  @IsPositive()
  @ApiProperty()
  id_sindicancia?: number
  
  @IsOptional()
  @IsNumber()
  @IsPositive()
  @ApiProperty()
  id_fatd?: number
  
  @IsOptional()
  @IsNumber()
  @IsPositive()
  @ApiProperty()
  id_desercao?: number
  
  @IsOptional()
  @IsNumber()
  @IsPositive()
  @ApiProperty()
  id_apfd?: number
  
  @IsOptional()
  @IsNumber()
  @IsPositive()
  @ApiProperty()
  id_iso?: number
  
  @IsOptional()
  @IsNumber()
  @IsPositive()
  @ApiProperty()
  id_it?: number
  
  @IsOptional()
  @IsNumber()
  @IsPositive()
  @ApiProperty()
  id_pad?: number
  
  @IsOptional()
  @IsNumber()
  @IsPositive()
  @ApiProperty()
  id_sai?: number
  
  @IsOptional()
  @IsNumber()
  @IsPositive()
  @ApiProperty()
  id_punicao?: number
  
  @IsOptional()
  @IsNumber()
  @IsPositive()
  @ApiProperty()
  id_proc_outros?: number
}
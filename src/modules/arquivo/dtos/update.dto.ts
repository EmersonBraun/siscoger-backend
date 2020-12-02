import { ApiProperty } from '@nestjs/swagger';
import {
  IsNumber,
  IsOptional,
  IsPositive,
  IsString
} from 'class-validator';

export class UpdateArquivoDto {
  @IsOptional()
  @IsString()
  @ApiProperty()
  local_atual?: string
  
  @IsOptional()
  @IsString()
  @ApiProperty()
  obs?: string
  
  @IsOptional()
  @IsString()
  @ApiProperty()
  numero?: string
  
  @IsOptional()
  @IsString()
  @ApiProperty()
  letra?: string
  
  @IsOptional()
  @IsNumber()
  @IsPositive()
  @ApiProperty()
  id_ipm: number
  
  @IsOptional()
  @IsNumber()
  @IsPositive()
  @ApiProperty()
  id_cj: number
  
  @IsOptional()
  @IsNumber()
  @IsPositive()
  @ApiProperty()
  id_cd: number
  
  @IsOptional()
  @IsNumber()
  @IsPositive()
  @ApiProperty()
  id_adl: number
  
  @IsOptional()
  @IsNumber()
  @IsPositive()
  @ApiProperty()
  id_sindicancia: number
  
  @IsOptional()
  @IsNumber()
  @IsPositive()
  @ApiProperty()
  id_fatd: number
  
  @IsOptional()
  @IsNumber()
  @IsPositive()
  @ApiProperty()
  id_desercao: number
  
  @IsOptional()
  @IsNumber()
  @IsPositive()
  @ApiProperty()
  id_apfd: number
  
  @IsOptional()
  @IsNumber()
  @IsPositive()
  @ApiProperty()
  id_iso: number
  
  @IsOptional()
  @IsNumber()
  @IsPositive()
  @ApiProperty()
  id_it: number
  
  @IsOptional()
  @IsNumber()
  @IsPositive()
  @ApiProperty()
  id_sai: number
  
  @IsOptional()
  @IsNumber()
  @IsPositive()
  @ApiProperty()
  id_pad: number
  
  @IsOptional()
  @IsNumber()
  @IsPositive()
  @ApiProperty()
  id_proc_outros: number
  
  @IsOptional()
  @IsNumber()
  @IsPositive()
  @ApiProperty()
  id_punicao: number
  
  @IsOptional()
  @IsString()
  @ApiProperty()
  rg?: string
  
  @IsOptional()
  @IsString()
  @ApiProperty()
  nome?: string
  
  @IsOptional()
  @IsString()
  @ApiProperty()
  opm?: string
  
  @IsOptional()
  @IsString()
  @ApiProperty()
  arquivo_data?: string | Date
  
  @IsOptional()
  @ApiProperty()
  retorno_data?: string | Date
  
  @IsOptional()
  @ApiProperty()
  procedimento?: string
  
  @IsOptional()
  @IsString()
  @ApiProperty()
  sjd_ref?: string

  @IsOptional()
  @IsString()
  @ApiProperty()
  sjd_ref_ano?: string
}
import { ApiProperty } from '@nestjs/swagger';
import {
  IsNumber,
  IsOptional,

  IsString
} from 'class-validator';

export class SearchArquivoDto {
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
  @ApiProperty()
  id_ipm: number
  
  @IsOptional()
  @IsNumber()
  @ApiProperty()
  id_cj: number
  
  @IsOptional()
  @IsNumber()
  @ApiProperty()
  id_cd: number
  
  @IsOptional()
  @IsNumber()
  @ApiProperty()
  id_adl: number
  
  @IsOptional()
  @IsNumber()
  @ApiProperty()
  id_sindicancia: number
  
  @IsOptional()
  @IsNumber()
  @ApiProperty()
  id_fatd: number
  
  @IsOptional()
  @IsNumber()
  @ApiProperty()
  id_desercao: number
  
  @IsOptional()
  @IsNumber()
  @ApiProperty()
  id_apfd: number
  
  @IsOptional()
  @IsNumber()
  @ApiProperty()
  id_iso: number
  
  @IsOptional()
  @IsNumber()
  @ApiProperty()
  id_it: number
  
  @IsOptional()
  @IsNumber()
  @ApiProperty()
  id_sai: number
  
  @IsOptional()
  @IsNumber()
  @ApiProperty()
  id_pad: number
  
  @IsOptional()
  @IsNumber()
  @ApiProperty()
  id_proc_outros: number
  
  @IsOptional()
  @IsNumber()
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

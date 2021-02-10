import { ApiProperty } from '@nestjs/swagger';
import {
  IsNumber,
  IsOptional,

  IsString
} from 'class-validator';

export class CreateLigacaoDto {
  @IsOptional()
  @IsString()
  @ApiProperty()
  origem_opm?: string
  
  @IsOptional()
  @IsNumber()
  @ApiProperty()
  origem_sjd_ref?: number
  
  @IsOptional()
  @IsNumber()
  @ApiProperty()
  origem_sjd_ref_ano?: number

  @IsOptional()
  @IsString()
  @ApiProperty()
  origem_proc?: string
  
  @IsOptional()
  @IsNumber()
  @ApiProperty()
  destino_sjd_ref?: number
  
  @IsOptional()
  @IsNumber()
  @ApiProperty()
  destino_sjd_ref_ano?: number

  @IsOptional()
  @IsString()
  @ApiProperty()
  destino_proc?: string
  
  @IsOptional()
  @IsNumber()
  @ApiProperty()
  id_adl?: number
  
  @IsOptional()
  @IsNumber()
  @ApiProperty()
  id_apfd?: number
  
  @IsOptional()
  @IsNumber()
  @ApiProperty()
  id_cd?: number
  
  @IsOptional()
  @IsNumber()
  @ApiProperty()
  id_cj?: number
  
  @IsOptional()
  @IsNumber()
  @ApiProperty()
  id_desercao?: number
  
  @IsOptional()
  @IsNumber()
  @ApiProperty()
  id_fatd?: number
  
  @IsOptional()
  @IsNumber()
  @ApiProperty()
  id_ipm?: number
  
  @IsOptional()
  @IsNumber()
  @ApiProperty()
  id_iso?: number
  
  @IsOptional()
  @IsNumber()
  @ApiProperty()
  id_it?: number
  
  @IsOptional()
  @IsNumber()
  @ApiProperty()
  id_sindicancia?: number
  
  @IsOptional()
  @IsNumber()
  @ApiProperty()
  id_preso?: number
  
  @IsOptional()
  @IsNumber()
  @ApiProperty()
  id_falecimento?: number
  
  @IsOptional()
  @IsNumber()
  @ApiProperty()
  id_sai?: number
  
  @IsOptional()
  @IsNumber()
  @ApiProperty()
  id_proc_outros?: number
}
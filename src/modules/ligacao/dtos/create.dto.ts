import { ApiProperty } from '@nestjs/swagger';
import {
  IsNumber,
  IsOptional,
  IsPositive,
  IsString,
} from 'class-validator';

export class CreateLigacaoDto {
  @IsOptional()
  @IsString()
  @ApiProperty()
  origem_opm?: string
  
  @IsOptional()
  @IsNumber()
  @IsPositive()
  @ApiProperty()
  origem_sjd_ref?: number
  
  @IsOptional()
  @IsNumber()
  @IsPositive()
  @ApiProperty()
  origem_sjd_ref_ano?: number

  @IsOptional()
  @IsString()
  @ApiProperty()
  origem_proc?: string
  
  @IsOptional()
  @IsNumber()
  @IsPositive()
  @ApiProperty()
  destino_sjd_ref?: number
  
  @IsOptional()
  @IsNumber()
  @IsPositive()
  @ApiProperty()
  destino_sjd_ref_ano?: number

  @IsOptional()
  @IsString()
  @ApiProperty()
  destino_proc?: string
  
  @IsOptional()
  @IsNumber()
  @IsPositive()
  @ApiProperty()
  id_adl?: number
  
  @IsOptional()
  @IsNumber()
  @IsPositive()
  @ApiProperty()
  id_apfd?: number
  
  @IsOptional()
  @IsNumber()
  @IsPositive()
  @ApiProperty()
  id_cd?: number
  
  @IsOptional()
  @IsNumber()
  @IsPositive()
  @ApiProperty()
  id_cj?: number
  
  @IsOptional()
  @IsNumber()
  @IsPositive()
  @ApiProperty()
  id_desercao?: number
  
  @IsOptional()
  @IsNumber()
  @IsPositive()
  @ApiProperty()
  id_fatd?: number
  
  @IsOptional()
  @IsNumber()
  @IsPositive()
  @ApiProperty()
  id_ipm?: number
  
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
  id_sindicancia?: number
  
  @IsOptional()
  @IsNumber()
  @IsPositive()
  @ApiProperty()
  id_preso?: number
  
  @IsOptional()
  @IsNumber()
  @IsPositive()
  @ApiProperty()
  id_falecimento?: number
  
  @IsOptional()
  @IsNumber()
  @IsPositive()
  @ApiProperty()
  id_sai?: number
  
  @IsOptional()
  @IsNumber()
  @IsPositive()
  @ApiProperty()
  id_proc_outros?: number
}
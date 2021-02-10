import { ApiProperty } from '@nestjs/swagger';
import {
  IsNumber,
  IsOptional,

  IsString
} from 'class-validator';

export class UpdateMovimentoDto {
  @IsOptional()
  @ApiProperty()
  data?: string | Date

  @IsOptional()
  @IsString()
  @ApiProperty()
  descricao?: string
  
  @IsOptional()
  @IsString()
  @ApiProperty()
  opm?: string
  
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
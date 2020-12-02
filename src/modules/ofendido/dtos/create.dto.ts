import { ApiProperty } from '@nestjs/swagger';
import {
  IsNumber,
  IsOptional,
  IsPositive,
  IsString,
} from 'class-validator';

export class CreateOfendidoDto {
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
  resultado?: string
  
  @IsOptional()
  @IsString()
  @ApiProperty()
  sexo?: string

  @IsOptional()
  @IsString()
  @ApiProperty()
  idade?: string

  @IsOptional()
  @IsString()
  @ApiProperty()
  fone?: string

  @IsOptional()
  @IsString()
  @ApiProperty()
  email?: string

  
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
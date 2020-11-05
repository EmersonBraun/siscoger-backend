import { ApiProperty } from '@nestjs/swagger';
import {
  IsNumber,
  IsOptional,
  IsPositive,
  IsString,
} from 'class-validator';

export class UpdateSobrestamentoDto {
  @IsOptional()
  @IsString()
  @ApiProperty()
  rg?: string

  @IsOptional()
  @ApiProperty()
  inicio_data?: string| Date

  @IsOptional()
  @IsString()
  @ApiProperty()
  publicacao_inicio?: string

  @IsOptional()
  @ApiProperty()
  termino_data?: string| Date

  @IsOptional()
  @IsString()
  @ApiProperty()
  publicacao_termino?: string
  
  @IsOptional()
  @IsString()
  @ApiProperty()
  motivo?: string
  
  @IsOptional()
  @IsNumber()
  @IsPositive()
  @ApiProperty()
  id_adl?: number
  
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
  id_fatd?: number
  
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
}
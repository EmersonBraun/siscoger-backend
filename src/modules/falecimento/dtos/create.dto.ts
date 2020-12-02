import { ApiProperty } from '@nestjs/swagger';
import {
  IsDate,
  IsNumber,
  IsOptional,
  IsPositive,
  IsString,
} from 'class-validator';

export class CreateFalecimentoDto {
  @IsOptional()
  @IsString()
  @ApiProperty()
  rg?: string
  
  @IsOptional()
  @IsString()
  @ApiProperty()
  cargo?: string
  
  @IsOptional()
  @IsString()
  @ApiProperty()
  nome?: string

  @IsOptional()
  @IsDate()
  @ApiProperty()
  data?: Date
  
  @IsOptional()
  @IsNumber()
  @IsPositive()
  @ApiProperty()
  id_municipio?: number
  
  @IsOptional()
  @IsString()
  @ApiProperty()
  endereco?: string
  
  @IsOptional()
  @IsString()
  @ApiProperty()
  endereco_numero?: string
  
  @IsOptional()
  @IsString()
  @ApiProperty()
  cdopm?: string
  
  @IsOptional()
  @IsNumber()
  @IsPositive()
  @ApiProperty()
  bou_ano?: number
  
  @IsOptional()
  @IsString()
  @ApiProperty()
  bou_numero?: string
  
  @IsOptional()
  @IsNumber()
  @IsPositive()
  @ApiProperty()
  id_situacao?: number
  
  @IsOptional()
  @IsString()
  @ApiProperty()
  resultado?: string
  
  @IsOptional()
  @IsString()
  @ApiProperty()
  descricao_txt?: string
}
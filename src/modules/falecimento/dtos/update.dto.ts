import { ApiProperty } from '@nestjs/swagger';
import { IsNumber, IsOptional, IsString } from 'class-validator';

export class UpdateFalecimentoDto {
  @IsOptional()
  @IsString()
  @ApiProperty()
  rg?: string;

  @IsOptional()
  @IsString()
  @ApiProperty()
  cargo?: string;

  @IsOptional()
  @IsString()
  @ApiProperty()
  nome?: string;

  @IsOptional()
  @ApiProperty()
  data?: Date;

  @IsOptional()
  @IsNumber()
  @ApiProperty()
  id_municipio?: number;

  @IsOptional()
  @IsString()
  @ApiProperty()
  endereco?: string;

  @IsOptional()
  @IsString()
  @ApiProperty()
  endereco_numero?: string;

  @IsOptional()
  @IsString()
  @ApiProperty()
  cdopm?: string;

  @IsOptional()
  @IsNumber()
  @ApiProperty()
  bou_ano?: number;

  @IsOptional()
  @IsString()
  @ApiProperty()
  bou_numero?: string;

  @IsOptional()
  @IsNumber()
  @ApiProperty()
  id_situacao?: number;

  @IsOptional()
  @IsString()
  @ApiProperty()
  resultado?: string;

  @IsOptional()
  @IsString()
  @ApiProperty()
  descricao_txt?: string;
}

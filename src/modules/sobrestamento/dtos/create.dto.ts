import { ApiProperty } from '@nestjs/swagger';
import { IsNumber, IsOptional, IsString } from 'class-validator';

export class CreateSobrestamentoDto {
  @IsOptional()
  @IsString()
  @ApiProperty()
  rg?: string;

  @IsOptional()
  @ApiProperty()
  inicio_data?: string | Date;

  @IsOptional()
  @IsString()
  @ApiProperty()
  publicacao_inicio?: string;

  @IsOptional()
  @ApiProperty()
  termino_data?: string | Date;

  @IsOptional()
  @IsString()
  @ApiProperty()
  publicacao_termino?: string;

  @IsOptional()
  @IsString()
  @ApiProperty()
  motivo?: string;

  @IsOptional()
  @IsNumber()
  @ApiProperty()
  id_adl?: number;

  @IsOptional()
  @IsNumber()
  @ApiProperty()
  id_cd?: number;

  @IsOptional()
  @IsNumber()
  @ApiProperty()
  id_cj?: number;

  @IsOptional()
  @IsNumber()
  @ApiProperty()
  id_fatd?: number;

  @IsOptional()
  @IsNumber()
  @ApiProperty()
  id_iso?: number;

  @IsOptional()
  @IsNumber()
  @ApiProperty()
  id_it?: number;

  @IsOptional()
  @IsNumber()
  @ApiProperty()
  id_sindicancia?: number;

  @IsOptional()
  @IsString()
  @ApiProperty()
  doc_controle_inicio: string;

  @IsOptional()
  @IsString()
  @ApiProperty()
  doc_controle_termino?: string;
}

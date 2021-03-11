import { ApiProperty } from '@nestjs/swagger';
import {
  IsBoolean,
  IsDateString,
  IsNumber,
  IsOptional,
  IsString,
} from 'class-validator';

export class UpdateIsoDto {
  @IsOptional() @ApiProperty() @IsNumber() id?: number;
  @IsOptional() @ApiProperty() @IsNumber() id_andamento: number;
  @IsOptional() @ApiProperty() @IsNumber() id_andamentocoger: number;
  @IsOptional() @ApiProperty() @IsNumber() sjd_ref: number;
  @IsOptional() @ApiProperty() @IsNumber() sjd_ref_ano: number;
  @IsOptional() @ApiProperty() @IsString() cdopm: string;
  @IsOptional() @ApiProperty() @IsDateString() fato_data: Date;
  @IsOptional() @ApiProperty() @IsDateString() abertura_data: Date;
  @IsOptional() @ApiProperty() @IsString() sintese_txt: string;
  @IsOptional() @ApiProperty() @IsString() tipo_penal: string;
  @IsOptional() @ApiProperty() @IsString() doc_tipo: string;
  @IsOptional() @ApiProperty() @IsString() doc_numero: string;
  @IsOptional() @ApiProperty() @IsString() portaria_numero: string;
  @IsOptional() @ApiProperty() @IsDateString() portaria_data: Date;
  @IsOptional() @ApiProperty() @IsString() exclusao_txt: string;
  @IsOptional() @ApiProperty() @IsString() opm_meta4: string;
  @IsOptional() @ApiProperty() @IsString() relatoriomedico_file: string;
  @IsOptional() @ApiProperty() @IsDateString() relatoriomedico_data: Date;
  @IsOptional() @ApiProperty() @IsString() solucaoautoridade_file: string;
  @IsOptional() @ApiProperty() @IsDateString() solucaoautoridade_data: Date;
  @IsOptional() @ApiProperty() @IsNumber() prioridade: number;
  @IsOptional() @IsBoolean() @ApiProperty() completo?: boolean;
}

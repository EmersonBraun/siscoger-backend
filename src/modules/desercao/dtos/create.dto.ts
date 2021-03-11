import { ApiProperty } from '@nestjs/swagger';
import {
  IsBoolean,
  IsDateString,
  IsNumber,
  IsOptional,
  IsString,
} from 'class-validator';

export class CreateDesercaoDto {
  @IsOptional() @ApiProperty() id?: number;
  @IsOptional() @ApiProperty() @IsNumber() id_andamento: number;
  @IsOptional() @ApiProperty() @IsNumber() id_andamentocoger: number;
  @IsOptional() @ApiProperty() @IsNumber() sjd_ref: number;
  @IsOptional() @ApiProperty() @IsNumber() sjd_ref_ano: number;
  @IsOptional() @ApiProperty() @IsString() cdopm: string;
  @IsOptional() @ApiProperty() @IsDateString() fato_data: string | Date;
  @IsOptional() @ApiProperty() @IsString() doc_tipo: string;
  @IsOptional() @ApiProperty() @IsString() doc_numero: string;
  @IsOptional() @ApiProperty() @IsString() termo_exclusao: string;
  @IsOptional() @ApiProperty() @IsString() termo_exclusao_pub: string;
  @IsOptional() @ApiProperty() @IsString() termo_captura: string;
  @IsOptional() @ApiProperty() @IsString() termo_captura_pub: string;
  @IsOptional() @ApiProperty() @IsString() pericia: string;
  @IsOptional() @ApiProperty() @IsString() pericia_pub: string;
  @IsOptional() @ApiProperty() @IsString() termo_inclusao: string;
  @IsOptional() @ApiProperty() @IsString() termo_inclusao_pub: string;
  @IsOptional() @ApiProperty() @IsString() opm_meta4: string;
  @IsOptional() @ApiProperty() @IsString() referenciavajme: string;
  @IsOptional() @ApiProperty() @IsNumber() prioridade: number;
  @IsOptional() @IsBoolean() @ApiProperty() completo?: boolean;
}

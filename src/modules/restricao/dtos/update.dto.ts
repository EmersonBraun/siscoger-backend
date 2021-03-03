import { ApiProperty } from '@nestjs/swagger';
import { IsDateString, IsNumber, IsOptional, IsString } from 'class-validator';

export class UpdateRestricaoDto {
  @IsOptional() @ApiProperty() @IsNumber() id?: number;
  @IsOptional() @ApiProperty() @IsString() rg: string;
  @IsOptional() @ApiProperty() @IsString() cargo: string;
  @IsOptional() @ApiProperty() @IsString() nome: string;
  @IsOptional() @ApiProperty() @IsString() fardamento_bl: string;
  @IsOptional() @ApiProperty() @IsString() arma_bl: string;
  @IsOptional() @ApiProperty() @IsString() origem: string;
  @IsOptional() @ApiProperty() @IsDateString() cadastro_data: Date;
  @IsOptional() @ApiProperty() @IsDateString() inicio_data?: Date;
  @IsOptional() @ApiProperty() @IsDateString() fim_data: Date;
  @IsOptional() @ApiProperty() @IsDateString() retirada_data?: Date;
  @IsOptional() @ApiProperty() @IsString() proc: string;
  @IsOptional() @ApiProperty() @IsNumber() sjd_ref: number;
  @IsOptional() @ApiProperty() @IsNumber() sjd_ref_ano: number;
  @IsOptional() @ApiProperty() @IsString() obs_txt: string; // text
}

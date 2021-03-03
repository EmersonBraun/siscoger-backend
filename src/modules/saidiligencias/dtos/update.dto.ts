import { ApiProperty } from '@nestjs/swagger';
import { IsDateString, IsNumber, IsOptional, IsString } from 'class-validator';

export class UpdateSaiDiligenciasDto {
  @IsOptional() @ApiProperty() @IsNumber() id?: number;
  @IsOptional() @ApiProperty() @IsNumber() sai: number;
  @IsOptional() @ApiProperty() @IsString() rg_cadastro: string;
  @IsOptional() @ApiProperty() @IsDateString() data: Date;
  @IsOptional() @ApiProperty() @IsString() cdopm: string;
  @IsOptional() @ApiProperty() @IsString() opm_abreviatura: string;
  @IsOptional() @ApiProperty() @IsString() diligencias_txt: string; // text
  @IsOptional() @ApiProperty() @IsString() digitador: string;
}

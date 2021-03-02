import { ApiProperty } from '@nestjs/swagger';
import { IsNumber, IsOptional, IsString } from 'class-validator';

export class UpdateDenunciaCivilDto {
  @IsOptional() @ApiProperty() id?: number;
  @IsOptional() @ApiProperty() @IsString() rg: string;
  @IsOptional() @ApiProperty() @IsString() rg_cadastro: string;
  @IsOptional() @ApiProperty() @IsString() cargo: string;
  @IsOptional() @ApiProperty() @IsString() nome: string;
  @IsOptional() @ApiProperty() @IsString() processo: string;
  @IsOptional() @ApiProperty() @IsString() infracao: string;
  @IsOptional() @ApiProperty() @IsString() processocrime: string;
  @IsOptional() @ApiProperty() @IsString() julgamento: string;
  @IsOptional() @ApiProperty() @IsString() tipodapena: string;
  @IsOptional() @ApiProperty() @IsNumber() pena_anos?: number;
  @IsOptional() @ApiProperty() @IsNumber() pena_meses?: number;
  @IsOptional() @ApiProperty() @IsNumber() pena_dias?: number;
  @IsOptional() @ApiProperty() @IsString() transitojulgado_bl: string;
  @IsOptional() @ApiProperty() @IsString() restritiva_bl: string;
  @IsOptional() @ApiProperty() @IsString() obs_txt: string;
}

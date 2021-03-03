import { ApiProperty } from '@nestjs/swagger';
import { IsDateString, IsNumber, IsOptional, IsString } from 'class-validator';

export class CreateReintegradoDto {
  @IsOptional() @ApiProperty() @IsNumber() id?: number;
  @IsOptional() @ApiProperty() @IsString() rg: string;
  @IsOptional() @ApiProperty() @IsString() cargo: string;
  @IsOptional() @ApiProperty() @IsString() nome: string;
  @IsOptional() @ApiProperty() @IsString() motivo: string;
  @IsOptional() @ApiProperty() @IsString() procedimento: string;
  @IsOptional() @ApiProperty() @IsNumber() sjd_ref: number;
  @IsOptional() @ApiProperty() @IsNumber() sjd_ref_ano: number;
  @IsOptional() @ApiProperty() @IsDateString() retorno_data: Date;
  @IsOptional() @ApiProperty() @IsNumber() bg_numero: number;
  @IsOptional() @ApiProperty() @IsNumber() bg_ano: number;
}

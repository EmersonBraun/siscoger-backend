import { ApiProperty } from '@nestjs/swagger';
import { IsDateString, IsNumber, IsOptional, IsString } from 'class-validator';

export class UpdateRecursoDto {
  @IsOptional() @ApiProperty() @IsNumber() id?: number;
  @IsOptional() @ApiProperty() @IsString() cdopm: string;
  @IsOptional() @ApiProperty() @IsString() opm: string;
  @IsOptional() @ApiProperty() @IsString() rg: string;
  @IsOptional() @ApiProperty() @IsString() nome: string;
  @IsOptional() @ApiProperty() @IsString() procedimento: string;
  @IsOptional() @ApiProperty() @IsNumber() sjd_ref: number;
  @IsOptional() @ApiProperty() @IsNumber() sjd_ref_ano: number;
  @IsOptional() @ApiProperty() @IsDateString() datahora: Date; // datetime
  @IsOptional() @ApiProperty() @IsNumber() id_movimento: number;
}

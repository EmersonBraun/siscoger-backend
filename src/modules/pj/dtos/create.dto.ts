import { ApiProperty } from '@nestjs/swagger';
import { IsNumber, IsOptional, IsString } from 'class-validator';

export class CreatePjDto {
  @IsOptional() @ApiProperty() @IsNumber() id?: number;
  @IsOptional() @ApiProperty() @IsNumber() id_pad: number;
  @IsOptional() @ApiProperty() @IsString() cnpj: string;
  @IsOptional() @ApiProperty() @IsString() razaosocial: string;
  @IsOptional() @ApiProperty() @IsString() contato: string;
  @IsOptional() @ApiProperty() @IsString() telefone: string;
}

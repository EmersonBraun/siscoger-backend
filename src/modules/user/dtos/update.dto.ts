import { ApiProperty } from '@nestjs/swagger';
import {
  IsOptional,
  IsString
} from 'class-validator';

export class UpdateUserDto {
  @IsOptional() @IsString() @ApiProperty() name: string
  @IsOptional() @IsString() @ApiProperty() rg: string 
  @IsOptional() @IsString() @ApiProperty() cpf: string 
  @IsOptional() @IsString() @ApiProperty() class: string 
  @IsOptional() @IsString() @ApiProperty() position: string 
  @IsOptional() @IsString() @ApiProperty() group: string 
  @IsOptional() @IsString() @ApiProperty() subgroup: string 
  @IsOptional() @IsString() @ApiProperty() opm_code: string 
  @IsOptional() @IsString() @ApiProperty() cdopm: string 
  @IsOptional() @IsString() @ApiProperty() email: string 
  @IsOptional() @ApiProperty() block: boolean 
  @IsOptional() @ApiProperty() terms: boolean
  @IsOptional() @IsString() @ApiProperty() password: string
}
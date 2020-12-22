import { ApiProperty } from '@nestjs/swagger';
import {
  IsOptional,
  IsString
} from 'class-validator';

export class CreateFeriadoDto {
  @IsOptional()
  @ApiProperty()
  data?: Date | string
  
  @IsOptional()
  @IsString()
  @ApiProperty()
  feriado?: string
}
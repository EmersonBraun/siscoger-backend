import { ApiProperty } from '@nestjs/swagger';
import {
  IsDate,
  IsOptional,
  IsString,
} from 'class-validator';

export class UpdateFeriadoDto {
  @IsOptional()
  @IsDate()
  @ApiProperty()
  data?: Date
  
  @IsOptional()
  @IsString()
  @ApiProperty()
  feriado?: string
}
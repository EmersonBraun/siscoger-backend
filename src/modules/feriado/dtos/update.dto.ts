import { ApiProperty } from '@nestjs/swagger';
import {
  IsOptional,
  IsString
} from 'class-validator';

export class UpdateFeriadoDto {
  @IsOptional()
  @ApiProperty()
  data?: Date | string
  
  @IsOptional()
  @IsString()
  @ApiProperty()
  feriado?: string
}
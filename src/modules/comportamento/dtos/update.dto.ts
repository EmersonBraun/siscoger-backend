import { ApiProperty } from '@nestjs/swagger';
import {
  IsOptional,
  IsString,
} from 'class-validator';

export class UpdateComportamentoDto {
  @IsOptional()
  @IsString()
  @ApiProperty()
  comportamento?: string
}
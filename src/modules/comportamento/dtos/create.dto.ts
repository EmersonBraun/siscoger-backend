import { ApiProperty } from '@nestjs/swagger';
import {
  IsOptional,
  IsString,
} from 'class-validator';

export class CreateComportamentoDto {
  @IsOptional()
  @IsString()
  @ApiProperty()
  comportamento?: string
}
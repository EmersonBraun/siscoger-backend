import { ApiProperty } from '@nestjs/swagger';
import {
  IsOptional,
  IsString,
} from 'class-validator';

export class UpdateMotivoconselhoDto {
  @IsOptional()
  @IsString()
  @ApiProperty()
  motivoconselho?: string
}
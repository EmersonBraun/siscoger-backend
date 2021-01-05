import { ApiProperty } from '@nestjs/swagger';
import { IsOptional, IsString } from 'class-validator';

export class CreateMotivoconselhoDto {
  @IsOptional()
  @IsString()
  @ApiProperty()
  motivoconselho?: string;
}

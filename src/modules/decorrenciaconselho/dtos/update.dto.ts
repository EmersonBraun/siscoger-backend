import { ApiProperty } from '@nestjs/swagger';
import { IsString } from 'class-validator';

export class UpdateDecorrenciaConselhoDto {
  @ApiProperty() @IsString() decorrenciaconselho: string;
}

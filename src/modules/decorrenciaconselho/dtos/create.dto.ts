import { ApiProperty } from '@nestjs/swagger';
import { IsString } from 'class-validator';

export class CreateDecorrenciaConselhoDto {
  @ApiProperty() @IsString() decorrenciaconselho: string;
}

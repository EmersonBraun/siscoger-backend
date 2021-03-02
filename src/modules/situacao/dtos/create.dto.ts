import { ApiProperty } from '@nestjs/swagger';
import { IsString } from 'class-validator';

export class CreateSituacaoDto {
  @ApiProperty() @IsString() situacao: string;
  @ApiProperty() @IsString() situacao_abreviada: string;
}

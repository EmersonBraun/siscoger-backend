import { ApiProperty } from '@nestjs/swagger';
import { IsOptional, IsString } from 'class-validator';

export class CreateAndamentoDto {
  @IsOptional()
  @IsString()
  @ApiProperty()
  andamento?: string;

  @IsOptional()
  @IsString()
  @ApiProperty()
  procedimento?: string;
}

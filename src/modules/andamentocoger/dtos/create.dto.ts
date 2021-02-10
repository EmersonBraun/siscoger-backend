import { ApiProperty } from '@nestjs/swagger';
import { IsOptional, IsString } from 'class-validator';

export class CreateAndamentocogerDto {
  @IsOptional()
  @IsString()
  @ApiProperty()
  andamentocoger?: string;

  @IsOptional()
  @IsString()
  @ApiProperty()
  procedimento?: string;
}

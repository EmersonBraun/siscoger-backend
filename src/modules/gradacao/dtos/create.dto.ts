import { ApiProperty } from '@nestjs/swagger';
import { IsOptional, IsString } from 'class-validator';

export class CreateGradacaoDto {
  @IsOptional()
  @IsString()
  @ApiProperty()
  gradacao?: string;

  @IsOptional()
  @IsString()
  @ApiProperty()
  rel?: string;
}

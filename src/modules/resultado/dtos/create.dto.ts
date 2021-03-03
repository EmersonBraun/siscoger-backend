import { ApiProperty } from '@nestjs/swagger';
import { IsOptional, IsString } from 'class-validator';

export class CreateResultadoDto {
  @IsOptional() @ApiProperty() @IsString() resultado: string;
  @IsOptional() @ApiProperty() @IsString() procedimento: string;
}

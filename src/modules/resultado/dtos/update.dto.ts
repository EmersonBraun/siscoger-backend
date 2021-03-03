import { ApiProperty } from '@nestjs/swagger';
import { IsOptional, IsString } from 'class-validator';

export class UpdateResultadoDto {
  @IsOptional() @ApiProperty() @IsString() resultado: string;
  @IsOptional() @ApiProperty() @IsString() procedimento: string;
}

import { ApiProperty } from '@nestjs/swagger';
import { IsString } from 'class-validator';

export class UpdatePostoDto {
  @ApiProperty() @IsString() posto: string;
}

import { ApiProperty } from '@nestjs/swagger';
import { IsString } from 'class-validator';

export class CreatePostoDto {
  @ApiProperty() @IsString() posto: string;
}

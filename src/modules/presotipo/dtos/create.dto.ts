import { ApiProperty } from '@nestjs/swagger';
import { IsString } from 'class-validator';

export class CreatePresoTipoDto {
  @ApiProperty() @IsString() presotipo: string;
}

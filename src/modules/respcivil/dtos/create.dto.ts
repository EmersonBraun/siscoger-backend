import { ApiProperty } from '@nestjs/swagger';
import { IsString } from 'class-validator';

export class CreateRespCivilDto {
  @ApiProperty() @IsString() resp_civil: string;
}

import { ApiProperty } from '@nestjs/swagger';
import { IsString } from 'class-validator';

export class UpdateRespCivilDto {
  @ApiProperty() @IsString() resp_civil: string;
}

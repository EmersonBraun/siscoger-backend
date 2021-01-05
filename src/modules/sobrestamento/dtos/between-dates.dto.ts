import { ApiProperty } from '@nestjs/swagger';
import { IsObject, IsOptional, IsString } from 'class-validator';

export class BetweenDatesDto {
  @IsString() @ApiProperty() init: string;

  @IsOptional() @IsString() @ApiProperty() end?: string;

  @IsOptional() @IsObject() @ApiProperty() procData: { field: any; value: any };
}

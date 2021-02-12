import { ApiProperty } from '@nestjs/swagger';
import { IsOptional, IsString } from 'class-validator';

export class LoginDto {
  @IsOptional() @IsString() @ApiProperty() rg: string;

  @IsOptional() @IsString() @ApiProperty() email: string;

  @IsString() @ApiProperty() password: string;
}

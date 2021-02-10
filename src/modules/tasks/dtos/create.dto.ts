import { ApiProperty } from '@nestjs/swagger';
import { IsOptional, IsString } from 'class-validator';

export class CreateTasksDto {
  @IsOptional() @IsString() @ApiProperty() name: string;

  @IsOptional() @IsString() @ApiProperty() start: string;

  @IsOptional() @IsString() @ApiProperty() end: string;

  @IsOptional() @ApiProperty() taskErrors: any[];
}

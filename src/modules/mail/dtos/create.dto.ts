import { ApiProperty } from '@nestjs/swagger';
import { IsOptional, IsString } from 'class-validator';

export class CreateMailDto {
  @IsString() @ApiProperty() to: string;

  @IsOptional() @IsString() @ApiProperty() from: string;

  @IsString() @ApiProperty() subject: string;

  @IsOptional() @IsString() @ApiProperty() template: string;

  @IsOptional() @ApiProperty() context: any[];

  @IsOptional() @ApiProperty() processedOn: any;

  @IsOptional() @ApiProperty() finishedOn: any;

  @IsOptional() @ApiProperty() failedReason: any;
}

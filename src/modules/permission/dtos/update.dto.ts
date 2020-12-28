import { ApiProperty } from '@nestjs/swagger';
import {
  IsString
} from 'class-validator';

export class UpdatePermissionDto {
  @IsString() @ApiProperty() permission: string
}
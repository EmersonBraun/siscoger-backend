import { ApiProperty } from '@nestjs/swagger';
import {
  IsString
} from 'class-validator';

export class UpdateRoleDto {
  @IsString() @ApiProperty() role: string
}
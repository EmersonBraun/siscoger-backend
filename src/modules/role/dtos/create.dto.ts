import { ApiProperty } from '@nestjs/swagger';
import {
  IsOptional,
  IsString
} from 'class-validator';
import { Permission } from 'src/modules/permission/entity/permission.entity';
import { User } from 'src/modules/user/entity/user.entity';

export class CreateRoleDto {
  @IsString() @ApiProperty() role: string
  @IsOptional() @ApiProperty() permissions?: Permission[]
  @IsOptional() @ApiProperty() users?: User[]
}
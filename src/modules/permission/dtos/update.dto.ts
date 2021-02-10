import { ApiProperty } from '@nestjs/swagger';
import {
  IsOptional,
  IsString
} from 'class-validator';
import { Role } from 'src/modules/role/entity/role.entity';

export class UpdatePermissionDto {
  @IsString() @ApiProperty() permission: string
  @IsOptional() @ApiProperty() roles?: Role[]
}
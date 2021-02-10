import { ApiProperty } from '@nestjs/swagger';
import { IsOptional, IsString } from 'class-validator';
import { Role } from '../../role/entity/role.entity';

export class CreatePermissionDto {
  @IsString() @ApiProperty() permission: string;

  @IsOptional() @ApiProperty() roles?: Role[];
}

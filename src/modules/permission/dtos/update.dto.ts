import { ApiProperty } from '@nestjs/swagger';
import { IsOptional, IsString } from 'class-validator';
import { Role } from '../../role/entity/role.entity';

export class UpdatePermissionDto {
  @IsString() @ApiProperty() permission: string;
  @IsString() @ApiProperty() group?: string;
  @IsString() @ApiProperty() description?: string;
  @IsOptional() @ApiProperty() roles?: Role[];
}

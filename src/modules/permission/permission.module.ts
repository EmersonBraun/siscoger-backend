import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { PermissionController } from './controller/permission.controller';
import { Permission } from './entity/permission.entity';
import { PermissionService } from './service/permission.service';

@Module({
  imports: [TypeOrmModule.forFeature([Permission])],
  providers: [PermissionService],
  controllers: [PermissionController],
})
export class PermissionModule {}

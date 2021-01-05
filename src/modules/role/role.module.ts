import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { RoleController } from './controller/role.controller';
import { Role } from './entity/role.entity';
import { RoleService } from './service/role.service';

@Module({
  imports: [TypeOrmModule.forFeature([Role])],
  providers: [RoleService],
  controllers: [RoleController],
  exports: [RoleService],
})
export class RoleModule {}

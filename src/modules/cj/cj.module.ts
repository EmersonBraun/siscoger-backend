import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { CjController } from './controller/cj.controller';
import { Cj } from './entity/cj.entity';
import { CjService } from './service/cj.service';

@Module({
  imports: [TypeOrmModule.forFeature([Cj])],
  providers: [CjService],
  controllers: [CjController],
  exports: [CjService],
})
export class CjModule {}

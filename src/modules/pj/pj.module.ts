import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { PjController } from './controller/pj.controller';
import Pj from './entity/pj.entity';
import { PjService } from './service/pj.service';

@Module({
  imports: [TypeOrmModule.forFeature([Pj])],
  providers: [PjService],
  controllers: [PjController],
  exports: [PjService],
})
export class PjModule {}

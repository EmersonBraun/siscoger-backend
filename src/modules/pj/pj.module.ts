import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { postgresDatabaseProvider } from '../../common/providers/postgres.provider';
import { PjController } from './controller/pj.controller';
import Pj from './entity/pj.entity';
import { PjService } from './service/pj.service';

@Module({
  imports: [TypeOrmModule.forFeature([Pj])],
  providers: [PjService, ...postgresDatabaseProvider],
  controllers: [PjController],
  exports: [PjService],
})
export class PjModule {}

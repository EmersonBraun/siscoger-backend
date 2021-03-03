import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { postgresDatabaseProvider } from '../../common/providers/postgres.provider';
import { FatdController } from './controller/fatd.controller';
import Fatd from './entity/fatd.entity';
import { FatdService } from './service/fatd.service';

@Module({
  imports: [TypeOrmModule.forFeature([Fatd])],
  providers: [FatdService, ...postgresDatabaseProvider],
  controllers: [FatdController],
  exports: [FatdService],
})
export class FatdModule {}

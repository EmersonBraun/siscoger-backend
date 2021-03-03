import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { postgresDatabaseProvider } from '../../common/providers/postgres.provider copy';
import { SaiController } from './controller/sai.controller';
import Sai from './entity/sai.entity';
import { SaiService } from './service/sai.service';

@Module({
  imports: [TypeOrmModule.forFeature([Sai])],
  providers: [SaiService, ...postgresDatabaseProvider],
  controllers: [SaiController],
  exports: [SaiService],
})
export class SaiModule {}

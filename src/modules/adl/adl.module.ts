import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { postgresDatabaseProvider } from '../../common/providers/postgres.provider';
import { LogModule } from '../log/log.module';
import AdlController from './controller/adl.controller';
import Adl from './entity/adl.entity';
import { AdlService } from './service/adl.service';

@Module({
  imports: [TypeOrmModule.forFeature([Adl]), LogModule],
  providers: [AdlService, ...postgresDatabaseProvider],
  controllers: [AdlController],
  exports: [AdlService],
})
export class AdlModule {}

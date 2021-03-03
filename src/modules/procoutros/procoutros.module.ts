import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { postgresDatabaseProvider } from '../../common/providers/postgres.provider';
import { ProcOutrosController } from './controller/procoutros.controller';
import ProcOutros from './entity/procoutros.entity';
import { ProcOutrosService } from './service/procoutros.service';

@Module({
  imports: [TypeOrmModule.forFeature([ProcOutros])],
  providers: [ProcOutrosService, ...postgresDatabaseProvider],
  controllers: [ProcOutrosController],
  exports: [ProcOutrosService],
})
export class ProcOutrosModule {}

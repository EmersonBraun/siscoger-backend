import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { postgresDatabaseProvider } from '../../common/providers/postgres.provider';
import { RestricaoController } from './controller/restricao.controller';
import Restricao from './entity/restricao.entity';
import { RestricaoService } from './service/restricao.service';

@Module({
  imports: [TypeOrmModule.forFeature([Restricao])],
  providers: [RestricaoService, ...postgresDatabaseProvider],
  controllers: [RestricaoController],
  exports: [RestricaoService],
})
export class RestricaoModule {}

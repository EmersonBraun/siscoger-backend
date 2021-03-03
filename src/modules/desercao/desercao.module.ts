import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { postgresDatabaseProvider } from '../../common/providers/postgres.provider copy';
import { DesercaoController } from './controller/desercao.controller';
import Desercao from './entity/desercao.entity';
import { DesercaoService } from './service/desercao.service';

@Module({
  imports: [TypeOrmModule.forFeature([Desercao])],
  providers: [DesercaoService, ...postgresDatabaseProvider],
  controllers: [DesercaoController],
  exports: [DesercaoService],
})
export class DesercaoModule {}

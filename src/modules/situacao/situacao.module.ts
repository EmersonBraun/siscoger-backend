import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { SituacaoController } from './controller/situacao.controller';
import Situacao from './entity/situacao.entity';
import { SituacaoService } from './service/situacao.service';

@Module({
  imports: [TypeOrmModule.forFeature([Situacao])],
  providers: [SituacaoService],
  controllers: [SituacaoController],
  exports: [SituacaoService],
})
export class SituacaoModule {}

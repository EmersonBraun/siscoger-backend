
import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { LigacaoController } from './controller/ligacao.controller';
import { Ligacao } from './entity/ligacao.entity';
import { LigacaoService } from './service/ligacao.service';

@Module({
  imports: [TypeOrmModule.forFeature([Ligacao])],
  providers: [LigacaoService],
  controllers: [LigacaoController],
  exports: [LigacaoService]
})
export class LigacaoModule {}

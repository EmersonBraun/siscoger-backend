
import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { GradacaoController } from './controller/gradacao.controller';
import { Gradacao } from './entity/gradacao.entity';
import { GradacaoService } from './service/gradacao.service';

@Module({
  imports: [TypeOrmModule.forFeature([Gradacao])],
  providers: [GradacaoService],
  controllers: [GradacaoController],
  exports: [GradacaoService]
})
export class GradacaoModule {}

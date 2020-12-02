
import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ComportamentoController } from './controller/comportamento.controller';
import { Comportamento } from './entity/comportamento.entity';
import { ComportamentoService } from './service/comportamento.service';

@Module({
  imports: [TypeOrmModule.forFeature([Comportamento])],
  providers: [ComportamentoService],
  controllers: [ComportamentoController],
})
export class ComportamentoModule {}

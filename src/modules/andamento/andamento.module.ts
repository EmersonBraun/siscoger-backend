
import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AndamentoController } from './controller/andamento.controller';
import { Andamento } from './entity/andamento.entity';
import { AndamentoService } from './service/andamento.service';

@Module({
  imports: [TypeOrmModule.forFeature([Andamento])],
  providers: [AndamentoService],
  controllers: [AndamentoController],
})
export class AndamentoModule {}

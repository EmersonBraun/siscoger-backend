
import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { FeriadoModule } from '../feriado/feriado.module';
import { SobrestamentoController } from './controller/sobrestamento.controller';
import { Sobrestamento } from './entity/sobrestamento.entity';
import { SobrestamentoService } from './service/sobrestamento.service';

@Module({
  imports: [FeriadoModule, TypeOrmModule.forFeature([Sobrestamento])],
  providers: [SobrestamentoService],
  controllers: [SobrestamentoController],
  exports: [SobrestamentoService]
})
export class SobrestamentoModule {}


import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { SobrestamentoController } from './controller/sobrestamento.controller';
import { Sobrestamento } from './entity/sobrestamento.entity';
import { SobrestamentoService } from './service/sobrestamento.service';

@Module({
  imports: [TypeOrmModule.forFeature([Sobrestamento])],
  providers: [SobrestamentoService],
  controllers: [SobrestamentoController],
})
export class SobrestamentoModule {}

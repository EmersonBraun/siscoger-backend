
import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { FalecimentoController } from './controller/falecimento.controller';
import { Falecimento } from './entity/falecimento.entity';
import { FalecimentoService } from './service/falecimento.service';

@Module({
  imports: [TypeOrmModule.forFeature([Falecimento])],
  providers: [FalecimentoService],
  controllers: [FalecimentoController],
})
export class FalecimentoModule {}

import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { DecorrenciaConselhoController } from './controller/decorrenciaconselho.controller';
import { DecorrenciaConselho } from './entity/decorrenciaconselho.entity';
import { DecorrenciaConselhoService } from './service/decorrenciaconselho.service';

@Module({
  imports: [TypeOrmModule.forFeature([DecorrenciaConselho])],
  providers: [DecorrenciaConselhoService],
  controllers: [DecorrenciaConselhoController],
  exports: [DecorrenciaConselhoService],
})
export class DecorrenciaConselhoModule {}

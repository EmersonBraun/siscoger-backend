import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { FeriadoController } from './controller/feriado.controller';
import { Feriado } from './entity/feriado.entity';
import { FeriadoService } from './service/feriado.service';

@Module({
  imports: [TypeOrmModule.forFeature([Feriado])],
  providers: [FeriadoService],
  controllers: [FeriadoController],
  exports: [FeriadoService],
})
export class FeriadoModule {}

import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ResultadoController } from './controller/resultado.controller';
import Resultado from './entity/resultado.entity';
import { ResultadoService } from './service/resultado.service';

@Module({
  imports: [TypeOrmModule.forFeature([Resultado])],
  providers: [ResultadoService],
  controllers: [ResultadoController],
  exports: [ResultadoService],
})
export class ResultadoModule {}

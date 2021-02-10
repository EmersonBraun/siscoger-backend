import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { OfendidoController } from './controller/ofendido.controller';
import { Ofendido } from './entity/ofendido.entity';
import { OfendidoService } from './service/ofendido.service';

@Module({
  imports: [TypeOrmModule.forFeature([Ofendido])],
  providers: [OfendidoService],
  controllers: [OfendidoController],
  exports: [OfendidoService],
})
export class OfendidoModule {}


import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { SindicanciaController } from './controller/sindicancia.controller';
import { Sindicancia } from './entity/sindicancia.entity';
import { SindicanciaService } from './service/sindicancia.service';

@Module({
  imports: [TypeOrmModule.forFeature([Sindicancia])],
  providers: [SindicanciaService],
  controllers: [SindicanciaController],
  exports: [SindicanciaService]
})
export class SindicanciaModule {}

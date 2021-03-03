import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { postgresDatabaseProvider } from '../../common/providers/postgres.provider copy';
import { SindicanciaController } from './controller/sindicancia.controller';
import Sindicancia from './entity/sindicancia.entity';
import { SindicanciaService } from './service/sindicancia.service';

@Module({
  imports: [TypeOrmModule.forFeature([Sindicancia])],
  providers: [SindicanciaService, ...postgresDatabaseProvider],
  controllers: [SindicanciaController],
  exports: [SindicanciaService],
})
export class SindicanciaModule {}

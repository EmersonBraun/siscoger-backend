import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { postgresDatabaseProvider } from '../../common/providers/postgres.provider copy';
import { SaiDiligenciasController } from './controller/saidiligencias.controller';
import SaiDiligencias from './entity/saidiligencias.entity';
import { SaiDiligenciasService } from './service/saidiligencias.service';

@Module({
  imports: [TypeOrmModule.forFeature([SaiDiligencias])],
  providers: [SaiDiligenciasService, ...postgresDatabaseProvider],
  controllers: [SaiDiligenciasController],
  exports: [SaiDiligenciasService],
})
export class SaiDiligenciasModule {}

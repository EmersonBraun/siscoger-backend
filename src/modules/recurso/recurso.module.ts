import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { postgresDatabaseProvider } from '../../common/providers/postgres.provider copy';
import { RecursoController } from './controller/recurso.controller';
import Recurso from './entity/recurso.entity';
import { RecursoService } from './service/recurso.service';

@Module({
  imports: [TypeOrmModule.forFeature([Recurso])],
  providers: [RecursoService, ...postgresDatabaseProvider],
  controllers: [RecursoController],
  exports: [RecursoService],
})
export class RecursoModule {}

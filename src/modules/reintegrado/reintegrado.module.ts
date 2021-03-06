import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { postgresDatabaseProvider } from '../../common/providers/postgres.provider';
import { ReintegradoController } from './controller/reintegrado.controller';
import Reintegrado from './entity/reintegrado.entity';
import { ReintegradoService } from './service/reintegrado.service';

@Module({
  imports: [TypeOrmModule.forFeature([Reintegrado])],
  providers: [ReintegradoService, ...postgresDatabaseProvider],
  controllers: [ReintegradoController],
  exports: [ReintegradoService],
})
export class ReintegradoModule {}

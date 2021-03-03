import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { postgresDatabaseProvider } from '../../common/providers/postgres.provider';
import { PresoController } from './controller/preso.controller';
import Preso from './entity/preso.entity';
import { PresoService } from './service/preso.service';

@Module({
  imports: [TypeOrmModule.forFeature([Preso])],
  providers: [PresoService, ...postgresDatabaseProvider],
  controllers: [PresoController],
  exports: [PresoService],
})
export class PresoModule {}

import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { postgresDatabaseProvider } from '../../common/providers/postgres.provider copy';
import { IpmController } from './controller/ipm.controller';
import Ipm from './entity/ipm.entity';
import { IpmService } from './service/ipm.service';

@Module({
  imports: [TypeOrmModule.forFeature([Ipm])],
  providers: [IpmService, ...postgresDatabaseProvider],
  controllers: [IpmController],
  exports: [IpmService],
})
export class IpmModule {}

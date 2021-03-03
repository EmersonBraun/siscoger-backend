import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { postgresDatabaseProvider } from '../../common/providers/postgres.provider copy';
import { PadController } from './controller/pad.controller';
import Pad from './entity/pad.entity';
import { PadService } from './service/pad.service';

@Module({
  imports: [TypeOrmModule.forFeature([Pad])],
  providers: [PadService, ...postgresDatabaseProvider],
  controllers: [PadController],
  exports: [PadService],
})
export class PadModule {}

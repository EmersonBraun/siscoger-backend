import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { IsoController } from './controller/iso.controller';
import Iso from './entity/iso.entity';
import { IsoService } from './service/iso.service';

@Module({
  imports: [TypeOrmModule.forFeature([Iso])],
  providers: [IsoService],
  controllers: [IsoController],
  exports: [IsoService],
})
export class IsoModule {}

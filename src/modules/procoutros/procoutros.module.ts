import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ProcOutrosController } from './controller/procoutros.controller';
import ProcOutros from './entity/procoutros.entity';
import { ProcOutrosService } from './service/procoutros.service';

@Module({
  imports: [TypeOrmModule.forFeature([ProcOutros])],
  providers: [ProcOutrosService],
  controllers: [ProcOutrosController],
  exports: [ProcOutrosService],
})
export class ProcOutrosModule {}

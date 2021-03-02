import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ExclusaoJudicialController } from './controller/exclusaojudicial.controller';
import ExclusaoJudicial from './entity/exclusaojudicial.entity';
import { ExclusaoJudicialService } from './service/exclusaojudicial.service';

@Module({
  imports: [TypeOrmModule.forFeature([ExclusaoJudicial])],
  providers: [ExclusaoJudicialService],
  controllers: [ExclusaoJudicialController],
  exports: [ExclusaoJudicialService],
})
export class ExclusaoJudicialModule {}

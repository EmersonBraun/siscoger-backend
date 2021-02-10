
import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { LogModule } from '../log/log.module';
import { AdlController } from './controller/adl.controller';
import { Adl } from './entity/adl.entity';
import { AdlService } from './service/adl.service';

@Module({
  imports: [TypeOrmModule.forFeature([Adl]), LogModule],
  providers: [AdlService],
  controllers: [AdlController],
  exports: [AdlService]
})
export class AdlModule {}

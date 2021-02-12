import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { LogModule } from '../log/log.module';
import { ApfdController } from './controller/apfd.controller';
import { Apfd } from './entity/apfd.entity';
import { ApfdService } from './service/apfd.service';

@Module({
  imports: [TypeOrmModule.forFeature([Apfd]), LogModule],
  providers: [ApfdService],
  controllers: [ApfdController],
  exports: [ApfdService],
})
export class ApfdModule {}

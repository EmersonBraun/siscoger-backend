import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { IpmController } from './controller/ipm.controller';
import Ipm from './entity/ipm.entity';
import { IpmService } from './service/ipm.service';

@Module({
  imports: [TypeOrmModule.forFeature([Ipm])],
  providers: [IpmService],
  controllers: [IpmController],
  exports: [IpmService],
})
export class IpmModule {}

import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { CdController } from './controller/cd.controller';
import { Cd } from './entity/cd.entity';
import { CdService } from './service/cd.service';

@Module({
  imports: [TypeOrmModule.forFeature([Cd])],
  providers: [CdService],
  controllers: [CdController],
  exports: [CdService],
})
export class CdModule {}

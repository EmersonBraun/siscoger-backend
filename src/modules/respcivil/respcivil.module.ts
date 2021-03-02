import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { RespCivilController } from './controller/respcivil.controller';
import RespCivil from './entity/respcivil.entity';
import { RespCivilService } from './service/respcivil.service';

@Module({
  imports: [TypeOrmModule.forFeature([RespCivil])],
  providers: [RespCivilService],
  controllers: [RespCivilController],
  exports: [RespCivilService],
})
export class RespCivilModule {}

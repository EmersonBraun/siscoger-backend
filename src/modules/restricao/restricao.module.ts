import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { RestricaoController } from './controller/restricao.controller';
import Restricao from './entity/restricao.entity';
import { RestricaoService } from './service/restricao.service';

@Module({
  imports: [TypeOrmModule.forFeature([Restricao])],
  providers: [RestricaoService],
  controllers: [RestricaoController],
  exports: [RestricaoService],
})
export class RestricaoModule {}


import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AndamentocogerController } from './controller/andamentocoger.controller';
import { Andamentocoger } from './entity/andamentocoger.entity';
import { AndamentocogerService } from './service/andamentocoger.service';

@Module({
  imports: [TypeOrmModule.forFeature([Andamentocoger])],
  providers: [AndamentocogerService],
  controllers: [AndamentocogerController],
})
export class AndamentocogerModule {}

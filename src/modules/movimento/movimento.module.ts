import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { MovimentoController } from './controller/movimento.controller';
import { Movimento } from './entity/movimento.entity';
import { MovimentoService } from './service/movimento.service';

@Module({
  imports: [TypeOrmModule.forFeature([Movimento])],
  providers: [MovimentoService],
  controllers: [MovimentoController],
  exports: [MovimentoService],
})
export class MovimentoModule {}

import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { EnvolvidoController } from './controller/envolvido.controller';
import { Envolvido } from './entity/envolvido.entity';
import { EnvolvidoService } from './service/envolvido.service';

@Module({
  imports: [TypeOrmModule.forFeature([Envolvido])],
  providers: [EnvolvidoService],
  controllers: [EnvolvidoController],
  exports: [EnvolvidoService],
})
export class EnvolvidoModule {}


import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ArquivoController } from './controller/arquivo.controller';
import { Arquivo } from './entity/arquivo.entity';
import { ArquivoService } from './service/arquivo.service';

@Module({
  imports: [TypeOrmModule.forFeature([Arquivo])],
  providers: [ArquivoService],
  controllers: [ArquivoController],
  exports: [ArquivoService]
})
export class ArquivoModule {}

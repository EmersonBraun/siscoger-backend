
import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { MotivoconselhoController } from './controller/motivoconselho.controller';
import { Motivoconselho } from './entity/motivoconselho.entity';
import { MotivoconselhoService } from './service/motivoconselho.service';

@Module({
  imports: [TypeOrmModule.forFeature([Motivoconselho])],
  providers: [MotivoconselhoService],
  controllers: [MotivoconselhoController],
})
export class MotivoconselhoModule {}

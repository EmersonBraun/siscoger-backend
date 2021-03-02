import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { PostoController } from './controller/posto.controller';
import Posto from './entity/posto.entity';
import { PostoService } from './service/posto.service';

@Module({
  imports: [TypeOrmModule.forFeature([Posto])],
  providers: [PostoService],
  controllers: [PostoController],
  exports: [PostoService],
})
export class PostoModule {}

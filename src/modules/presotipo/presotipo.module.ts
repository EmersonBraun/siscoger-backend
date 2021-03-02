import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { PresoTipoController } from './controller/presotipo.controller';
import PresoTipo from './entity/presotipo.entity';
import { PresoTipoService } from './service/presotipo.service';

@Module({
  imports: [TypeOrmModule.forFeature([PresoTipo])],
  providers: [PresoTipoService],
  controllers: [PresoTipoController],
  exports: [PresoTipoService],
})
export class PresoTipoModule {}

import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { PendenciaController } from './controller/pendencia.controller';
import { Pendencia, PendenciaSchema } from './schema/pendencia.schema';
import { PendenciaService } from './service/pendencia.service';

@Module({
  imports: [
    MongooseModule.forFeature([
      { name: Pendencia.name, schema: PendenciaSchema },
    ]),
  ],
  providers: [PendenciaService],
  controllers: [PendenciaController],
  exports: [PendenciaService],
})
export class PendenciaModule {}

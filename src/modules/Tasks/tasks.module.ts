import { Module } from '@nestjs/common';
import { SindicanciaModule } from 'src/modules/sindicancia/sindicancia.module';
import { FeriadoModule } from '../feriado/feriado.module';
import { SobrestamentoModule } from '../sobrestamento/sobrestamento.module';
import { SindicanciaTasksService } from './sindicancia.tasks';

@Module({
  imports: [SindicanciaModule, FeriadoModule, SobrestamentoModule],
  providers: [SindicanciaTasksService],
})
export class TasksModule {}
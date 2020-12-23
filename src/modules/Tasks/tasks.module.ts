import { Module } from '@nestjs/common';
import { SindicanciaModule } from 'src/modules/sindicancia/sindicancia.module';
import { SindicanciaTasksService } from './sindicancia.tasks';

@Module({
  imports: [SindicanciaModule],
  providers: [SindicanciaTasksService],
})
export class TasksModule {}
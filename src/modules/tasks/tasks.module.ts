import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { SindicanciaModule } from '../sindicancia/sindicancia.module';
import { FeriadoModule } from '../feriado/feriado.module';
import { SobrestamentoModule } from '../sobrestamento/sobrestamento.module';
import { TasksController } from './controller/task.controller';
import { Tasks, TasksSchema } from './schema/task.schema';
import { TasksService } from './service/task.service';
import { SindicanciaTasksService } from './sindicancia.tasks';

@Module({
  imports: [
    MongooseModule.forFeature([{ name: Tasks.name, schema: TasksSchema }]),
    SindicanciaModule,
    FeriadoModule,
    SobrestamentoModule,
  ],
  controllers: [TasksController],
  providers: [SindicanciaTasksService, TasksService],
})
export class TasksModule {}

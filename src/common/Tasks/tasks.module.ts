import { Module } from '@nestjs/common';
import { UpdateDatabaseService } from './update-database.service';

@Module({
  providers: [UpdateDatabaseService],
})
export class TasksModule {}
import { Global, Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { LogController } from './controller/log.controller';
import { Log, LogSchema } from './schema/log.schema';
import { LogService } from './service/log.service';

@Global()
@Module({
  imports: [MongooseModule.forFeature([{ name: Log.name, schema: LogSchema }])],
  providers: [LogService],
  controllers: [LogController],
  exports: [LogService],
})
export class LogModule {}

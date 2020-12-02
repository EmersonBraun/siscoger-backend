import { Module } from '@nestjs/common';
import { PrettyLogger } from './pretty-log';

@Module({
  providers: [PrettyLogger],
  exports: [PrettyLogger],
})
export class LoggerModule {}
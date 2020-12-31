import { MailerModule } from '@nestjs-modules/mailer';
import { BullModule } from '@nestjs/bull';
import { CacheModule, MiddlewareConsumer, Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { MongooseModule } from '@nestjs/mongoose';
import { ScheduleModule } from '@nestjs/schedule';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Connection } from 'typeorm';
import { bullConfig, mailerConfig, mainConfig, typeOrmOptions } from '../src/config';
import { AppLoggerMiddleware } from './common/logger/middleware';
import { registerModules } from './register-modules';

@Module({
  imports: [
    BullModule.forRoot(bullConfig),
    ConfigModule.forRoot(mainConfig),
    CacheModule.register(),
    ScheduleModule.forRoot(),
    TypeOrmModule.forRoot(typeOrmOptions),
    MongooseModule.forRoot(process.env.MONGO_CONNECTION),
    MailerModule.forRoot(mailerConfig),
    ...registerModules,
  ],
})
export class AppModule {
  constructor(private connection: Connection) {}
  configure(consumer: MiddlewareConsumer): void {
    consumer.apply(AppLoggerMiddleware).forRoutes('*');
  }
}


import { MailerModule } from '@nestjs-modules/mailer';
import { BullModule } from '@nestjs/bull';
import { CacheModule, MiddlewareConsumer, Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { MongooseModule } from '@nestjs/mongoose';
import { ScheduleModule } from '@nestjs/schedule';
import { TypeOrmModule } from '@nestjs/typeorm';
import AppLoggerMiddleware from './common/logger/middleware';
import { bullConfig, mailerConfig, mainConfig, typeOrmOptions } from './config';
import { mongoConfig } from './config/mongo';
import { registerModules } from './register-modules';

@Module({
  imports: [
    BullModule.forRoot(bullConfig),
    ConfigModule.forRoot(mainConfig),
    CacheModule.register(),
    ScheduleModule.forRoot(),
    TypeOrmModule.forRoot(typeOrmOptions),
    MongooseModule.forRootAsync(mongoConfig),
    MailerModule.forRoot(mailerConfig),
    ...registerModules,
  ],
})
export class AppModule {
  configure(consumer: MiddlewareConsumer): void {
    consumer.apply(AppLoggerMiddleware).forRoutes('*');
  }
}

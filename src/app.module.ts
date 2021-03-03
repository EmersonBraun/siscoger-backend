import { MailerModule } from '@nestjs-modules/mailer';
import { BullModule } from '@nestjs/bull';
import { CacheModule, MiddlewareConsumer, Module } from '@nestjs/common';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { MongooseModule } from '@nestjs/mongoose';
import { ScheduleModule } from '@nestjs/schedule';
import { TypeOrmModule } from '@nestjs/typeorm';
import AppLoggerMiddleware from './common/logger/middleware';
import { bullConfig, mailerConfig, mainConfig, typeOrmOptions } from './config';
import { registerModules } from './register-modules';

@Module({
  imports: [
    BullModule.forRoot(bullConfig),
    ConfigModule.forRoot(mainConfig),
    CacheModule.register(),
    ScheduleModule.forRoot(),
    TypeOrmModule.forRoot(typeOrmOptions),
    MongooseModule.forRootAsync({
      imports: [ConfigModule],
      useFactory: async (configService: ConfigService) => ({
        uri: configService.get<string>('MONGO_CONNECTION'),
        useNewUrlParser: true,
        useUnifiedTopology: true,
        useCreateIndex: true,
        useFindAndModify: true,
      }),
      inject: [ConfigService],
    }),
    MailerModule.forRoot(mailerConfig),
    ...registerModules,
  ],
})
export class AppModule {
  configure(consumer: MiddlewareConsumer): void {
    consumer.apply(AppLoggerMiddleware).forRoutes('*');
  }
}

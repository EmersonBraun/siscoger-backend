import { ValidationPipe } from '@nestjs/common';
import { NestFactory } from '@nestjs/core';
import helmet from 'helmet';
import { AppModule } from './app.module';
import { PrettyLogger } from './common/logger/pretty-log';
import { setupDocumentation } from './config/documentation';


async function bootstrap() {
  const app = await NestFactory.create(AppModule, { cors: true, logger: console });

  app.use(helmet())
  app.useLogger(new PrettyLogger);
  app.useGlobalPipes(new ValidationPipe({
    transform: true,
  }));
  void setupDocumentation(app)

  await app.listen(process.env.APP_PORT);
}

bootstrap();

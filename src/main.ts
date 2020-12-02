import { ValidationPipe } from '@nestjs/common';
import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { setupDocumentation } from './config/documentation';

import helmet from 'helmet';
import { PrettyLogger } from './common/logger/pretty-log';

async function bootstrap() {
  const app = await NestFactory.create(AppModule, { cors: true, logger: false });

  app.use(helmet())
  app.useLogger(new PrettyLogger);
  app.useGlobalPipes(new ValidationPipe({
    transform: true,
  }));
  void setupDocumentation(app)

  await app.listen(process.env.APP_PORT);
}

bootstrap();

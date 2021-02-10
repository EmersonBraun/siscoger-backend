import { ValidationPipe } from '@nestjs/common';
import { NestFactory } from '@nestjs/core';
import { NestExpressApplication } from '@nestjs/platform-express';
import rateLimit from 'express-rate-limit';
import helmet from 'helmet';
import { AppModule } from './app.module';
import { PrettyLogger } from './common/logger/pretty-log';
import { setupDocumentation } from './config/documentation';

async function bootstrap() {
  const app = await NestFactory.create<NestExpressApplication>(AppModule, { cors: true, logger: console });

  app.use(helmet())
  app.use(
    rateLimit({
      windowMs: 15 * 60 * 1000, // 15 minutes
      max: 100, // limit each IP to 100 requests per windowMs
    }),
  )
  app.useLogger(new PrettyLogger);  
  app.useGlobalPipes(new ValidationPipe({ transform: true,})); 
  app.set('trust proxy', 1)
  void setupDocumentation(app)

  await app.listen(process.env.APP_PORT);
  console.log(`🚀 ${String(process.env.APP_NAME)} (API) is running on: http://localhost:${process.env.APP_PORT}`);
}

bootstrap();

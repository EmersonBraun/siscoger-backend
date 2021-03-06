import { INestApplication } from '@nestjs/common';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';
import { version } from '../../package.json';

const documentationOptions = new DocumentBuilder()
  .setTitle('SISCOGER API')
  .setDescription('SISCOGER API documentation')
  .setVersion(version)
  .build();

export function setupDocumentation(app: INestApplication) {
  const document = SwaggerModule.createDocument(app, documentationOptions);
  SwaggerModule.setup('documentation', app, document);
}

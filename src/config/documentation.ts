import { SwaggerModule, DocumentBuilder } from '@nestjs/swagger';
import { version } from '../../package.json'

const documentationOptions = new DocumentBuilder()
    .setTitle('SISCOGER API')
    .setDescription('SISCOGER API documentation')
    .setVersion(version)
    .build();

export function setupDocumentation (app) {
    const document = SwaggerModule.createDocument(app, documentationOptions);
    SwaggerModule.setup('documentation', app, document);
}
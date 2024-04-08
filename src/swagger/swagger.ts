import { INestApplication } from "@nestjs/common";
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';

const initSwagger = (app: INestApplication) => {
    const config = new DocumentBuilder()
        .setTitle('Nest BE Elastic Search')
        .setVersion('1.0')
        .addTag('ElasticSearch')
        .build();

    const document = SwaggerModule.createDocument(app, config);
    SwaggerModule.setup(
        'docs',
        app,
        document,
        {
            swaggerOptions: {
                tagsSorter: 'alpha',
                operationsSorter: 'alpha',
                persistAuthorization: true,
            }
        }
    );
}

export default initSwagger;
import { NestFactory } from '@nestjs/core';
// class-transformer
import { ExpressAdapter } from '@nestjs/platform-express';
import * as express from 'express';
import { AppModule } from './app.module';
import initSwagger from './swagger/swagger';

const PORT = 3000;
async function bootstrap() {
    const server = express();
    const app = await NestFactory.create(
        AppModule,
        new ExpressAdapter(server)
    );

    initSwagger(app);

    await app.listen(PORT);
    console.log(`Server listening at port ${PORT}`);
}
bootstrap();
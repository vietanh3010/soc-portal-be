import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ElasticSearchModule } from './collections/elastic-search/elastic-search.module';

const ENV = process.env.NODE_ENV;
@Module({
    imports: [
        ConfigModule.forRoot({
            isGlobal: true,
            envFilePath: [
                '.env.development',
                '.env.production'
            ],
        }),
        ElasticSearchModule,
    ],
    controllers: [
        AppController,
    ],
    providers: [
        AppService
    ],
})
export class AppModule { }

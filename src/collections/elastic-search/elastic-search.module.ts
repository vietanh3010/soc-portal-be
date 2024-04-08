import { Module } from '@nestjs/common';
import { ElasticSearchController } from './elastic-search.controller';
import { ElasticSearchService } from './elastic-search.service';
import { HttpModule } from '@nestjs/axios';
import { ConfigModule, ConfigService } from '@nestjs/config';

@Module({
    controllers: [
        ElasticSearchController
    ],
    providers: [
        ElasticSearchService,
    ],
    imports: [
        // HttpModule.register({
        //     baseURL: `${process.env.ES_ENDPOINT_BASE}/${process.env.ES_INDEX}`,
        //     headers: {
        //         "Authorization": `ApiKey ${process.env.ES_API_KEY}`
        //     }
        // }),
        HttpModule.registerAsync({
            imports: [ConfigModule],
            useFactory: async (configService: ConfigService) => ({
                baseURL: `${configService.get("ES_ENDPOINT_BASE")}/${configService.get("ES_INDEX")}`,
                headers: {
                    "Authorization": `ApiKey ${configService.get("ES_API_KEY")}`,
                    "Content-Type": "application/json"
                }
            }),
            inject: [ConfigService],
        })
    ]
})
export class ElasticSearchModule { }

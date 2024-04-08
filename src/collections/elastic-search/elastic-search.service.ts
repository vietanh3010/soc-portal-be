import { HttpService } from '@nestjs/axios';
import { Injectable } from '@nestjs/common';
import { catchError, map } from 'rxjs';
import { EsQueryBody } from 'src/types/payload.type';
@Injectable()
export class ElasticSearchService {
    constructor(
        // @Inject(HttpService) private readonly httpService: HttpService
        private readonly httpService: HttpService
    ) {

    }

    async search(body: EsQueryBody) {
        return this.httpService.post(
            `/_search?pretty`,
            JSON.stringify(body)
        ).pipe(
            map(res => res.data)
        )
    }
}

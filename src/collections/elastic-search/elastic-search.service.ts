import { HttpService } from '@nestjs/axios';
import { Injectable } from '@nestjs/common';
import { map } from 'rxjs';
import { EsQueryBody } from 'src/types/payload.type';
import * as _ from "lodash";
@Injectable()
export class ElasticSearchService {
    constructor(
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

    async deleteAll() {
        const body = {
            "query": {
                "match_all": {}
            }
        }
        return this.httpService.post(
            `/_delete_by_query?conflicts=proceed`,
            JSON.stringify(body)
        ).pipe(
            map(res => res.data)
        )
    }

    async getAllFields() {
        const body = {
            "size": 1,
            "query": {
                "match_all": {
                }
            }
        }
        return this.httpService.post(
            `/_search?pretty`,
            JSON.stringify(body)
        ).pipe(
            map(res => {
                return Object.keys(_.omit(res.data.hits.hits[0]._source, "description", "timestamp"));
            })
        )
    }
}

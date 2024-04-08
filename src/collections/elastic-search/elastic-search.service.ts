import *  as EnterpriseSearch from '@elastic/enterprise-search';
import { Injectable } from '@nestjs/common';
// import Client from '@elastic/search-application-client';
import { Client } from '@elastic/elasticsearch';

const client = new Client({
    node: 'https://soc-cmc.ent.asia-southeast1.gcp.elastic-cloud.com',
    auth: {
        apiKey: 'WW5rLXRJNEJjYkpTWFNWTnhWZkk6ZkdSVHBHVmhSbjZGUkdETC1GTHJWZw=='
    }
})

// const request = Client(
//     "search-es",
//     "https://0448cd5f5b4a489ab572ec3830b95351.asia-southeast1.gcp.elastic-cloud.com:443",
//     "Skhuc3NvNEJjYkpTWFNWTnFsTzU6S1gtN1BIM3RUWlczTFExOXhjUnN3QQ==", // test-key-2
// )

@Injectable()
export class ElasticSearchService {


    async getHeathCheck() {
        // const response = await client.enterprise.getHealth()
        // console.log(response)
        // return response;
    }
    async search() {
        // const response = await client.app.search({
        //     engine_name: 'search-metrics-2',
        //     body: {
        //         query: '',
        //         page: {
        //             current: 1,
        //             size: 20,
        //         },
        //     }
        // })
        // return response
    }

    async suggestion() {
        // const response = await client.app.querySuggestion({
        //     engine_name: 'search-metrics-2',
        //     body: {
        //         query: 'req',
        //     }
        // })
        // return response
    }

    async test() {
        // const results = await request()
        //     .query('cmc')
        //     .search()

        // return results;

        const searchResult = await client.search({
            index: 'search-metric-index',
            query: {
                match_all: {}
            }
        });

        console.log(searchResult.hits.hits)

        return searchResult
    }
}

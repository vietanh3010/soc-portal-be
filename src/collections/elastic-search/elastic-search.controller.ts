import { Body, Controller, Get, Post } from '@nestjs/common';
import { ApiBody, ApiOperation, ApiResponse, ApiTags } from '@nestjs/swagger';
import { ElasticSearchService } from './elastic-search.service';
import { EsQueryBody } from 'src/types/payload.type';

@Controller('elastic-search')
@ApiTags('Elastic search')
export class ElasticSearchController {
    constructor(protected readonly elasticSearchService: ElasticSearchService) {

    }

    @Post('/_search')
    @ApiOperation({
        summary: 'Perform search'
    })
    @ApiBody({
        description: `Your aggregation`,
        required: true,
    })
    @ApiResponse({
        status: 200,
        description: 'Successful response',
    })
    search(@Body() body: EsQueryBody) {
        return this.elasticSearchService.search(body)
    }
}

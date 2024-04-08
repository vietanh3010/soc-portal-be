import { Controller, Get } from '@nestjs/common';
import { ApiOperation, ApiTags } from '@nestjs/swagger';
import { ElasticSearchService } from './elastic-search.service';

@Controller('elastic-search')
@ApiTags('Elastic search')
export class ElasticSearchController {
    constructor(protected readonly elasticSearchService: ElasticSearchService) {

    }

    @Get('/')
    @ApiOperation({
        summary: 'Test'
    })
    test() {
        return this.elasticSearchService.test()
    }

    @Get('/search')
    @ApiOperation({
        summary: 'Get all data'
    })
    search() {
        return this.elasticSearchService.search()
    }

    @Get('/suggestion')
    @ApiOperation({
        summary: 'Get all data'
    })
    suggestion() {
        return this.elasticSearchService.suggestion()
    }
}

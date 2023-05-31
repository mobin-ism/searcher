import { Body, Controller, Post } from '@nestjs/common'
import { SearchService } from '../search/search.service'
import { CreateSingerDto } from './dto/create-singer.dto'
import { SingersService } from './singers.service'

@Controller('singers')
export class SingersController {
    constructor(
        private readonly singersService: SingersService,
        private readonly searchService: SearchService
    ) {}

    @Post()
    async create(@Body() createSingerDto: CreateSingerDto) {
        return await this.singersService.create(createSingerDto)
    }
}

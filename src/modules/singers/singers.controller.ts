import {
    Body,
    Controller,
    Delete,
    Get,
    Param,
    Patch,
    Post
} from '@nestjs/common'
import { SearchService } from '../search/search.service'
import { UpdateSingerDto } from './dto/update-singer.dto'
import { SingersService } from './singers.service'

@Controller('singers')
export class SingersController {
    constructor(
        private readonly singersService: SingersService,
        private readonly searchService: SearchService
    ) {}

    @Post()
    async create(@Body() createSingerDto: JSON) {
        return await this.searchService.addSingers([createSingerDto])
    }

    @Get('index')
    findIndex() {
        return this.searchService.getSingerIndex()
    }

    @Get()
    findAll() {
        return this.singersService.findAll()
    }

    @Get(':id')
    findOne(@Param('id') id: string) {
        return this.singersService.findOne(+id)
    }

    @Patch(':id')
    update(@Param('id') id: string, @Body() updateSingerDto: UpdateSingerDto) {
        return this.singersService.update(+id, updateSingerDto)
    }

    @Delete(':id')
    remove(@Param('id') id: string) {
        return this.singersService.remove(+id)
    }
}

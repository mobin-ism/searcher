import { Injectable } from '@nestjs/common'
import { InjectRepository } from '@nestjs/typeorm'
import { Repository } from 'typeorm'
import { SearchService } from '../search/search.service'
import { CreateSingerDto } from './dto/create-singer.dto'
import { Singer } from './entities/singer.entity'

@Injectable()
export class SingersService {
    constructor(
        @InjectRepository(Singer)
        private readonly singerRepository: Repository<Singer>,
        private readonly searchService: SearchService
    ) {}
    async create(createSingerDto: CreateSingerDto) {
        const createdSinger = await this.singerRepository.save(createSingerDto)
        await this.searchService.addSingers([createdSinger])
    }
}

import { Injectable } from '@nestjs/common'
import { InjectRepository } from '@nestjs/typeorm'
import { Repository } from 'typeorm'
import { SearchService } from '../search/search.service'
import { CreateAlbumDto } from './dto/create-album.dto'
import { Album } from './entities/album.entity'

@Injectable()
export class AlbumsService {
    constructor(
        @InjectRepository(Album)
        private readonly albumRepository: Repository<Album>,
        private readonly searchService: SearchService
    ) {}

    async create(createAlbumDto: CreateAlbumDto) {
        const createdAlbum = await this.albumRepository.save(createAlbumDto)
        await this.searchService.addAlbumns([createdAlbum])
        return createdAlbum
    }
}

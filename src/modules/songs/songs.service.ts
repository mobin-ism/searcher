import { Injectable } from '@nestjs/common'
import { InjectRepository } from '@nestjs/typeorm'
import { Repository } from 'typeorm'
import { SearchService } from '../search/search.service'
import { CreateSongDto } from './dto/create-song.dto'
import { Song } from './entities/song.entity'

@Injectable()
export class SongsService {
    constructor(
        @InjectRepository(Song)
        private readonly songRepository: Repository<Song>,
        private searchService: SearchService
    ) {}

    async create(createSongDto: CreateSongDto) {
        const createdSong = await this.songRepository.save(createSongDto)
        await this.searchService.addSongs(createdSong)
        return createdSong
    }
}

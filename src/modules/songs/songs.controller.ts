import { Body, Controller, Post } from '@nestjs/common'
import { CreateSongDto } from './dto/create-song.dto'
import { SongsService } from './songs.service'

@Controller('songs')
export class SongsController {
    constructor(private readonly songsService: SongsService) {}

    @Post()
    async create(@Body() createSongDto: CreateSongDto) {
        return await this.songsService.create(createSongDto)
    }
}

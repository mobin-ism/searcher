import { Body, Controller, Post } from '@nestjs/common'
import { AlbumsService } from './albums.service'
import { CreateAlbumDto } from './dto/create-album.dto'

@Controller('albums')
export class AlbumsController {
    constructor(private readonly albumsService: AlbumsService) {}

    @Post()
    create(@Body() createAlbumDto: CreateAlbumDto) {
        return this.albumsService.create(createAlbumDto)
    }
}

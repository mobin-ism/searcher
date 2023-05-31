import { Module } from '@nestjs/common'
import { TypeOrmModule } from '@nestjs/typeorm'
import { SearchModule } from '../search/search.module'
import { Song } from './entities/song.entity'
import { SongsController } from './songs.controller'
import { SongsService } from './songs.service'

@Module({
    imports: [TypeOrmModule.forFeature([Song]), SearchModule],
    controllers: [SongsController],
    providers: [SongsService]
})
export class SongsModule {}

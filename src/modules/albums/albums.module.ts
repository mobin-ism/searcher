import { Module } from '@nestjs/common'
import { TypeOrmModule } from '@nestjs/typeorm'
import { SearchModule } from '../search/search.module'
import { AlbumsController } from './albums.controller'
import { AlbumsService } from './albums.service'
import { Album } from './entities/album.entity'

@Module({
    imports: [TypeOrmModule.forFeature([Album]), SearchModule],
    controllers: [AlbumsController],
    providers: [AlbumsService]
})
export class AlbumsModule {}

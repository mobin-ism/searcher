import { Module } from '@nestjs/common'
import { TypeOrmModule } from '@nestjs/typeorm'
import { SearchModule } from '../search/search.module'
import { Singer } from './entities/singer.entity'
import { SingersController } from './singers.controller'
import { SingersService } from './singers.service'

@Module({
    imports: [SearchModule, TypeOrmModule.forFeature([Singer])],
    controllers: [SingersController],
    providers: [SingersService]
})
export class SingersModule {}

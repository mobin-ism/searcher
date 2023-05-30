import { Module } from '@nestjs/common'
import { SearchModule } from '../search/search.module'
import { SingersController } from './singers.controller'
import { SingersService } from './singers.service'

@Module({
    imports: [SearchModule],
    controllers: [SingersController],
    providers: [SingersService]
})
export class SingersModule {}

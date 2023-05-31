import { Module } from '@nestjs/common'
import { TypeOrmModule } from '@nestjs/typeorm'
import { User } from 'src/modules/users/entities/user.entity'
import { UserController } from 'src/modules/users/users.controller'
import { UserService } from 'src/modules/users/users.service'
import { SearchModule } from '../search/search.module'

@Module({
    imports: [TypeOrmModule.forFeature([User]), SearchModule],
    controllers: [UserController],
    providers: [UserService],
    exports: [UserService]
})
export class UsersModule {}

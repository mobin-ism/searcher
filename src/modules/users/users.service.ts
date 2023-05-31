import { Injectable } from '@nestjs/common'
import { InjectRepository } from '@nestjs/typeorm'
import { User } from 'src/modules/users/entities/user.entity'
import { Repository } from 'typeorm'
import { SearchService } from '../search/search.service'
import { CreateUserDto } from './dto/create-user.dto'

@Injectable()
export class UserService {
    constructor(
        @InjectRepository(User)
        private readonly userRepository: Repository<User>,
        private readonly searchService: SearchService
    ) {}

    async create(createUserDto: CreateUserDto) {
        const createdUser = await this.userRepository.save(createUserDto)
        const hello = await this.userRepository.findOne({
            where: {
                id: createdUser.id
            },
            relations: ['role']
        })
        console.log(hello)
        const meilisearchDto = {
            id: hello.id,
            name: hello.name,
            email: hello.email,
            role: hello.role
        }
        console.log(meilisearchDto)
        await this.searchService.addUsers([meilisearchDto])
    }
}

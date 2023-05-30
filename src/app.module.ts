import { Module } from '@nestjs/common'
import { ConfigModule } from '@nestjs/config'
import { TypeOrmModule } from '@nestjs/typeorm'
import { CacheModule } from 'src/cache/cache.module'
import { typeOrmAsyncConfig } from 'src/config/typeorm.config'
import { UsersModule } from 'src/modules/users/users.module'
import { AppController } from './app.controller'
import { AppService } from './app.service'
import { AuthModule } from './modules/auth/auth.module'
import { RoleModule } from './modules/role/role.module'
import { SingersModule } from './modules/singers/singers.module'
@Module({
    imports: [
        CacheModule,
        ConfigModule.forRoot({
            envFilePath: ['.env'],
            isGlobal: true,
            cache: true
        }),
        TypeOrmModule.forRootAsync(typeOrmAsyncConfig),
        AuthModule,
        UsersModule,
        RoleModule,
        SingersModule
    ],
    controllers: [AppController],
    providers: [AppService],
    exports: [TypeOrmModule]
})
export class AppModule {}

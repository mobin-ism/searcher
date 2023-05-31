import { IsNotEmpty, IsString } from 'class-validator'

export class CreateSingerDto {
    @IsNotEmpty()
    @IsString()
    name: string

    @IsNotEmpty()
    @IsString()
    madeUpName: string
}

import { IsNotEmpty, IsString } from 'class-validator'

export class CreateSingerDto {
    id: number

    @IsNotEmpty()
    @IsString()
    name: string

    @IsNotEmpty()
    @IsString()
    madeUpName: string
}

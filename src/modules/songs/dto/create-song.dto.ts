import { IsNotEmpty, IsString } from 'class-validator'

export class CreateSongDto {
    @IsNotEmpty()
    @IsString()
    title: string

    @IsNotEmpty()
    @IsString()
    length: string
}

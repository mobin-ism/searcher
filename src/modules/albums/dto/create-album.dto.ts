import { IsNotEmpty, IsNumber, IsString } from 'class-validator'

export class CreateAlbumDto {
    @IsNotEmpty()
    @IsString()
    title: string

    @IsNotEmpty()
    @IsNumber()
    totalNumberOfSongs: number

    @IsNotEmpty()
    @IsString()
    totalLength: string
}

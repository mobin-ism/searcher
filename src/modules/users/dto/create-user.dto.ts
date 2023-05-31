import {
    IsEmail,
    IsNotEmpty,
    IsNumber,
    IsOptional,
    IsString,
    IsUrl
} from 'class-validator'

export class CreateUserDto {
    @IsString()
    @IsNotEmpty()
    name: string

    @IsNotEmpty()
    @IsEmail()
    email: string

    @IsString()
    @IsOptional()
    password: string

    @IsString()
    @IsUrl()
    avatarUrl: string

    @IsNumber()
    @IsNotEmpty()
    roleId: number
}

import { IsEmail, IsEnum, IsNotEmpty, IsString } from "class-validator";


export class CreateUserDto {
    @IsString()
    @IsNotEmpty()
    name: string;

    @IsEmail()
    email: string;

    @IsEnum(['User', 'Engineer', 'Helper', 'Cleaner', 'ADMIN'], {
        message: 'Valid role required'
    })
    role: 'User'| 'Engineer'| 'Helper'| 'Cleaner'| 'ADMIN';
}
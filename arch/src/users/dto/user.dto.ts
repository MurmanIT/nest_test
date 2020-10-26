import { IsEmail, IsNotEmpty, IsString } from 'class-validator';
import { UserType } from 'src/models';
export class CreateUserDto implements UserType {    
    @IsEmail()
    email: string;

    @IsString()
    @IsNotEmpty()    
    user_name: string;
}
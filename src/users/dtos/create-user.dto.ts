import { IsNotEmpty } from 'class-validator';
import { IsDateString } from 'common';

export class CreateUserDto {
    @IsNotEmpty()
    fullName: string;

    @IsNotEmpty()
    isActive: boolean;

    @IsNotEmpty()
    birthday: Date;
}

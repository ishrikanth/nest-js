import { Controller, Post, Body, Get, Put, Delete,Param} from '@nestjs/common';
import { UsersService } from './users.service';
import { User } from './user.entity';
import { CreateUserDto, } from "./dtos/create-user.dto";
import { CreateUserResponseDto } from "./dtos/create-user-response.dto";

@Controller('users')
export class UsersController {

    constructor(private service: UsersService) { }

    @Get('/')
    getAll() {
        return this.service.getUsers();
    }

    @Get(':id')
    get(@Param() params) {
        return this.service.getUser(params.id);
    }

    @Post()
    create(@Body() createUserDto: CreateUserDto) : Promise<CreateUserResponseDto> {
        return this.service.createUser(createUserDto);
    }

    @Put()
    update(@Body() user: User) {
        return this.service.updateUser(user);
    }

    @Delete(':id')
    deleteUser(@Param() params) {
        return this.service.deleteUser(params.id);
    }
}

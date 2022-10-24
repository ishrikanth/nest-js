import { Injectable, Inject } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { User } from './user.entity';
import { CreateUserDto } from "./dtos/create-user.dto";
import { CreateUserResponseDto } from "./dtos/create-user-response.dto";

@Injectable()
export class UsersService {

    constructor(@InjectRepository(User) private usersRepository: Repository<User>) { }

    async getUsers(): Promise<User[]> {
        return await this.usersRepository.find();
    }

    async getUser(_id: number): Promise<User[]> {
        return await this.usersRepository.find({
            select: ["fullName", "birthday", "isActive"],
            where: [{ "id": _id }]
        });
    }

    async createUser(createUserDto: CreateUserDto) : Promise<CreateUserResponseDto> {
        const user = new User();
        user.birthday = createUserDto.birthday;
        user.fullName = createUserDto.fullName;
        user.isActive = createUserDto.isActive;
        return this.usersRepository.save(user)
    }

    async updateUser(user: User) {
        this.usersRepository.save(user)
    }

    async deleteUser(user: User) {
        this.usersRepository.delete(user);
    }
}

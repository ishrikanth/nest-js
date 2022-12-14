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
        const user = new User(createUserDto.birthday, createUserDto.fullName, createUserDto.isActive);
        return this.usersRepository.save(user)
    }

    async updateUser(user: User) {
        await this.usersRepository.save(user)
    }

    async deleteUser(user: User) {
        await this.usersRepository.delete(user);
    }
}

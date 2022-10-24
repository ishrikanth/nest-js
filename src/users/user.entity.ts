import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class User {

    constructor(birthDay: Date, fullName: string, isActive: boolean) {
        this.fullName = fullName;
        this.birthday = birthDay;
        this.isActive = isActive;
    }

    @PrimaryGeneratedColumn()
    id: number;

    @Column({ length: 25 })
    fullName:string;

    @Column('date')
    birthday:Date;

    @Column()
    isActive:boolean;
}

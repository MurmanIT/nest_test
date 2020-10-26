import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { UserType } from 'src/models';
import { Repository } from 'typeorm';
import { Users } from './../entity/user.entity';
import { CrudServiceInterface } from './../models/interface/crud-service.interface';

@Injectable()
export class UsersService implements CrudServiceInterface {

    constructor(
        @InjectRepository(Users)
        private _usersRepository: Repository<Users>,
    ){}
    
    getAll(): Promise<UserType[]> {        
        return this._usersRepository.find();
    }

    create(user: UserType): Promise<UserType> {
        return null;
    }

    getById(id: number): Promise<UserType> {
        return null;
    }

    deleteById(id: number): Promise<string> {
        return null;
    }

    update(id: number, update:UserType): Promise<UserType> {
        return null;
    }
}

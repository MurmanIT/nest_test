import { Posts } from './../../entity/post.entity';
import { Users } from './../../entity/user.entity';
import { CrudServiceInterface, UserType } from 'src/models';
import { getConnection } from 'typeorm';
export class UsersTpService implements CrudServiceInterface {

    private _getQueryBuilder =  getConnection().createQueryBuilder();
    
    async getAll(): Promise<UserType[]> {
        return await this._getQueryBuilder
            .select()
            .from(Users, "users")
            .getMany();           
    }

    async create(source: UserType): Promise<UserType> {
        const user = new Users();
        user.email = source.email;
        user.user_name = source.user_name;
        return await getConnection().manager.save(user);
    }

    async getById(id: number): Promise<UserType> {
        return await this._getQueryBuilder
            .select()
            .from(Users, "user")
            .where("id= :id", {id})
            .execute();
    }

    async deleteById(id: number): Promise<string> {        
        return null;
          
    }

    update(id: number, user: UserType): Promise<UserType> {        
        return null;
    }
}
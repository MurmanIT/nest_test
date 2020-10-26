import { Posts } from './../../entity/post.entity';
import { Users } from './../../entity/user.entity';
import { CrudServiceInterface, UserType } from 'src/models';
import { getConnection } from 'typeorm';
export class UsersTpService implements CrudServiceInterface {

    private _getQueryBuilder =  getConnection().createQueryBuilder();
    
    async getAll(): Promise<UserType[]> {
        return await this._getQueryBuilder
            .select()
            .from(Users, "user")
            .getMany();           
    }

    async create(user: UserType): Promise<UserType> {
        const newUser = await this._getQueryBuilder
            .insert()
            .into(Users)
            .values({
                   email: user.email,
                   user_name: user.user_name 
                })
            .execute();                
        return null;
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
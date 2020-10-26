import { Users } from './../../entity/user.entity';
import { Posts } from './../../entity/post.entity';
import { getConnection } from 'typeorm';
import { PostSeriviceInterface, PostType, UserType } from 'src/models';

export class PostTpService implements PostSeriviceInterface {
    private _getQueryBuilder =  getConnection().createQueryBuilder();

    async getAll(): Promise<PostType[]> {
        return await this._getQueryBuilder
            .select()
            .from(Posts, "posts")
            .getMany();
    }

    async create(source: PostType): Promise<PostType> {        
        const post = new Posts();
        const user: Users = await getConnection()
            .getRepository(Users)
            .findOne(source.userId);

        post.post = source.post;
        post.title = source.title;
        post.user = user;
        return await getConnection().manager.save(post);
    }

    async getById(id: number): Promise<PostType> {
        return await getConnection().getRepository(Posts)        
        .findOne(id);
    }

    async deleteById(id: number): Promise<string> {
        return null;
    }

    async update(id: number, source: PostType): Promise<PostType> {
        return null;
    }    
}

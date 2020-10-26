import { PostSeriviceInterface, PostType } from 'src/models';
export abstract class PostAbstractService {
    public abstract factoryCrud(): PostSeriviceInterface;

    public getAll(): Promise<PostType[]> {
        return this.factoryCrud().getAll();
    }

    public create(post: PostType): Promise<PostType> {
        return this.factoryCrud().create(post);
    }        
}
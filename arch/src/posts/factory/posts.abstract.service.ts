import { PostSeriviceInterface, PostType } from 'src/models';
export abstract class PostAbstractService {
    public abstract factoryCrud(): PostSeriviceInterface;

    public getAll(): Promise<PostType[]> {
        return this.factoryCrud().getAll();
    }

    public create(post: PostType): Promise<PostType> {
        return this.factoryCrud().create(post);
    }
    
    public getById(id: number): Promise<PostType> {
        return this.factoryCrud().getById(id);
    }

    public update(id: number, post: PostType): Promise<PostType> {
        return this.factoryCrud().update(id, post);
    }

    public deleteById(id: number): Promise<string> {
        return this.factoryCrud().deleteById(id);
    }    
}
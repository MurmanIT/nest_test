import { PostType, SearchPostType } from './../types/posts.types';
export interface CrudServiceInterface {
    getAll(): Promise<any[]>;    
    create(insert: any): Promise<any>;
    getById(id: number): Promise<any>;
    deleteById(id: number): Promise<any>;
    update(id: number, update:any): Promise<any>;
}

export interface PostSeriviceInterface extends CrudServiceInterface {
}

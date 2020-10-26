import { PostType, SearchPostType } from './../types/posts.types';
import { UserType } from './../types/users.types';
export interface CrudControllerInterface {
    getAll(): Promise<any[]>;
    create(): Promise<any>;
    getById(id: number): Promise<any>;
    updateById(id: number): Promise<any>;
    deleteById(id: number): any;
}

export interface UsersControllerInterface extends CrudControllerInterface {
    create(user?: UserType): Promise<UserType>;        
    updateById(id: number, user?: UserType): Promise<UserType>;
    getById(id: number): Promise<UserType>;
}

export interface PostControllerInterface extends CrudControllerInterface {
   create(post?: PostType): Promise<PostType>;
   updateById(id: number, post?: PostType): Promise<PostType>;
   getById(id: number): Promise<PostType>;
   searchPosts(search: SearchPostType): Promise<PostType[]>;
}
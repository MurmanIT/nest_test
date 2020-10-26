import { BaseType } from './base.types';
export type UserType = BaseType & {    
    email: string;
    user_name: string;    
    id?: number;
}
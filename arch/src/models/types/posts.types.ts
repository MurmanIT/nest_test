import { BaseType } from './base.types';
export type PostType  =  BaseType & {
    title: string;
    post: string;           
    userId?: number;
}

export type SearchPostType = {
    title?: string;
    userId?: number;
}
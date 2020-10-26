import { Body, Controller, Delete, Get, Post, Put, Query } from '@nestjs/common';
import { PostControllerInterface } from 'src/models';
import { PostType } from 'src/models/types/posts.types';
import { SearchPostType } from './../models/types/posts.types';


@Controller('posts')
export class PostsController implements PostControllerInterface {
    @Get()
    getAll(): Promise<PostType[]> {
        return null;
    }
    
    @Post()
    create(@Body() post: PostType): Promise<PostType>{
        throw new Error('Method not implemented.');
    }

    @Get(':id')
    getById(id: number): Promise<PostType>{
        throw new Error('Method not implemented.');
    }

    @Put(':id')
    updateById(id: number, @Body() post: PostType): Promise<PostType> {
        throw new Error('Method not implemented.');
    }

    @Delete(':id')
    deleteById(id: number) {
        throw new Error('Method not implemented.');
    }

    @Get('search')
    searchPosts(@Query() search: SearchPostType): Promise<PostType[]> {
        return null;
    }
}

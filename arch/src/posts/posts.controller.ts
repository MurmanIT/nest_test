import { CreatePostDto, BasePostDto, SearchPostDto } from './dto/posts.dto';
import { Body, Controller, Delete, Get, Post, Put, Query } from '@nestjs/common';
import { PostControllerInterface } from 'src/models';
import { PostType } from 'src/models';
import { SearchPostType } from 'src/models';


@Controller('posts')
export class PostsController implements PostControllerInterface {
    @Get()
    getAll(): Promise<PostType[]> {
        return null;
    }
    
    @Post()
    create(@Body() post: CreatePostDto): Promise<PostType>{
        throw new Error('Method not implemented.');
    }

    @Get(':id')
    getById(id: number): Promise<PostType>{
        throw new Error('Method not implemented.');
    }

    @Put(':id')
    updateById(id: number, @Body() post: BasePostDto): Promise<PostType> {
        throw new Error('Method not implemented.');
    }

    @Delete(':id')
    deleteById(id: number) {
        throw new Error('Method not implemented.');
    }

    @Get('search')
    searchPosts(@Query() search: SearchPostDto): Promise<PostType[]> {
        return null;
    }
}

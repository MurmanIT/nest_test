import { IsNotEmpty, IsNumber, IsString } from 'class-validator';
import { PostType, SearchPostType } from 'src/models';
export class BasePostDto implements PostType {
    @IsString()
    @IsNotEmpty()
    title: string;

    @IsString()
    @IsNotEmpty()
    post: string;
}

export class CreatePostDto extends BasePostDto {    
    @IsNumber()
    @IsNotEmpty()
    userId: number;
}

export class SearchPostDto implements SearchPostType {
    @IsString()
    @IsNotEmpty()
    title: string;

    @IsNumber()
    @IsNotEmpty()
    userId: number;
}
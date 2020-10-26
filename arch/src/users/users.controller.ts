import { CreateUserDto } from './dto/user.dto';
import { HttpExceptionFilter } from './../http-exception.filter';
import { Body, Controller, Delete, Get, HttpCode, Param, Post, Put, UseFilters } from '@nestjs/common';
import { UsersControllerInterface, UserType } from './../models';
import { UsersService } from './users.service';

@Controller('users')
export class UsersController implements UsersControllerInterface {

    constructor(private _userService: UsersService) {}

    @Get(':id')    
    @UseFilters(new HttpExceptionFilter())
    getById(@Param('id') id: number): Promise<UserType> {
        return null;
    }

    @Get()
    @UseFilters(new HttpExceptionFilter())
    getAll(): Promise<UserType[]> {        
        return this._userService.getAll();
    }

    @Post()
    @UseFilters(new HttpExceptionFilter())
    @HttpCode(201)
    create(@Body() user: CreateUserDto): Promise<UserType> {
        return this._userService.create(user);
    }    

    @Put(':id')    
    updateById(@Param('id') id: number): Promise<UserType> {
        return null;
    }

    @Delete(':id')
    @UseFilters(new HttpExceptionFilter())
    deleteById(@Param('id') id: number): Promise<string> {
        return null;
    }
}

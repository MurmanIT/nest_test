import { Body, Controller, Delete, Get, HttpCode, Param, Post, Put } from '@nestjs/common';
import { UsersControllerInterface, UserType } from './../models';
import { UsersService } from './users.service';

@Controller('users')
export class UsersController implements UsersControllerInterface {

    constructor(private _userService: UsersService) {}

    @Get(':id')    
    getById(@Param('id') id: number): Promise<UserType> {
        return null;
    }

    @Get()
    getAll(): Promise<UserType[]> {        
        return this._userService.getAll();
    }

    @Post()
    @HttpCode(201)
    create(@Body() user: UserType): Promise<UserType> {
        return null;
    }    

    @Put(':id')
    updateById(@Param('id') id: number, @Body() user: UserType): Promise<UserType> {
        return null;
    }

    @Delete(':id')
    deleteById(@Param('id') id: number): string {
        return 'This action returs all users';
    }
}

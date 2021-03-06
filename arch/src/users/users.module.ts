import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Users } from './../entity/user.entity';
import { UsersController } from './users.controller';
import { UsersService } from './users.service';

@Module({  
  providers: [UsersService],
  controllers: [UsersController]
})
export class UsersModule {}

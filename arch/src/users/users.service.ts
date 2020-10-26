import { UsersTpService } from './factory/users.tp.service';
import { CrudServiceInterface } from 'src/models';
import { Injectable } from '@nestjs/common';
import { UserAbstractService } from './factory/users.abstract.service';

@Injectable()
export class UsersService extends UserAbstractService {
    public factoryCrud(): CrudServiceInterface {
        return new UsersTpService();
    }
}

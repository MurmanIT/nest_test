import { CrudServiceInterface, UserType } from 'src/models';
export abstract class UserAbstractService {
     public abstract factoryCrud(): CrudServiceInterface;
     
     public getAll(): Promise<UserType[]> {         
         return this.factoryCrud().getAll();
     }

     public create(user: UserType): Promise<UserType> {
        return this.factoryCrud().create(user);
     }

     public getById(id: number): Promise<UserType> {
         return this.factoryCrud().getById(id);
     }

     public update(id: number, user: UserType): Promise<UserType> {
         return this.factoryCrud().update(id, user);
     }

     public deleteById(id: number): Promise<string> {
         return null;
     }
}
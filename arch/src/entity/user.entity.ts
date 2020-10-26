import { Column, Entity } from "typeorm";
import { BaseEntity } from "./base.entity";

@Entity({ name: 'users' })
export class Users  extends BaseEntity {
    @Column("varchar", { 
        length: 250,
        unique: true,
        nullable: false
    })
    email: string;

    @Column("varchar", { 
        length: 250,
        unique: true,
        nullable: false
    })
    user_name: string;    
}
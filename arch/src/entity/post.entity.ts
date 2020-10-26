import { Column, Entity, ManyToOne } from "typeorm";
import { BaseEntity } from "./base.entity";
import { Users } from './user.entity';

@Entity({ name: 'posts' })
export class Posts  extends BaseEntity {
    
    @Column("varchar", {
        length: 250,
        nullable: false
    })
    title: string;

    @Column("text", {
        nullable: false
    })
    post: string;

    @ManyToOne(() => Users, user => user.id)
    user: Users;    
}
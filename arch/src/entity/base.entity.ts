import { CreateDateColumn, PrimaryGeneratedColumn, UpdateDateColumn } from 'typeorm';
export abstract class BaseEntity {
    @PrimaryGeneratedColumn()
    id: number;

    @CreateDateColumn({
        type: "timestamp"        
    })
    create_at: Date;

    @UpdateDateColumn({
        type: "timestamp"      
    })
    update_at: Date;
}   
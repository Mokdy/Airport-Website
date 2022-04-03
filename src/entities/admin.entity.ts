import { BaseEntity, Column, Entity, JoinColumn, ManyToOne } from "typeorm";
import { PersonEntity } from "./person.entity";

@Entity({ name: "ADMIN"})
export class AdminEntity extends BaseEntity {
    @ManyToOne(() => PersonEntity, person => person.username, {primary: true})
    @JoinColumn({
        name: 'username',
    })
    username: PersonEntity;

    @Column({
        name: "salary",
        nullable: true
    })
    salary: number;

    @Column({
        name: "officeNumber",
        nullable: true
    })
    officeNumber: string;
   
    @Column({
        name: "phoneNumber",
        nullable: true
    })
    phoneNumber: string;
}
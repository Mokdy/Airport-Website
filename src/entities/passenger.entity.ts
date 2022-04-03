import { BaseEntity, Column, Entity, JoinColumn, ManyToOne } from "typeorm";
import { PersonEntity } from "./person.entity";

@Entity({ name: "PASSENGER"})
export class PassengerEntity extends BaseEntity {
    @ManyToOne(() => PersonEntity, person => person.username, {primary: true})
    @JoinColumn({
        name: 'username',
    })
    username: PersonEntity;

    @Column({
        name: "miles",
        nullable: true
    })
    miles: number;

    @Column({
        name: "cardNumber",
        nullable: true
    })
    cardNumber: string;

    @Column({
        name: "expirationDate",
        nullable: true
    })
    expirationDate: string;

    @Column({
        name: "ccv",
        nullable: true
    })
    ccv: string;
}
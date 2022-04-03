import { BaseEntity, JoinColumn, Entity, Column, ManyToOne } from "typeorm";
import { FlightEntity } from "./flight.entity";
import { PersonEntity } from "./person.entity";


@Entity({ name: "WHITELIST"})
export class WhitelistEntity extends BaseEntity {
    
    @ManyToOne(() => PersonEntity, person => person.username, {primary: true})
    @JoinColumn({
        name: 'username',
    })
    username: PersonEntity;

    @ManyToOne(() => FlightEntity, flight => flight.flightId, {primary: true})
    @JoinColumn({
        name: 'flightId',
    })
    flight: FlightEntity;

    @Column({
        name: "class"
    })
    class: string;
}
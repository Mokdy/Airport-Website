import { PrimaryColumn, BaseEntity, Column, Entity, ManyToOne, OneToMany, JoinColumn, Index } from "typeorm";
import { FlightEntity } from "./flight.entity";
import { TicketEntity } from "./ticket.entity";

@Entity({ name: "SEAT_DETAILS"})

export class SeatDetailsEntity extends BaseEntity {
    @ManyToOne(() => FlightEntity, flight => flight.flightId, {primary: true})
    @JoinColumn({
        name: 'flightId',
    })
    flight: FlightEntity;

    @PrimaryColumn({
        name: 'seatNumber',
        type: 'varchar'
    })
    seatNumber: string

    @Column({
        name: "class",
        nullable: true
    })
    class: number;

    @Column({
        name: "price",
        nullable: true
    })
    price: number;

    @Column({
        name: "missingFine",
        nullable: true
    })
    missingFine : number;

    // @OneToMany(() => TicketEntity, ticket => ticket.seat)
    // tickets: TicketEntity[];
}
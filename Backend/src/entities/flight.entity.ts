import { BaseEntity, Column, Entity, PrimaryGeneratedColumn, JoinColumn, ManyToOne, OneToMany } from "typeorm";
import { PlaneEntity } from "./plane.entity";
import { SeatDetailsEntity } from "./seat-details.entity";
import { TicketEntity } from "./ticket.entity";
import { WhitelistEntity } from "./whitelist.entity";

@Entity({ name: "FLIGHT"})
export class FlightEntity extends BaseEntity {
    @PrimaryGeneratedColumn({
        name: 'flightId'
      })
    flightId: number

    @Column({
        name: "fromAirport",
        nullable: true
    })
    fromAirport: string;

    @Column({
        name: "toAirport",
        nullable: true
    })
    toAirport: string;

    @Column({
        name: "takeoffTime",
        nullable: true
    })
    takeoffTime: string;

    @Column({
        name: "landingoffTime",
        nullable: true
    })
    landingoffTime: string;

    @Column({
        name: "day",
        nullable: true,
        type: "int"
    })
    day: number;

    @Column({
        name: "month",
        nullable: true,
        type: "int"
    })
    month: number;

    @Column({
        name: "year",
        nullable: true,
        type: "int"
    })
    year: number;

    @ManyToOne(() => PlaneEntity, plane => plane.serialNumber)
    @JoinColumn({
        name: 'serialNumber',
    })
    plane: PlaneEntity;

    @OneToMany(() => TicketEntity, ticket => ticket.flight)
    tickets: TicketEntity[];

    @OneToMany(() => SeatDetailsEntity, seat => seat.flight)
    seats: SeatDetailsEntity[];

    @OneToMany(() => WhitelistEntity, whitelist => whitelist.flight)
    whitelisted: WhitelistEntity[];
}
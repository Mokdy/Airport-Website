import { PrimaryGeneratedColumn, BaseEntity, Column, Entity, ManyToOne, JoinColumn, OneToOne, ManyToMany, JoinTable } from "typeorm";
import { FlightEntity } from "./flight.entity";
import { PersonEntity } from "./person.entity";
import { SeatDetailsEntity } from "./seat-details.entity";

@Entity({ name: "TICKET"})
export class TicketEntity extends BaseEntity {
    @PrimaryGeneratedColumn({
        name: 'ticketId'
      })
      ticketId: string;

    @Column({
        name: "weight",
        type: 'int',
        nullable: true
    })
    weight: number;

    @OneToOne(() => SeatDetailsEntity, seat => seat.seatNumber)
    @JoinColumn([
        {name: 'seatNumber', referencedColumnName: 'seatNumber'},
        {name: 'flightId', referencedColumnName: 'flight'}
    ])
    seat: SeatDetailsEntity;

    @ManyToOne(() => FlightEntity, flight => flight.flightId)
    @JoinColumn({
        name: 'flightId',
    })
    flight: FlightEntity;

    @ManyToMany(() => PersonEntity)
    @JoinTable({
      name: 'BOOKING',
      joinColumn: {
        name: 'ticketId',
        referencedColumnName: 'ticketId',
      },
      inverseJoinColumn: {
        name: 'username',
        referencedColumnName: 'username',
      },
    })
    courses: PersonEntity[];
}
import { BaseEntity, Column, Entity, OneToMany, PrimaryColumn, ManyToMany, JoinTable } from "typeorm";
import { AdminEntity } from "./admin.entity";
import { PassengerEntity } from "./passenger.entity";
import { TicketEntity } from "./ticket.entity";
import { WhitelistEntity } from "./whitelist.entity";

@Entity({ name: "PERSON"})
export class PersonEntity extends BaseEntity {
    @PrimaryColumn({
        name: 'username',
        type: 'varchar'
      })
      username: string;

    @Column({
        name: "firstName",
        nullable: true
    })
    firstName: string;

    @Column({
        name: "middleName",
        nullable: true
    })
    middleName: string;
   
    @Column({
        name: "lastName",
        nullable: true
    })
    lastName: string;

    @Column({
        name: "sex",
        nullable: true
    })
    sex: string;

    @Column({
        name: "nationalId",
        nullable: true
    })
    nationalId: number;

    @Column({
        name: "password",
        nullable: false
    })
    password: number;

    @Column({
        name: "email",
        nullable: true
    })
    email: number;

    @OneToMany(() => WhitelistEntity, whitelist => whitelist.username)
    whitelist: WhitelistEntity[];

    @OneToMany(() => AdminEntity, admin => admin.username)
    admin: AdminEntity[];

    @OneToMany(() => PassengerEntity, passenger => passenger.username)
    passenger: PassengerEntity[];


    @ManyToMany(() => TicketEntity)
    @JoinTable({
      name: 'BOOKING',
      joinColumn: {
        name: 'username',
        referencedColumnName: 'username',
      },
      inverseJoinColumn: {
        name: 'ticketId',
        referencedColumnName: 'ticketId',
      },
    })
    courses: TicketEntity[];
}
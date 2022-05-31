import { BaseEntity, Column, Entity, OneToMany, PrimaryColumn } from "typeorm";
import { FlightEntity } from "./flight.entity";

@Entity({ name: "PLANE"})
export class PlaneEntity extends BaseEntity {
    @PrimaryColumn({
        name: 'serialNumber',
        type: 'varchar'
      })
    serialNumber: string;

    @Column({
        name: "economySeats",
        type: 'int',
        nullable: true
    })
    economySeats: number;

    @Column({
        name: "businessSeats",
        type: 'int',
        nullable: true
    })
    businessSeats: number;

    @Column({
        name: "firstClassSeats",
        type: 'int',
        nullable: true
    })
    firstClassSeats: number;

    @Column({
        name: "planeName",
        nullable: true
    })
    planeName: string;

    @Column({
        name: "weightCapacity",
        nullable: true
    })
    weightCapacity: number;

    @Column({
        name: "aircraftType",
        nullable: true
    })
    aircraftType: string;

    @Column({
        name: "daysUntilMaintenance",
        nullable: true,
        type: "int"
    })
    daysUntilMaintenance: number;

    @Column({
        name: "daysSinceMaintenance",
        nullable: true,
        type: "int"
    })
    daysSinceMaintenance: number;

    @OneToMany(() => FlightEntity, flight => flight.plane)
    flights: FlightEntity[];
}
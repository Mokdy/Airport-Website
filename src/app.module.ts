import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ConfigModule } from "@nestjs/config";
import { TypeOrmModule } from "@nestjs/typeorm";
import { PersonEntity } from './entities/person.entity';
import { AdminEntity } from './entities/admin.entity';
import { PassengerEntity } from './entities/passenger.entity';
import { PlaneEntity } from './entities/plane.entity';
import { FlightEntity } from './entities/flight.entity';
import { TicketEntity } from './entities/ticket.entity';
import { SeatDetailsEntity } from './entities/seat-details.entity';
import { WhitelistEntity } from './entities/whitelist.entity';

@Module({
  imports: [
    TypeOrmModule.forFeature([
      PersonEntity,
      AdminEntity,
      PassengerEntity,
      PlaneEntity,
      FlightEntity,
      TicketEntity,
      SeatDetailsEntity,
      WhitelistEntity
    ]),
    ConfigModule.forRoot({ isGlobal: true }),
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: "ruby.db.elephantsql.com",
      port: 5432,
      username: "rnwuwlff",
      password: "AkQzFFLUbx2vhH6T8bvjWU-BjOETClHd",
      database: "rnwuwlff",
      autoLoadEntities: true,
      synchronize: true,
    }),
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
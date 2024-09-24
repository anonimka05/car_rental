import { Module } from '@nestjs/common';
import { PgService } from 'src/postgres/pg.service';
import { ReservationServer } from './reservation.service';
import { ReservationController } from './reservation.controller';

@Module({
  providers: [PgService, ReservationServer],
  controllers: [ReservationController],
})
export class ReservationModule {}

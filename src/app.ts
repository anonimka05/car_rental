import { Module } from '@nestjs/common';
import { CarModule } from './modules/car/car.module';
import { UserModule } from './modules/user';
import { ReservationModule } from './modules/reservations';
import { ConfigModule } from '@nestjs/config';
import databaseConfig from './config/db.config';

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
      load: [databaseConfig]
    }),
    CarModule, UserModule, ReservationModule
  ],
})
export class AppModule {}

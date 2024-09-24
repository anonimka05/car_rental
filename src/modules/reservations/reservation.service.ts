import { Injectable } from '@nestjs/common';
import {
  CreateReservationRequest,
  UpdateReservationRequest,
} from './interface';
import { PgService } from '@postgres';

export declare interface User {
  id: number;
  car_name: string;
  user: string;
  total_price: number;
  start_data: string;
  end_data: string;
}

@Injectable()
export class ReservationServer {
  constructor(private readonly postgres: PgService) {}

  async getAllReservations(): Promise<any[]> {
    return await this.postgres.fetchData('SELECT * FROM reservation');
  }

  async getSinglReservation(reservationId: number): Promise<any> {
    return await this.postgres.fetchData(
      'SELECT * FROM reservation WHERE id = $1',
      +reservationId,
    );
  }

  async createReservation(payload: CreateReservationRequest): Promise<any> {
    try {
      console.log(payload);

      const newReservation = await this.postgres.fetchData(
        'INSERT INTO reservation ( car_name, user, total_price, start_data, end_data) VALUES ($1, $2, $3, $4, $5) RETURNING *',
        payload.car_name,
        payload.user,
        payload.start_data,
        payload.end_data,
        payload.total_price,
      );

      return newReservation[0];
    } catch (error) {
      console.error('DB error:', error);
      throw new Error(`Error in create reservation: ${error.message}`);
    }
  }

  async updateReservation(
    reservationId: number,
    payload: UpdateReservationRequest,
  ): Promise<any> {
    const update = await this.postgres.fetchData(
      'UPDATE reservation SET car_name = $1, user = $2, total_price = $3, start_data = $4, end_data = $5 WHERE id = $6 RETURNING *',
      payload.car_name,
      payload.user,
      payload.total_price,
      payload.start_data,
      payload.end_data,
      reservationId,
    );
    return update;
  }

  async deleteReservation(reservationId: number): Promise<any> {
    const user = await this.postgres.fetchData(
      'DELETE FROM reservation WHERE id = $1',
      reservationId,
    );

    return 'deleted';
  }
}

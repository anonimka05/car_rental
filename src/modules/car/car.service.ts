import { Injectable } from '@nestjs/common';
import { CreateCarRequest, UpdateCarRequest } from './interfaces';
import { PgService } from '@postgres';

export declare interface Car {
  id: number;
  name: string;
  model: string;
  price: number;
  year: number;
}

@Injectable()
export class CarService {
  constructor(private readonly postgres: PgService) {}

  async getAllCars(): Promise<any[]> {
    return await this.postgres.fetchData('SELECT * FROM cars');
  }

  async getSingleCar(carId: number): Promise<any[]> {
    return await this.postgres.fetchData(
      'SELECT * FROM cars WHERE id = $1',
      +carId,
    );
  }

  async createCar(payload: CreateCarRequest): Promise<any> {
    try {
      const newCar = await this.postgres.fetchData(
        'INSERT INTO cars (name, model, year, price) VALUES ($1, $2, $3, $4) RETURNING *',
        payload.name,
        payload.model,
        payload.year,
        payload.price,
      );
      return newCar[0];
    } catch (error) {
      console.error('Error creating car:', error);
      throw new Error('Failed to create car');
    }
  }

  async updateCar(carId: number, payload: UpdateCarRequest): Promise<any> {
    const update = await this.postgres.fetchData(
      'UPDATE cars SET name = $1, model = $2, year = $3, price = $4 WHERE id = $5 RETURNING *',
      payload.name,
      payload.model,
      payload.year,
      payload.price,
      carId,
    );
    return update;
  }

  async deleteCar(carId: number): Promise<any> {
    const car = await this.postgres.fetchData(
      'DELETE FROM cars WHERE id = $1',
      carId,
    );

    return 'deleted';
  }
}

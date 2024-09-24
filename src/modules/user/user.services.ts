import { Injectable } from '@nestjs/common';
import { CreateUserRequest, UpdateUserRequest } from './interfaces';
import { PgService } from '@postgres';

export declare interface User {
  id: number;
  name: string;
  phone: number;
  email: string;
}

@Injectable()
export class UserService {
  constructor(private readonly postgres: PgService) {}

  async getAllUsers(): Promise<any[]> {
    return await this.postgres.fetchData('SELECT * FROM "user"');
  }

  async getSinglUser(userId: number): Promise<any[]> {
    return await this.postgres.fetchData(
      'SELECT * FROM "user" WHERE id = $1',
      +userId,
    );
  }

  async createUser(payload: CreateUserRequest): Promise<any> {
    try {
      const newUser = await this.postgres.fetchData(
        'INSERT INTO "user" (name, phone, email) VALUES ($1, $2, $3) RETURNING *',
        payload.name,
        payload.phone,
        payload.email,
      );

      return newUser[0];
    } catch (error) {
      console.error('DB error:', error);
      throw new Error(`Error in create user: ${error.message}`);
    }
  }

  async updateUser(userId: number, payload: UpdateUserRequest): Promise<any> {
    const update = await this.postgres.fetchData(
      'UPDATE "user" SET name = $1, phone = $2, email = $3 WHERE id = $4 RETURNING *',
      payload.name,
      payload.phone,
      payload.email,
      userId,
    );
    return update;
  }

  async deleteUser(userId: number): Promise<any> {
    const user = await this.postgres.fetchData(
      'DELETE FROM "user" WHERE id = $1',
      userId,
    );

    return 'deleted';
  }
}

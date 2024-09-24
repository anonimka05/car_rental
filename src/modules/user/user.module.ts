import { Module } from '@nestjs/common';
import { UserService } from './user.services';
import { UserController } from './user.controller';
import { PgService } from 'src/postgres/pg.service';

@Module({
  providers: [PgService, UserService],
  controllers: [UserController],
})
export class UserModule {}

import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Patch,
  Post,
} from '@nestjs/common';
import { UserService } from './user.services';
import { CreateUserDto, UpdateUserDto } from './dtos';

@Controller({
  path: 'user',
})
export class UserController {
  constructor(private readonly userService: UserService) {}

  @Get('/')
  async getUsers(): Promise<any[]> {
    return await this.userService.getAllUsers();
  }

  @Get('/:userId')
  async getSingleUser(@Param('userId') userId: string): Promise<any> {
    return await this.userService.getSinglUser(+userId);
  }

  @Post('/add')
  async addUser(@Body() createUserData: CreateUserDto): Promise<any> {
    return await this.userService.createUser(createUserData);
  }

  @Patch('/:userId')
  async updateUserServise(
    @Param('userId') userId: string,
    @Body() updateUserData: UpdateUserDto,
  ): Promise<any> {
    return await this.userService.updateUser(+userId, {
      ...updateUserData,
      id: +userId,
    });
  }

  @Delete('/:userId')
  async deleteUserServise(@Param('userId') userId: string): Promise<any> {
    return await this.userService.deleteUser(+userId);
  }
}

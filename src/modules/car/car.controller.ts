import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Patch,
  Post,
} from '@nestjs/common';
import { CreateCarDto, UpdateCarDto } from './dtos';
import { CarService } from './car.service';

@Controller({
  path: '/cars',
})
export class CarController {
  constructor(private readonly carService: CarService) {}

  @Get('/')
  async getCars(): Promise<any[]> {
    return await this.carService.getAllCars();
  }

  @Get('/:carId')
  async getSingleCar(@Param('carId') carId: string): Promise<any> {
    return await this.carService.getSingleCar(+carId);
  }

  @Post('/add')
  async addCar(@Body() createCarData: CreateCarDto): Promise<any> {
    return await this.carService.createCar(createCarData);
  }

  @Patch('/update/:carId')
  async updateCarServise(
    @Param('carId') carId: string,
    @Body() updateCarData: UpdateCarDto,
  ): Promise<any> {
    return await this.carService.updateCar(+carId, {
      ...updateCarData,
      id: +carId,
    });
  }

  @Delete('/:carId')
  async deleteCarServise(@Param('carId') carId: string): Promise<any> {
    return await this.carService.deleteCar(+carId);
  }
}

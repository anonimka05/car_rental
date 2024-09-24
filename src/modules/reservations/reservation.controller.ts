import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Patch,
  Post,
} from '@nestjs/common';
import { CreateReservationDto, UpdateReservationDto } from './dtos';
import { ReservationServer } from './reservation.service';

@Controller({
  path: 'reservation',
})
export class ReservationController {
  constructor(private readonly reservationService: ReservationServer) {}

  @Get('/')
  async getReservations(): Promise<any[]> {
    return await this.reservationService.getAllReservations();
  }

  @Get('/:reservationId')
  async getSingleReservation(
    @Param('reservationId') reservationId: string,
  ): Promise<any> {
    return await this.reservationService.getSinglReservation(+reservationId);
  }

  // @Post('/add')
  // async addReservation(
  //   @Body() createReservationData: CreateReservationDto,
  // ): Promise<any> {
  //   return await this.reservationService.createReservation({
  //     ...createReservationData,
  //   });
  // }

  @Post('/add')
  async addReservation(
    @Body() createReservationData: CreateReservationDto,
  ): Promise<any> {
    return await this.reservationService.createReservation({
      ...createReservationData, // DTO da qanday formatda bo'lsa, shunday yuboriladi
    });
  }

  @Patch('/:reservationId')
  async updateReservationService(
    @Param('reservationId') reservationId: string,
    @Body() updateReservationData: UpdateReservationDto,
  ): Promise<any> {
    return await this.reservationService.updateReservation(+reservationId, {
      ...updateReservationData,
      id: +reservationId,
      total_price: +updateReservationData.total_price,
    });
  }

  @Delete('/:reservationId')
  async deleteUserServise(
    @Param('reservationId') reservationId: string,
  ): Promise<any> {
    return await this.reservationService.deleteReservation(+reservationId);
  }
}

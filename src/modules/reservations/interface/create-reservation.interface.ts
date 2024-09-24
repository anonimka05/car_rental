export declare interface CreateReservationRequest {
  car_name: string;
  user: string;
  start_data: string;
  end_data: string;
  total_price: number;
}

export declare interface UpdateReservationRequest {
  id: number;
  car_name: string;
  user: string;
  start_data: string;
  end_data: string;
  total_price: number;
}

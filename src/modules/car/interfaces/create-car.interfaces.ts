export declare interface CreateCarRequest {
  name: string;
  model: string;
  price: number;
  year: number;
}
export declare interface CreateCarResponse {
  id: number;
  name: string;
  model: string;
  price: number;
  year: number;
}

export declare interface UpdateCarRequest {
  id: number;
  name: string;
  model: string;
  price: number;
  year: number;
}
export declare interface UpdateMCarResponse {
  id: number;
  name: string;
  model: string;
  price: number;
  year: number;
}

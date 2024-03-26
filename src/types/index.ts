export interface ICart {
    pizzaId?: string,
    name?: string,
    quantity?: number,
    unitPrice?: number,
    totalPrice?: number,
}

export interface IOrder  {
  id: string,
  customer: string,
  phone: string,
  address: string,
  priority?: boolean,
  estimatedDelivery: string,
  cart: ICart[] | [],
  position?: string,
  orderPrice: number,
  priorityPrice?: number,
  createdAt?: string
};

export interface IPizza {

    id: string;
    name: string;
    unitPrice: number;
    ingredients: string[];
    soldOut: boolean;
    imageUrl: string;
 
}
export enum STATUS {
  IDLE= "idle",
  LOADING = "loading",
  ERROR = "error"
}
export interface IUser {
  username: string,
  status: STATUS,
  address: string,
  position?:{},
  error?: string,
  order?: IOrder[]
}


export interface ReactRouterActionType {
  request: Request
}

export interface IFormError {
  phone?: string
}
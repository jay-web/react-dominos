
import { getMenu, getOrder } from "../services/apiRestaurant"
import { IOrder } from "../types";


export const getMenuLoader = async () => {
    const menu = await getMenu();
    return menu;
}


export const getOrderLoader = async ({ params }:any): Promise<IOrder> => {
    
    const order:IOrder = await getOrder(params.orderId);            // Call service

    return order;
}


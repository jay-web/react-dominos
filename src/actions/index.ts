import { redirect } from "react-router-dom";
import { createOrder, updateOrder } from "../services/apiRestaurant"
import {  IFormError, IOrder, ReactRouterActionType } from "../types";
import Store from "../store";
import { clearCart } from "../features/cart/cartSlice";
import { addOrder } from "../features/user/userSlice";




// https://uibakery.io/regex-library/phone-number
const isValidPhone = (str:string) =>
  /^\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}$/.test(
    str
  );


export const createOrderAction = async ({ request }: ReactRouterActionType) => {

    const formData = await request.formData();
    const data:IOrder | any = Object.fromEntries(formData);

    const order:IOrder = {
        ...data,
        cart: JSON.parse(data.cart as string),
        priority: data.priority === 'true'
    }
    
    
    const errors:IFormError = {};
    if(!(isValidPhone(order.phone))){
        errors.phone = "Please enter valid phone number. We might need to use to contact with you."
    }

    if(Object.keys(errors).length > 0){
        return errors;
    }

    const newOrder = await createOrder(order);
 
    Store.dispatch(clearCart());
    Store.dispatch(addOrder(newOrder));
    return redirect(`/order/${newOrder.id}`);
}

export const updateOrderPriorityAction = async ({params }) => {
  const data = { priority: true};
  await updateOrder(params.orderId, data);
  return null;
}


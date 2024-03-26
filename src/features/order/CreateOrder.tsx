// import { useState } from "react";

import { Form, useActionData, useNavigation } from "react-router-dom";
import Button from "../../ui/Button";
import { useDispatch, useSelector } from "react-redux";
import { getCart, getTotalItemsPrice } from "../cart/cartSlice";
import { formatCurrency } from "../../utils/helpers";
import { useState } from "react";
import { fetchAddress, getUser } from "../user/userSlice";
import FormError from "./FormError";
import { AppDispatch } from "../../store";
import { IFormError } from "../../types";



function CreateOrder() {
  const [withPriority, setWithPriority] = useState("false");
  const formErrors: IFormError = useActionData();
  const navigation = useNavigation();
  const dispatch = useDispatch<AppDispatch>();
  const isSubmitting = navigation.state === "submitting";

  const cart = useSelector(getCart);
  const {username, address, position, error, status } = useSelector(getUser);
  const getCartTotalPrice = useSelector(getTotalItemsPrice);
  const priorityPrice = withPriority ? getCartTotalPrice * 0.2 : 0;
  const totalPrice = getCartTotalPrice + priorityPrice;


  const getCustomerPosition = (e) => {
    e.preventDefault();
    dispatch(fetchAddress())
  }

  return (
    <div className="px-4 py-6">
      <h2 className="text-xl font-semibold mb-8">Ready to order? Let's go!</h2>

      <Form method="POST">
        <div className="mb-5 flex gap-2 flex-col sm:flex-row sm:items-center">
          <label className="sm:basis-40">First Name</label>
          <input className="input grow" type="text" name="customer" defaultValue={username} required />
        </div>

        <div className="mb-5 flex gap-2 flex-col sm:flex-row sm:items-center">
          <label className="sm:basis-40">Phone number</label>
          <div className="grow">
            <input className="input w-full" type="tel" name="phone" required />
            {formErrors?.phone && <FormError error={formErrors.phone} />}
          </div>
         
        </div>

        <div className="mb-5 flex gap-2 flex-col sm:flex-row sm:items-center relative">
          <label className="sm:basis-40">Address</label>
          <div className="grow">
            <input type="text" name="address" className="input w-full" defaultValue={address} required/>
            {status == "error" && <FormError error={error} />}
          </div>
          {!position.longitude && !position.latitude &&
          <span className="absolute right-1 md:top-2">
           <Button type="small" onClickHandler={getCustomerPosition}  >Get Position</Button> 
            </span>
            }
        </div>

        <div className="my-4 flex space-x-4">
          <input
            type="checkbox"
            name="priority"
            id="priority"
            className="h-6 w-6 accent-yellow-500 focus:outline-none focus:ring focus:ring-yellow-400 focus:ring-offset-2 transition-all duration-300"
            value={withPriority}
            onChange={(e) => setWithPriority(e.target.checked ? "true" : "false")}
          />
          <label htmlFor="priority" className="">Want to give your order priority? <span className="text-xm font-bold">(20% extra price )</span></label>
        </div>

        <div>
          <input type="hidden" name="cart" value={JSON.stringify(cart)} />
          <input type="hidden" name="position" value={position.latitude && position.longitude ? `${position.longitude,position.latitude}` : ""} />
          <Button type="primary" disabled={isSubmitting} >{isSubmitting ? "Placing your order..." : `Order now for ${formatCurrency(totalPrice)}`  }</Button>
        </div>
      </Form>
    </div>
  );
}

export default CreateOrder;

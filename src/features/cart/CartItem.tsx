
import { useSelector } from "react-redux";
import { formatCurrency } from "../../utils/helpers";
import DeleteItem from "./DeleteItem";
import UpdateItemQuantity from "./updateItemQuantity";
import { getItemQuantityInCart } from "./cartSlice";
import { ICart } from "../../types";

interface Item  {
  item: ICart

}

function CartItem({ item }:Item) {
  const { pizzaId, name, quantity, totalPrice } = item;
  const currentItemQuantityInCart = useSelector(getItemQuantityInCart(pizzaId));


  return (
    <li className="py-3 sm:flex sm:items-center sm:justify-between">
      <p className="mb-1">
        {quantity}&times; {name}
      </p>
      <div className="flex items-center justify-between sm:gap-6">
        <p className="text-sm font-bold">{formatCurrency(totalPrice)}</p>
        <UpdateItemQuantity pizzaId={pizzaId} currentItemQuantityInCart={currentItemQuantityInCart} />
        <DeleteItem pizzaId= {pizzaId} />
      </div>
    </li>
  );
}

export default CartItem;

import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { getTotalItemsPrice, getTotalItemsQuantity } from "./cartSlice";
import { formatCurrency } from "../../utils/helpers";

function CartOverview() {
  const totalCartItemQuantity = useSelector(getTotalItemsQuantity);
  const totalCartItemPrice = useSelector(getTotalItemsPrice);

  if(totalCartItemQuantity == 0) return null;
  
  return (
    <div className="bg-stone-800 text-stone-300 self-end uppercase px-4 py-4  text-sm sm:px-6 md:text-base flex items-center justify-between">
      <p className="space-x-4 font-semibold text-stone-300 sm:space-x-6">
        <span>{totalCartItemQuantity} pizzas</span>
        <span>{formatCurrency(totalCartItemPrice)}</span>
      </p>
      <Link to="/cart">Open cart &rarr;</Link>
    </div>
  );
}

export default CartOverview;

import { useDispatch, useSelector } from "react-redux";
import Button from "../../ui/Button";
import { formatCurrency } from "../../utils/helpers";
import { addItem, getItemQuantityInCart } from "../cart/cartSlice";
import { IPizza } from "../../types";
import DeleteItem from "../cart/DeleteItem";
import UpdateItemQuantity from "../cart/updateItemQuantity";

interface IMenuItem {
  pizza: IPizza
}

function MenuItem({ pizza }: IMenuItem) {
  const { id, name, unitPrice, ingredients, soldOut, imageUrl } = pizza;
  const dispatch = useDispatch();
  const currentItemQuantityInCart = useSelector(getItemQuantityInCart(id));
  const isItemInCart = currentItemQuantityInCart > 0;

  const clickHandler = () => {
    const newItem = {
      pizzaId: id,
      name: name,
      quantity: 1,
      unitPrice: unitPrice,
      totalPrice: unitPrice * 1,
    };
    dispatch(addItem(newItem));
  };

  return (
    <li className="flex gap-4 py-2">
      <img
        src={imageUrl}
        alt={name}
        className={`h-24 rounded-md ${soldOut ? "grayscale opacity-70" : ""}`}
      />
      <div className="flex flex-col grow">
        <p className="font-medium">{name}</p>
        <p className="text-sm italic text-stone-500 capitalize">
          {ingredients.join(", ")}
        </p>
        <div className="mt-auto flex items-center justify-between">
          {!soldOut ? (
            <p className="text-sm">{formatCurrency(unitPrice)}</p>
          ) : (
            <p className="text-sm uppercase text-stone-500 font-medium">
              Sold out
            </p>
          )}

          {isItemInCart && (
            <div className="flex items-center justify-between gap-3 md:gap-4">
              <UpdateItemQuantity pizzaId={id} currentItemQuantityInCart={currentItemQuantityInCart}/>
              <DeleteItem pizzaId={id} />
            </div>
          )}
          {!soldOut && !isItemInCart && (
            <Button type="small" onClickHandler={clickHandler}>
              Add to Cart
            </Button>
          )}
        </div>
      </div>
    </li>
  );
}

export default MenuItem;

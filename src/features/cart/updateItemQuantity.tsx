import { useDispatch } from "react-redux";
import Button from "../../ui/Button";
import { decreaseItemQuantity, increaseItemQuantity } from "./cartSlice";

type PizzaId = {
    pizzaId: string,
    currentItemQuantityInCart: number
}
const UpdateItemQuantity = ({ pizzaId, currentItemQuantityInCart }: PizzaId) => {
    const dispatch = useDispatch();

    return <div className="flex items-center justify-between gap-2">
        <Button type="round" onClickHandler={() => dispatch(increaseItemQuantity(pizzaId))}>+</Button>
        <span>{currentItemQuantityInCart}</span>
        <Button type="round" onClickHandler={() => dispatch(decreaseItemQuantity(pizzaId))}>-</Button>
    </div>
}

export default UpdateItemQuantity;
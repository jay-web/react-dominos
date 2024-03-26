import { useDispatch } from "react-redux";
import Button from "../../ui/Button";
import { deleteItem } from "./cartSlice";

type DeleteItemProps = {
    pizzaId: string
}

const DeleteItem = ({pizzaId}:DeleteItemProps) => {
    const dispatch = useDispatch();

    return <Button type="small" onClickHandler={() => dispatch(deleteItem(pizzaId))}>Delete</Button>
}

export default DeleteItem;
import { Link } from "react-router-dom";
import { useAppSelector } from "../../store";
import { formatDate } from "../../utils/helpers";

const OrderSummary = () => {
  const order = useAppSelector((state) => state.user.order);

  return (
    <div className="mt-4 mx-3 md:mx-0">
      {order.length > 0 && (
        <div className="flex flex-col divide divide-y-2 space-y-4">
          {order.map((item) => {
            return (
              <Link to={`/order/${item.id}`} key={item.id} className="px-3 py-3 bg-stone-200 rounded-xl  transition-all duration-300 hover:bg-stone-100">
                <p className="font-semibold">Order ID: {item.id}</p>
                <ul className="my-2">
                  {item.cart.map((pizza) => (
                    <li key={`${pizza.name}-${item.id}`} className="italic"> {pizza.name}</li>
                  ))}
                </ul>
                <p className="font-semibold text-xs">Ordered At: {formatDate(item.createdAt)}</p>
              </Link>
            );
          })}
        </div>
      )}
    </div>
  );
};

export default OrderSummary;

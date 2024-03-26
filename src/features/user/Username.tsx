
import { useAppSelector } from "../../store";
import { Link } from "react-router-dom";


const Username = () => {

  const { username, order } = useAppSelector((state) => state.user);



  return (
    <div className="flex items-center justify-center gap-1 flex-wrap">
      <span>{username}</span>
     {order.length > 0 && 
      <Link to={`/order/orderSummary`} 
            className="text-xs border-l-2 border-stone-200 px-2 ml-2  hover:text-stone-900">
              Order Summary
      </Link>}
    </div>
    
  );
};

export default Username;

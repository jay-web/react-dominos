import "./App.css";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Home from "./ui/Home";
import Menu from "./features/menu/Menu";
import CreateOrder from "./features/order/CreateOrder";
import Order from "./features/order/Order";

import AppLayout from "./ui/AppLayout";
import {  getMenuLoader, getOrderLoader } from "./loaders";
import { createOrderAction, updateOrderPriorityAction } from "./actions";
import Error from "./ui/ErrorPage";
import Cart from "./features/cart/Cart";
import OrderSummary from "./features/order/OrderSummary";



const router = createBrowserRouter([
  {
    element: <AppLayout />,
    errorElement: <Error />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/menu",
        element: <Menu />,
        loader: getMenuLoader,
        errorElement: <Error />,
      }, {
        path: "/cart",
        element: <Cart />,
        errorElement: <Error />,
      },
      {
        path: "/order/new",
        element: <CreateOrder />,
        action: createOrderAction
      },
      {
        path: "/order/:orderId",
        element: <Order />,
        loader: getOrderLoader,
        errorElement: <Error />,
        action:updateOrderPriorityAction
      },
      {
        path: "/order/orderSummary",
        element: <OrderSummary />,
        errorElement: <Error />,
      
      },
    ],
  },
]);

function App() {
  return (
    <>
      <RouterProvider router={router}></RouterProvider>
    </>
  );
}

export default App;

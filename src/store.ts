import { configureStore } from "@reduxjs/toolkit";
import userReducer from "./features/user/userSlice";
import cartReducer from "./features/cart/cartSlice";
import { TypedUseSelectorHook, useDispatch, useSelector } from "react-redux";


const Store = configureStore({
    reducer: {
        user: userReducer,
        cart: cartReducer
    }
});

export default Store;

export type AppDispatch = typeof Store.dispatch;
export type IRootState = ReturnType<typeof Store.getState>

export const useAppDispatch = () => useDispatch<AppDispatch>();
export const useAppSelector: TypedUseSelectorHook<IRootState> = useSelector;
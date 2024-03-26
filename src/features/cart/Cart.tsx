import { useDispatch } from 'react-redux';

import Button from '../../ui/Button';
import CartItem from './CartItem';
import { clearCart } from './cartSlice';
import EmptyCart from './EmptyCart';
import { useAppSelector } from '../../store';
import { ICart } from '../../types';




function Cart() {
  // const cart = fakeCart;
  const cart= useAppSelector<ICart[]>(state => state.cart.cart);
  const username = useAppSelector<String>(state => state.user.username);
  const dispatch = useDispatch();

  const clearCartHandler = () => {
    dispatch(clearCart())
  }

  if(!cart.length) return <EmptyCart />

  return (
    <div className='px-4 py-3'>
    <Button type='small' to="/menu">&larr; Back to menu</Button>

      <h2 className='mt-7 text-xl font-semibold'>Your cart, {username}</h2>

      <ul className='mt-3 divide-y divide-stone-300 border-b '>
        {cart.map(item => {
          return <CartItem item={item} key={item.pizzaId}/>
        })}
      </ul>

      <div className='mt-6 space-x-4' >
        <Button type='primary'  to="/order/new">Order pizzas</Button>
        <Button type='secondary' onClickHandler={clearCartHandler}>Clear cart</Button>
      </div>
    </div>
  );
}

export default Cart;


import Button from '../../ui/Button';

function EmptyCart() {
  return (
    <div className='py-4 px-3'>
      <Button type='small' to="/menu">&larr; Back to menu</Button>

      <p className='font-semibold mt-7'>Your cart is still empty. Start adding some pizzas :)</p>
    </div>
  );
}

export default EmptyCart;

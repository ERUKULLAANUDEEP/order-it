import { Menu } from '../../state/appContext';
import './cart.css'
import Cartcard from './cartCard/cartCart';

interface CartProps {
    cartData: Menu[]
}


const Cart = (props: CartProps) => {
    return(
        <div className='cart'>
            <div className='cart-header'>
               <div>Cart Summary</div>
            </div>
            <div className='cart-items'>
                {props.cartData.map((data: Menu) => <Cartcard 
                foodname={data.foodname}
                price={data.price}
                quantity={data.quantity}
                item={data}
                />)}
                <div>
                    <button> proceed..</button>
                </div>
            </div>
        </div>
    )
}

export default Cart;
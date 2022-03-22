import { useContext } from 'react';
import { CartState, Menu } from '../../../state/appContext';
import './cart-card.css'

interface card {
    foodname: string;
    price: number;
    quantity?: number;
    item: Menu;
}



const Cartcard = (props: card) => {
    const invokemanageCart : any = useContext(CartState);
    return(
        <div className='card'>
            <div style={{'color': 'blue', 'padding': '15px'}}>{props.foodname}</div>
            <div className='card-details'>
                <div> {props.quantity}  x  item </div>
                <div>{(props.quantity || 1) * props.price * 90}</div>
                <button onClick={() => invokemanageCart(props.item, 'deleteFromCart') }>remove</button>
            </div>

        </div>
    )
}

export default Cartcard
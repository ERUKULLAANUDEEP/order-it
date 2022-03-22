
import { createRef, MutableRefObject, useContext } from 'react';
import { CartOperations, inputForIncreaseQuantity } from '../../reducers/cartReducer';
import { AppState, Menu } from '../../state/appContext';
import './items.css'

interface itemProps{
    selectedItem: string;
    invokeCartStateUpdate: (item: Menu | inputForIncreaseQuantity, type: CartOperations) => void
    cartData: Menu[]
}


const Items = (props: itemProps) => {
    const apiData: any =  useContext(AppState)
    const selectedData = (apiData?.menu || []).filter((item: Menu) => item.category == props.selectedItem)
    
    const dispatchingIncreasedItemQuantity = ( data: Menu ,el?: any) => {
        console.log("cartdata:", props.cartData)
        if( !props.cartData.length || !props.cartData.find((item)=> item.foodid === data.foodid )) {
            props.invokeCartStateUpdate({...data, quantity: 1}, 'addToCart')
        } else {
            props.invokeCartStateUpdate({'quantity': el.target.value, foodid: data.foodid}, 'increaseQuantity')
        }
    }
    
    return (

        <div className="menu">
            {/* <div className='header'>
                <div className='text'>
                    <h1> Main Course</h1>
                    <p> when you have every favourite dishes in a plate </p>
                </div>
            </div> */}
            {        
        (selectedData || []).map((data: Menu) => {
            return(
            <div className='menu-item' key = {data.foodid}> 
                <img src={data.imageurl}/>
                <div style={{"position": "relative"}}>
                    <div className='item-header'>
                        <h3>{data.foodname}</h3>
                        <div>{data.price * 65 + '₹'}</div>
                        <button onClick = { () => dispatchingIncreasedItemQuantity(data) }>
                            Add To Cart
                        </button>
                    </div>
                    <p>{data.fooddescription}</p>
                    <div className= "user-input">
                        <div>
                            <h5>Quantity</h5>
                            <input type="number" defaultValue={1} min={1} onChange={(el) => dispatchingIncreasedItemQuantity(data, el)}/>
                        </div>
                        <div >
                            <h5>Notes to the kitchen</h5>
                            <input type="text" />
                        </div>
                        <div >
                            <h5>Sub Total</h5>
                            <input type="number" />
                        </div>
                    </div>

                </div>
                <hr />
            </div>
            )
        })}
            <div></div>
        </div>
    )
}

export default Items;
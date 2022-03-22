import { useEffect, useReducer, useState } from "react"
import manageCartItems, { CartOperations, inputForIncreaseQuantity } from "../../reducers/cartReducer"
import { AppState, CartState, Menu } from "../../state/appContext"
import Cart from "../cart/cart"
import Items from "../Items/items"
import SideBar from "../sidebar/sidebar"
import "./wrapper.css"

const fetchData = async () => {
    const data = await  fetch('https://smartqdemo.firebaseio.com/events-data.json')
    const jsonData = await data.json()
    console.log("data:", data, jsonData)
    return jsonData;
}

const Wrapper = () => {
    const [data, setData] = useState({})
    const [cartState, manageCart] = useReducer(manageCartItems, [])
    const [selectedItem, setSelectedItem] = useState('Consumables')
    
    useEffect( () => {
        fetchData()
        .then(data => {
            setData(data)
        })
        .catch(err=>console.error(err))
    },[])

    const invokeCartStateUpdate = (item: Menu | inputForIncreaseQuantity , type: CartOperations) => {
        if(type === 'addToCart'){
            console.log("item:", item, 'type:', type);
            manageCart({type: 'addToCart', data: item})
        } else if(type === 'increaseQuantity') {
            manageCart({type: 'increaseQuantity', data: item})
        }
         else {
            manageCart({type: 'deleteFromCart', data: item})
        }
    }

    const changeSelectedItem = (item: string) => {
        setSelectedItem(item);
    }

    return(
        <AppState.Provider value={data}>
            <div className="wrapper">
            <SideBar onChange = {changeSelectedItem}/>
            <Items selectedItem = {selectedItem} 
            invokeCartStateUpdate = {invokeCartStateUpdate}
            cartData = {cartState}
            />
            <CartState.Provider value={invokeCartStateUpdate}> 
                    <Cart cartData = {cartState}/>
            </CartState.Provider>
        </div>
        </AppState.Provider>
        
    )
}

export default Wrapper;
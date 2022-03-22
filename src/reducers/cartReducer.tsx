import { Menu } from "../state/appContext";

export type CartOperations = "addToCart" | "deleteFromCart" | "increaseQuantity";

export interface inputForIncreaseQuantity {
   foodid: string;
   quantity: number;
}


interface CartInput {
    type: CartOperations;
    data: Menu | inputForIncreaseQuantity;
}


const findItem = (allItems: Menu[], loadedItem: Menu) =>
  allItems.find((item: Menu) => item.foodid === loadedItem.foodid);


const manageCartItems = (state: Menu[], action: CartInput ): Menu[] => {
  console.log("into manage cartitems")
  switch (action.type) {
    case "addToCart": {
      console.log("add to cart case");
      if (!findItem(state, action.data as Menu)) {
        let dup: Menu[] =[]
        console.log("into if loop");
        dup = [...state]
        dup.push(action.data as Menu)
        return dup;
      }
      return state;
    }

    case "increaseQuantity": {
       const indexofSelectedItem = state.findIndex(item => item.foodid === action.data.foodid);
       const data = [...state];
       data[indexofSelectedItem].quantity = (action.data as inputForIncreaseQuantity).quantity
       return data;
    }

    case "deleteFromCart": {
      const data = [...state]
      const index = data.indexOf(action.data as Menu);
      data.splice(index, 1);
      return data;
    }
    default: {
        return state;
    }
  }
};

export default manageCartItems;

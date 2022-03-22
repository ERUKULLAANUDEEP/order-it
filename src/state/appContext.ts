import React from "react";


type Category = "Pizza" | "Consumables" | "Decorations" | ""
type SessionList = "BREAKFAST" | "LUNCH" | "SNACKS" | "DINNER" | ""

type Headers = {
    bannerImage: string;
    icon: string;
}
interface Categories {
    Consumables: Headers;
    Decorations: Headers;
    Pizza: Headers;
}
interface PaymentType {
    label: string;
    value: string;
}
type Extras = Categories


export interface Menu {
    category: Category
    fooddescription: string;
    foodid: string;
    foodname: string;
    imageurl: string;
    price: number;
    sessionlist: SessionList[];
    submenu: string[];
    quantity?: number;
}


interface SubMenuItem {
    imageurl: string;
    price: string;
}
interface SubMenu {
    BlackOlives: SubMenuItem;
    ExtraCheese: SubMenuItem;
    FreshGarlic: SubMenuItem;
    GreenPepper: SubMenuItem;
    Mushroom: SubMenuItem;
    Onion: SubMenuItem;
    Pepperoni: SubMenuItem;
    Sausage: SubMenuItem;
}
export interface AppState {
    extras: Extras;
    menu: Menu[];
    paymentMethods: PaymentType[];
    submenu: SubMenu | {}
};

export const AppState = React.createContext({})

export const CartState = React.createContext({})
import { createSlice } from "@reduxjs/toolkit";
import { Products } from "../../data/products";

interface CartState {
    cart: Products[];
}

// estado inicial 
// no redux todo estado é um objeto 
// inicialmente começa um array vazio 
const initialState: CartState = {
 cart: []
}

export const CartSlice = createSlice({
    initialState,
    name: "cart",
    reducers:{
        addProduct:(state,action) => {
            state.cart = [
                ...state.cart,
                action.payload, // produto que deseja adicionar no carrinho. 
            ]
        },
        RemoveProduct:(state,action) => {
            const productToRemove = action.payload;
            const newCart= state.cart.filter(product => product.id !== productToRemove.id);
        
            state.cart = newCart;
         
        }
    }
})

export const {addProduct,RemoveProduct} = CartSlice.actions
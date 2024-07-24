import { Products } from "../../data/products";

// estado dos produtos do carrinho 
// tipagem do estado
interface CartState {
    cart: Products[];
}

// estado inicial 
// no redux todo estado é um objeto 
// inicialmente começa um array vazio 
const initialState: CartState = {
 cart: []
}

// tipagem para action
interface CartAction {
    type: string;
    payload: Products;
}

// muito comum no redux lidar com as actions utilizando switch
// Todos reducers precisam estar no root reducer
// state -> valor atual do estado  e action -> ação que vai ser despachada
export function cartReducer(state = initialState, action: CartAction) {
    switch (action.type) {
        case 'cart/add-product':
            return {
                ...state,
                cart: [
                    ...state.cart,
                    action.payload // produto que se deseja adicionar ao carrinho 
                ]
            }   
        case 'cart/remove-product': {
            const productToRemove = action.payload;
            const newCart= state.cart.filter(product => product.id !== productToRemove.id);
        return {
            ...state,
            cart: newCart
         }
     }
     default:
        return state; 
    }
    
}
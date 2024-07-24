import { combineReducers } from "redux"
import { userSlice } from "./UserReduce/user-slice"
import { CartSlice } from "./Cart/cart.slice"

// combinar todos reduces em um so
export const rootReducer = combineReducers({
    userReducer: userSlice.reducer,
    cartReducer: CartSlice.reducer
})

export type RootReducer = ReturnType<typeof rootReducer>
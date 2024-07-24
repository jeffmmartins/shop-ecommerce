import { rootReducer } from "./root.reducer"
import logger from 'redux-logger'
import { configureStore } from "@reduxjs/toolkit"



// criando o store 
export const store = configureStore({
    reducer: rootReducer,
    middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(logger),
})
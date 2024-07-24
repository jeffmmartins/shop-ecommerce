import { createSlice } from "@reduxjs/toolkit";


interface User {
    name:string;
    email:string;
}

// 3- passo 
// definindo a tipagem do estado 
interface UserState {
    user: User | null ;
}

// 2- passo 
const initialState: UserState = {
    user: null,
}

// 1 - passo 
// name é como se fosse o nome do reduce
//reducers são como se fosse as actions, colocamos os metodos que representam as actions. 
export const userSlice = createSlice({
    initialState,
    name: 'user',
    reducers:{
        //primeira action para lidar com o login
        login: (state, action) => {
            state.user = action.payload;
        },
        logout: (state, action) => {
            state.user = null;
        }
    }
})

// exportar as actions 
export const {login, logout} = userSlice.actions
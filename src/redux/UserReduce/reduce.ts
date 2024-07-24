// caixa que guarda o estado que vamos armazenar e queremos compartilhar 
// caixa que vamos guardar os dados do usuario 
// quando aplicação iniciar nao vai ter nada do usuario

interface User {
    name:string;
    email:string;
}

// definindo a tipagem do estado 
interface UserState {
    user: User | null ;
}

const initialState: UserState = {
    user: null,
}

// Reduce: Guarda o estado  que desejamos compartilhar na aplicação
//         Manipula/ altera estado

interface UserAction {
    type: string;
    payload?: User;
}

// estado do usuario vem no payLoad da action
// inicializando com nulo. 
// essa função é que vai alterar o estado 
// no user/login o ideal é começar com nome do reducer + ação que quer tratar.
// lidar com duas ações , primeira é  a do login e segundo a do logOUt
// todo reducer precisa retornar o nosso estado atualizado
export function userReducer(state = initialState, action: UserAction): UserState {
   if(action.type === 'user/login'){
    return {
        ...state,
        user: action.payload as User,
    }
   }else if (action.type === 'user/logout') {
    return {
        ...state,
        user: null,
    }
   }
   
    return state;
}
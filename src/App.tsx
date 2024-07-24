import { Provider } from "react-redux"
import { Header } from "./components/Header"
import { ProductList } from "./components/ProductsList/ProductList"
import { GlobalStyle } from "./style/GlobalStyle"
import { store } from "./redux/store"


function App() {
  return (
    //envolvendo app no provider do reduce 
    // store - ideia de armazenar , passando o que estamos armazenando
    <Provider store={store}>
      
      <Header/>

      <ProductList/>

      <GlobalStyle/>
    </Provider>
  )
}

export default App
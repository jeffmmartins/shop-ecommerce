import { render } from "@testing-library/react"
import { Cart } from "./Cart"
import { Provider } from "react-redux"
import { store } from "../../redux/store"


describe('Cart > Unit Test', () => {
    it('Should render an empty cart correctly', () => {
        render(
        <Provider store={store}>
         <Cart  showCart={true}/>
        </Provider>) // indica se o cart deve ser mostrado ou não. 
    })
})
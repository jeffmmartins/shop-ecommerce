import { render, screen } from "@testing-library/react"
import { Cart } from "./Cart"
import { products } from "../../data/products"
import { useDispatch } from "react-redux"

const cart = products.slice(0, 2) // obetendo apenas dois produtos do array 

// para verificar se ela foi chamada ou não 
const mockDispaatch = jest.fn()


// Mock: tornar a biblioteca redux fake 
// metodo do jest para mockar as coisas 
// vai ser chamado porem nao vai acontecer nada
// posso também passar o que essa biblioteca deve retornar .
jest.mock('react-redux', () => {
    return{
        useDispatch: () => {
            return mockDispaatch; // agora informa o que é esse usedispatch retorna uma função  , mockanco uma função. 
    }
}})

describe('Cart > Unit Test', () => {
    it('Should render an empty cart correctly', () => {
        render(<Cart  showCart={true} cart={[]}/>) // indica se o cart deve ser mostrado ou não, passando o cart vazio porque é a proposta do teste 
        
        // testando se tem o title Carrinho
        const titleElement = screen.getByRole("heading", {level: 1})
        //pegando o elemento que criamos de atributo no html
        const totalELement = screen.getByTestId("total")
        const cartListElement = screen.getByRole("list") // ul
        screen.debug(cartListElement) // passa um console.log , porem somente para debug nao deixar no codigo 

        expect(titleElement).toHaveTextContent("Carrinho")
        expect(totalELement).toHaveTextContent("$0.00")
        expect(cartListElement).toBeEmptyDOMElement()
    })

    it('Should render a cart with two products', () => {
        render(<Cart showCart={true} cart={cart}/>)

        const productItemElements = screen.getAllByRole("listitem") // tags Li, getall retorna um array.
        const firstProductElemente = screen.getByText(cart[0].title)
        const secondProductElemente = screen.getByText(cart[1].title)
        

        expect(productItemElements.length).toBe(2)
        expect(firstProductElemente).toBeInTheDocument()
        expect(secondProductElemente).toBeInTheDocument()
    })

    it('Should remove product when remove button is cliecked', () => {

    })
})
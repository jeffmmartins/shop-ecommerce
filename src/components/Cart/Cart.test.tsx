import { render, screen } from "@testing-library/react"
import { Cart } from "./Cart"
import { products } from "../../data/products"

const cart = products.slice(0, 2) // obetendo apenas dois produtos do array 


// Mock: tornar a biblioteca redux fake 
// metodo do jest para mockar as coisas 
// vai ser chamado porem nao vai acontecer nada
jest.mock('react-redux')

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

        expect(productItemElements.length).toBe(2)
    })
})
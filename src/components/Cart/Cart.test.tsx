import { render } from "@testing-library/react"
import { Cart } from "./Cart"


// Mock: tornar a biblioteca redux fake 
// metodo do jest para mockar as coisas 
jest.mock('react-redux')

describe('Cart > Unit Test', () => {
    it('Should render an empty cart correctly', () => {
        render(<Cart  showCart={true}/>) // indica se o cart deve ser mostrado ou não. 
    })
})
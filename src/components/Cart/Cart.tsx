import * as S from "./style"
import { Products } from "../../data/products";


interface CartProps {
    showCart: boolean;
    cart: Products[];
}
export const Cart: React.FC <CartProps> = ({showCart,cart}) => {
    

    const cartTotal = cart.reduce((totalCart, product) => {
        return totalCart + product.price
    },0)

    return (
        <>
            <S.Container showCart={showCart}>
                <S.Title>Carrinho</S.Title>

                <S.CartProductList>
                    {cart.map((product) => (
                        <S.CartProductItem key={product.id}>
                            <S.WeigthLetter>{product.title} -</S.WeigthLetter> ${product.price}</S.CartProductItem>
                    ))}
                </S.CartProductList>

                <S.CartTotal data-testId = "total">
                    Total: ${cartTotal.toFixed(2)}
                </S.CartTotal>
            </S.Container>
        </>
    )
}
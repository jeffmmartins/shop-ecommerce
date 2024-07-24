import React from "react";
import * as S from "./style"
import { FiShoppingCart } from "react-icons/fi";
import { Products } from "../../data/products";
import { AiFillStar, AiOutlineStar } from "react-icons/ai"
import { useDispatch, useSelector } from "react-redux";
import { RootReducer } from "../../redux/root.reducer";
import { addProduct, RemoveProduct } from "../../redux/Cart/cart.slice";

// esta recebendo a tipagem que foi atribuida no arquivo Data
interface ProductCartProps {
    product: Products
}

// image -nao preciso fechar a tag , pois na pratica é como se fosse a tag img
export const ProductCard: React.FC<ProductCartProps> = ({ product }) => {
    const dispatch = useDispatch()
    const { cart } = useSelector((rootReducer: RootReducer) => rootReducer.cartReducer)

    // encontrar o produto dentro do cart
    // variavel boleana que está no carrinho. 
    const isProductOnCart = cart.find((productOnCart) => product.id === productOnCart.id) !== undefined

    // ao clicar no botão adicionar é despachado a action. que no payload const o produto que foi adicionado 
    const handleAddProductToCart = () => {
        // despachar uma action. precisa usar o usedispatch
        // tenho que passar a action.
        dispatch(addProduct(product))
    }

    const handleRemoveProductFromCart = () => {
        dispatch(RemoveProduct(product))
    }


    return (
        <S.Card>
            <S.Image src={product.image} alt={product.description} />
            <S.ProductTitle>
                {product.title}
            </S.ProductTitle>

            <S.ReviewPriceContainer>
                <S.Review>
                    {Array.from({ length: 5 }).map(
                        (_, index) => index < Math.round(product.rating.rate)
                            ? (
                                <AiFillStar key={index} />
                            ) : (
                                <AiOutlineStar key={index} />
                            ))}
                    ({` ${product.rating.rate}`})
                </S.Review>

                <S.Price>{product.price}</S.Price>
            </S.ReviewPriceContainer>

            <S.AddToCartButtonWrapper>
                {isProductOnCart ?
                    <S.RemoveFromCartButton onClick={handleRemoveProductFromCart}>
                        Remover do Carrinho  <FiShoppingCart />
                    </S.RemoveFromCartButton> :
                    <S.AddToCartButton onClick={handleAddProductToCart}>
                        Adicionar Ao Carrinho <FiShoppingCart />
                    </S.AddToCartButton>}
            </S.AddToCartButtonWrapper>

        </S.Card>
    )
}
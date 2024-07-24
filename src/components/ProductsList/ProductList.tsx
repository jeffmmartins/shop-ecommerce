import { ProductCard } from "../ProductCart/ProductCart"
import * as S from "./style"
import {products} from "../../data/products"

export const ProductList: React.FC = () => {
    // pode usar também o useeffect para buscar os dados da api.
    
    return (
        <>
            <S.Container>
                {products.map((product) => (
                    <ProductCard key={product.id} product={product} />
                ))}           
            </S.Container>
        </>
    )
}
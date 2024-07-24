import styled from "styled-components"

// Dica: é imaginar o que vc colocaria no HTML na hora da construção da tag e aplicar aqui. 
//olha para o Layout e ver oq ue vai precisar e depois monta o HTML
export const Card = styled.article`
background-color: white;
width: 100%;
border-radius: 10px;
padding: 2rem;
margin: 0 auto;
box-shadow: 0 0 5px rgba(0,0,0.15);

display: flex;
flex-direction: column;
align-items: center;
`

export const Image = styled.img`
width: 250px;
height: 400px;

object-fit: contain; //conter o objeto colocra ele dentro da região.
`

export const ProductTitle = styled.h2`
font-weight: 500;
font-size: 1.2rem;
min-height: 3rem;

margin-top: 1rem;
`

export const ReviewPriceContainer = styled.div`
display: flex;
justify-content: space-between;
align-items: center;
width: 100%;
margin-top: 1rem;
`
export const AddToCartButtonWrapper = styled.div`
display: flex;
justify-content: center;
align-items: center;
width: 100%;
margin-top: 1rem;
`

export const Review = styled.span`
display: flex;
font-size: 0.7rem;

svg {
    font-size: 1rem;
}
`

export const Price = styled.strong``

export const AddToCartButton = styled.button`
border: none;
border-radius: 5px;
height: 40px;
width: 100%;
background-color: blue;
color: white;

display: flex;
justify-content: center;
align-items: center;
gap: 0.5rem;

svg {
    font-size: 0.7rem;
}
`
export const RemoveFromCartButton = styled.button`
border: none;
border-radius: 5px;
height: 40px;
width: 100%;
background-color: violet;
color: bla7;

display: flex;
justify-content: center;
align-items: center;
gap: 0.5rem;

svg {
    font-size: 0.7rem;
}
`
import styled from "styled-components";

interface ContainerProps {
    showCart: boolean;
}

export const Container = styled.aside <ContainerProps>`
position: fixed; // sempre que usar um position precisa usar um top
top: 0;
right: ${(props) => (props.showCart ? "0" : "-350px")};

width: 350px;
background-color: white;
height: 100vh;

padding: 2rem;
box-shadow: 0 0 15px rgba( 0,0,0,0.25);

transition: right 1s;
`

export const Title = styled.h1``

export const CartProductList = styled.ul`
padding: 2rem 0;
list-style: none;
display: flex;
flex-direction: column;
gap: 1rem;
`
export const WeigthLetter = styled.strong`
font-weight: bold;
`
export const CartProductItem = styled.li`

`

export const CartTotal = styled.strong`
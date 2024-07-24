import styled from "styled-components";

export const Container = styled.main`
max-width: 1240px;
margin: 4rem auto;
padding: 0 2rem ;

display: flex;
justify-content: space-between;
align-items: stretch; // faz com que o card estique e fique com tamanhos igauis 
flex-wrap: wrap;
gap: 2rem;

/* esse modelo é do Sass, tudo que vier logo apos o container
ele vai aplicar o estilo que esta envolvendo esse seletor */
& > * {
flex: 1 300px; // faz com que estique o maximo que conseguir dentro do espaço que ele tem  com no minimo 300px de largura , preciso aplicar o flex wrap. quando ultrapassar o minimo ele quebra

}
`
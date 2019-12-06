import React from 'react';
import styled from 'styled-components';

const Item = styled.div `
    border: 1px dotted orange;
    padding: 5px;
    height: 96%;
`

const FotoProduto = styled.img `
    width: 100%;
    height: 60%;
`

const BotaoProduto = styled.button `
    bottom: 0;
    color: white;
    border: unset;
    background-color: black;
    :hover{
        background-color: darkorange;
    }
    width: 100%;
    height: 3em;
`


function Produto(props) {
    const enviarId = (id) => {
        props.adicionarNoCarrinho(props.id)
    }
    return (
    <Item>
        <FotoProduto src= { props.urlImagem } />
        <p>{ props.nomeDoProduto }</p>
        <p>R$ { props.valor }</p>
        <BotaoProduto onClick={enviarId}>Adicionar ao Carrinho</BotaoProduto>
    </Item>
  );
}

export default Produto;
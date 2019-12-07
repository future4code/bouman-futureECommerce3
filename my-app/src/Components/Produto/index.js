import React from 'react';
import styled from 'styled-components';



const Item = styled.div `
    border: 1px dashed orange;
    padding: 5px;
    height: 96%;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
`

const FotoProduto = styled.img `
    width: 100%;
    height: 65%;
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

const Descricao = styled.p `
    margin: 0;
`



function Produto(props) {
    
    const enviarId = () => {
        props.adicionarNoCarrinho(props.id)
    }


    return (
    <Item>
        <FotoProduto src= { props.urlImagem } />
        <Descricao>{ props.nomeDoProduto }</Descricao>
        <Descricao>R$ { props.valor }</Descricao>
        <BotaoProduto onClick={enviarId}>Adicionar ao Carrinho</BotaoProduto>
    </Item>
  );
}



export default Produto;
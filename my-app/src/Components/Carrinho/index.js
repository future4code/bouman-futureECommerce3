import React from 'react';
import styled from 'styled-components';



const Total = styled.p`
    font-size: 13pt;
`

const ItemCarrinho = styled.li `
    border-bottom: 1px dashed black;
    list-style: none;
    padding: 0.5em;
`

const BotaoRemover = styled.span `
    :hover{
        color: red;
    }
`

const ContainerCarrinho = styled.div `
`



function Carrinho(props) {
    let soma  = 0
    for(let item of props.listaCarrinho) {
        soma = soma + (item.valor * item.quantidade)
    }
    
    return (
    <ContainerCarrinho>
        {props.listaCarrinho.map(item => {
            const enviarId = () => {
                props.removerCarrinho(item.id)
            }
            return <ItemCarrinho>{item.quantidade}x {item.nomeDoProduto} 
            <BotaoRemover onClick={enviarId}>  X</BotaoRemover></ItemCarrinho>
        })}
        <Total>Total: R${soma}</Total>
    </ContainerCarrinho>
  );
}



export default Carrinho;
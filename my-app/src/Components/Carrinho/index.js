import React from 'react';
import styled from 'styled-components';

const Total = styled.p`
    margin-left: 0.5em;
`


function Carrinho(props) {
    let soma  = 0
    for(let item of props.listaCarrinho) {
        soma = soma + (item.valor * item.quantidade)
    }
    return (
    <div>
        {props.listaCarrinho.map(item => {
            const enviarId = (id) => {
            props.removerCarrinho(item.id)
            console.log(item.id)}
            return <li>{item.quantidade}x {item.nomeDoProduto} 
            <span onClick={enviarId} >X</span></li>
        })}
        <Total>Total: {soma}
        </Total>
    </div>
  );
}

export default Carrinho;
import React from 'react';
import styled from 'styled-components';

const Total = styled.p`
    margin-left: 0.5em;
`



function Carrinho(props) {
    return (
    <div>
        {props.listaCarrinho.map(item => {
            return <li>{item.quantidade}x {item.nomeDoProduto} <span onClick={props.removerCarrinho} >X</span></li>
        })}
        <Total>Total:</Total>
    </div>
  );
}

export default Carrinho;
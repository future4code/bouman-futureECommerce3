import React from 'react';
import styled from 'styled-components';

const Total = styled.p`
    margin-left: 0.5em;
`



function Carrinho(props) {
    return (
    <div>
        {props.listaDeProdutos.map(item => {
            return <li>{item.nomeDoProduto}</li>
        })}
        <Total>Total:</Total>
    </div>
  );
}

export default Carrinho;
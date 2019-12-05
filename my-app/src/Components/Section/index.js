import React, { Component } from 'react';
import styled from 'styled-components';

const Produto = styled.div`
   display: flex;
   justify-content:center

   
`

function Section() {
  return (
    <Produto>
        <img src= "https://picsum.photos/id/466/200/300" />
        <p>Item 1</p>
        <p>10,00</p>
        <button >Adicionar ao Carrinho</button>
    </Produto>
    
  );
}

export default Section;
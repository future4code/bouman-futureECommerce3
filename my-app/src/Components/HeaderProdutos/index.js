import React, { Component } from 'react';
import styled from 'styled-components';



const Container = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
`

const ContadorProdutos = styled.p `
`

const SeletorPreço = styled.select `

`

const Opcao = styled.option `
`

function HeaderProdutos() {
  return (
      <Container>
        <ContadorProdutos>Quantidade de Produtos: 9</ContadorProdutos>
        <SeletorPreço>
            <Opcao>Preço: Crescente</Opcao>
            <Opcao>Preço: Decrescente</Opcao>
        </SeletorPreço>
      </Container>
  );
}




export default HeaderProdutos;
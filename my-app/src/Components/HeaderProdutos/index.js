import React from 'react';
import styled from 'styled-components';
import { tsPropertySignature } from '@babel/types';



const Container = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
`

const ContadorProdutos = styled.p `
`

const SeletorPreco = styled.select `

`

const Opcao = styled.option `
`

function HeaderProdutos(props) {
  return (
      <Container>
<ContadorProdutos>Quantidade de Produtos: {props.listaDeProdutos.length}</ContadorProdutos>
        <SeletorPreco>
            <Opcao>Preço: Crescente</Opcao>
            <Opcao>Preço: Decrescente</Opcao>
        </SeletorPreco>
      </Container>
  );
}




export default HeaderProdutos;
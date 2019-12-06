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
  const seletorOrdem = (event) => {
    const ordem = (event.target.value)
    console.log(event.target.value)
    props.atualizarSeletorOrdem(ordem)
  }

  return (
      <Container>
        <ContadorProdutos>Quantidade de Produtos: {props.listaDeProdutos.length}</ContadorProdutos>
        <SeletorPreco onChange={seletorOrdem}>
            <Opcao value='crescente'>Preço: Crescente</Opcao>
            <Opcao value='decrescente'>Preço: Decrescente</Opcao>
        </SeletorPreco>
      </Container>
  );
}




export default HeaderProdutos;
import React from 'react';
import styled from 'styled-components';



const Container = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: fit-content;
`

const ContadorProdutos = styled.p `
  margin: 0.5em 0;
  font-size: 13pt;
`

const SeletorPreco = styled.select `
  margin: 0.5em 0;
`

const Opcao = styled.option `
`



function HeaderProdutos(props) {
  
  const seletorOrdem = (event) => {
    const ordem = (event.target.value)
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
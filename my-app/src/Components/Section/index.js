import React from 'react';
import styled from 'styled-components';
import HeaderProdutos from '../HeaderProdutos/index';
import Produto from '../Produto/index'



const ContainerProdutos = styled.div `
   justify-content:center;
   width: 60vw;
   height: 70vh;
   padding: 0 1em 0 1em;
`

const VitrineProdutos = styled.div `
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr;
  grid-template-rows: 50% 50%;
  gap: 0.6em;
  row-gap: 0.6em;
  height: 87vh;
`

function Section(props) {
  return (
    <ContainerProdutos>
      <HeaderProdutos listaDeProdutos={props.listaDeProdutos}/>
      <VitrineProdutos>
        {props.listaDeProdutos.map(item => {
          return <Produto adicionarNoCarrinho={props.adicionarNoCarrinho} id={item.id} nomeDoProduto={item.nomeDoProduto} urlImagem={item.urlImagem} valor={item.valor}/>
        })}
      </VitrineProdutos>
    </ContainerProdutos>
  );
}

export default Section;
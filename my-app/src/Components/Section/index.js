import React from 'react';
import styled from 'styled-components';
import HeaderProdutos from '../HeaderProdutos/index';
import Produto from '../Produto/index'



const ContainerProdutos = styled.div `
   justify-content:center;
   width: 100%;
   height: 95vh;
   padding: 0 0.5em 0 1.5em;
`

const VitrineProdutos = styled.div `
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr;
  grid-template-rows: 50% 50%;
  gap: 0.5em;
  height: 88vh;
`


function Section(props) {
  return (
    <ContainerProdutos>
      <HeaderProdutos atualizarSeletorOrdem={props.atualizarSeletorOrdem} listaDeProdutos={props.listaDeProdutos}/>
      <VitrineProdutos>
        {props.listaDeProdutos.map(item => {
          return <Produto key={item.id} adicionarNoCarrinho={props.adicionarNoCarrinho} id={item.id} nomeDoProduto={item.nomeDoProduto} urlImagem={item.urlImagem} valor={item.valor}/>
        })}
      </VitrineProdutos>
    </ContainerProdutos>
  );
}



export default Section;
import React from 'react';
import styled from 'styled-components';



const InputsSidebar = styled.div `
`

const StyledLabel = styled.label `
  margin: 0.5em 0;
  font-size: 14pt;
`

const StyledInput = styled.input `
  margin: 0.5em 0;
`



function Filtro(props) {
  
const filtroMin = (event) => {
  const valorMin = Number(event.target.value)
  props.atualizarFiltroMin(valorMin)
}


const filtroMax = (event) => {
  const valorMax = Number(event.target.value)
  props.atualizarFiltroMax(valorMax)
}


const filtroTexto = (event) => {
  const valorTexto = (event.target.value)
  props.atualizarFiltroTexto(valorTexto)
}



  return (
    <InputsSidebar>
        <StyledLabel>Valor Mínimo: </StyledLabel>
        <StyledInput type="number" min="0" onChange={filtroMin}/><br/>
        <StyledLabel>Valor Máximo: </StyledLabel>
        <StyledInput type="number" min="0" onChange={filtroMax}/><br/>
        <StyledLabel>Buscar Produto: </StyledLabel>
        <StyledInput type="text" onChange={filtroTexto}/>
    </InputsSidebar>
  );
}



export default Filtro;
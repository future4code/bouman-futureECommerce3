import React from 'react';
import styled from 'styled-components';

const InputsSidebar = styled.div`

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
        <label>Valor Mínimo: </label>
        <input type="number" min="0" onChange={filtroMin}/><br/>
        <label>Valor Máximo: </label>
        <input type="number" min="0" onChange={filtroMax}/><br/>
        <label>Buscar Produto: </label>
        <input type="text" onChange={filtroTexto}/>
    </InputsSidebar>
  );
}

export default Filtro;
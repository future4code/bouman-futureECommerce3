import React from 'react';
import styled from 'styled-components';

const InputsSidebar = styled.div`

`


function Filtro(props) {
  return (
    <InputsSidebar>
        <label>Valor Mínimo: </label>
        <input type="number"/><br/>
        <label>Valor Máximo: </label>
        <input type="number"/><br/>
        <label>Buscar Produto: </label>
        <input type="text"/>
    </InputsSidebar>
  );
}

export default Filtro;
import React, { Component } from 'react';
import styled from 'styled-components';

const SideBarArea = styled.div`
   border: 1px solid black;
   width: 20vw;
   height: 95vh;
`

const Titulo = styled.h1 `
    margin-left: 0.2em;
`

function SideBar(props) {
  return (
    <SideBarArea>
        <Titulo>{props.titulo}</Titulo>
        {props.children}
    </SideBarArea>
  );
}

export default SideBar;
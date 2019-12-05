import React from 'react';
import './App.css';
import styled from 'styled-components';
import Section from './Components/Section/index';



const listaProdutos = [
  {
  id: 1,
  nomeDoProduto: "Item1",
  urlImagem: "https://picsum.photos/id/466/200/300",
  valor: "10,00",
  },
  {
    id: 2,
    nomeDoProduto: "Item2",
    urlImagem: "https://picsum.photos/id/466/200/301",
    valor: "20,00",
    }
  ]


function App() {
  return (
    <div className="App">
      <Section></Section>
    </div>
  );
}

export default App;

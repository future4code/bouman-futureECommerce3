import React from 'react';
import './App.css';
import styled from 'styled-components';
import Section from './Components/Section/index';
import SideBar from './Components/Sidebar/index';
import Carrinho from './Components/Carrinho/index';
import Filtro from './Components/Filtro/index'
import IconeCarrinho from './Resources/icone-carrinho.svg'



const listaProdutos = [
  {
    id: 1,
    nomeDoProduto: "Foguete - Saturno V",
    urlImagem: "https://upload.wikimedia.org/wikipedia/commons/1/16/Apollo_11_Launch_-_GPN-2000-000630.jpg",
    valor: 10.00,
  },
  {
    id: 2,
    nomeDoProduto: "Foguete - Falcon Heavy",
    urlImagem: "https://www.aereo.jor.br/wp-content/uploads//2018/02/Spacex-falcon-heavy.jpg",
    valor: 20.00,
  },
  {
    id: 3,
    nomeDoProduto: "Foguete - Blue Origin",
    urlImagem: "https://ogimg.infoglobo.com.br/in/21026018-643-5d9/FT1086A/652/ximagem-blue-origin-2.png.jpg.pagespeed.ic.p8TLSACpMJ.jpg",
    valor: 30.00,
  },
  {
    id: 4,
    nomeDoProduto: "Onibus Espacial - Dream Chaser",
    urlImagem: "http://s2.glbimg.com/7gNxoXC0ohDOvW32yjOE2I1Z2xA=/e.glbimg.com/og/ed/f/original/2017/08/25/aviacao.jpg",
    valor: 40.00,
  },
  {
    id: 5,
    nomeDoProduto: "Onibus Espacial - Columbia",
    urlImagem: "https://upload.wikimedia.org/wikipedia/commons/2/26/Space_Shuttle_Columbia_lands_following_STS-62_on_18_March_1994._%28cropped%29.jpg",
    valor: 50.00,
  },
  {
    id: 6,
    nomeDoProduto: "Onibus Espacial - Enterprise",
    urlImagem: "https://www.tribunapr.com.br/wp-content/uploads/sites/1/2012/06/07-06-12_enterpriseinterna.jpg",
    valor: 60.00,
  },
  {
    id: 7,
    nomeDoProduto: "Nave - Destroyer",
    urlImagem: "https://abrilvejasp.files.wordpress.com/2017/10/destroyer.jpg?quality=70&strip=info&w=650&h=371",
    valor: 70.00,
  },
  {
    id: 8,
    nomeDoProduto: "Nave - Millenium Falcon",
    urlImagem: "https://abrilvejasp.files.wordpress.com/2017/10/falcon.jpg?quality=70&strip=info&w=650&h=371",
    valor: 80.00,
  },
]

  const BotãoCarrinho = styled.button `
    position: fixed;
    bottom: 2em;
    right: 3em;
    border-radius: 50%;
    background-color: white;
    width: 80px;
    height:80px;
  `




class App extends React.Component {
  constructor(props){
    super(props);

    this.state = {
      mostraCarrinho: false,
      carrinho: [],
    }
  }


  mostrarAreaCarrinho = () => {
    if (this.state.mostraCarrinho) {
      this.setState({
        mostraCarrinho: false,
      })
    } else {
      this.setState({
        mostraCarrinho: true,
      })
    }
  }

  adicionarNoCarrinho = (idProduto) => {
      const novoCarrinho = [...this.state.carrinho]
      const IndexProdutoNoCarrinho = this.state.carrinho.findIndex((objeto) => objeto.id === idProduto)
      novoCarrinho.push(IndexProdutoNoCarrinho)
    
      this.setState({
        carrinho: novoCarrinho,
      })
      console.log(idProduto)
  }


  render(){
    return (
      <div className="App">
        <SideBar titulo="Filtro:">
          <Filtro/>
        </SideBar>
        <Section adicionarNoCarrinho={this.adicionarNoCarrinho} listaDeProdutos= {listaProdutos}/>  
        {this.state.mostraCarrinho && <SideBar titulo="Carrinho:">
          <Carrinho listaDeProdutos={listaProdutos}/>
        </SideBar>}
        <BotãoCarrinho onClick={this.mostrarAreaCarrinho}><img src={IconeCarrinho}></img></BotãoCarrinho>
      </div>
    );
  }
}

export default App;

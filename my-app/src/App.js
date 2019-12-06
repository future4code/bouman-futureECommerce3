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
    quantidade: 1,
  },
  {
    id: 2,
    nomeDoProduto: "Foguete - Falcon Heavy",
    urlImagem: "https://www.aereo.jor.br/wp-content/uploads//2018/02/Spacex-falcon-heavy.jpg",
    valor: 20.00,
    quantidade: 1,
  },
  {
    id: 3,
    nomeDoProduto: "Foguete - Blue Origin",
    urlImagem: "https://ogimg.infoglobo.com.br/in/21026018-643-5d9/FT1086A/652/ximagem-blue-origin-2.png.jpg.pagespeed.ic.p8TLSACpMJ.jpg",
    valor: 30.00,
    quantidade: 1,
  },
  {
    id: 4,
    nomeDoProduto: "Onibus Espacial - Dream Chaser",
    urlImagem: "http://s2.glbimg.com/7gNxoXC0ohDOvW32yjOE2I1Z2xA=/e.glbimg.com/og/ed/f/original/2017/08/25/aviacao.jpg",
    valor: 40.00,
    quantidade: 1,
  },
  {
    id: 5,
    nomeDoProduto: "Onibus Espacial - Columbia",
    urlImagem: "https://upload.wikimedia.org/wikipedia/commons/2/26/Space_Shuttle_Columbia_lands_following_STS-62_on_18_March_1994._%28cropped%29.jpg",
    valor: 50.00,
    quantidade: 1,
  },
  {
    id: 6,
    nomeDoProduto: "Onibus Espacial - Enterprise",
    urlImagem: "https://www.tribunapr.com.br/wp-content/uploads/sites/1/2012/06/07-06-12_enterpriseinterna.jpg",
    valor: 60.00,
    quantidade: 1,
  },
  {
    id: 7,
    nomeDoProduto: "Nave - Destroyer",
    urlImagem: "https://abrilvejasp.files.wordpress.com/2017/10/destroyer.jpg?quality=70&strip=info&w=650&h=371",
    valor: 70.00,
    quantidade: 1,
  },
  {
    id: 8,
    nomeDoProduto: "Nave - Millenium Falcon",
    urlImagem: "https://abrilvejasp.files.wordpress.com/2017/10/falcon.jpg?quality=70&strip=info&w=650&h=371",
    valor: 80.00,
    quantidade: 1,
  },
]

  const BotaoCarrinho = styled.button `
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
      listaProdutos: listaProdutos,
      filtroMin: null,
      filtroMax: Infinity,
      filtroTexto: "",
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
      const IdProdutoAdicionar = listaProdutos.find((objeto) => objeto.id === idProduto)
      if (novoCarrinho.indexOf(IdProdutoAdicionar)>-1){
        IdProdutoAdicionar.quantidade += 1
      } else {
        novoCarrinho.push(IdProdutoAdicionar)
      }
      this.setState({
        carrinho: novoCarrinho,
      })
  }

  removerCarrinho = (idProduto) => {
    const novoCarrinho = [...this.state.carrinho]
    const IndexProdutoRemover = this.state.carrinho.findIndex((objeto) => objeto.id === idProduto)
    novoCarrinho.splice(IndexProdutoRemover,1)

    console.log(idProduto)
    this.setState({
      carrinho: novoCarrinho,
    })
  }  

  atualizarFiltroMin = (valorMin) => {
    this.setState({
      filtroMin: valorMin,
    })
  }
  atualizarFiltroMax = (valorMax) => {
    this.setState({
      filtroMax: valorMax,
    })
  }
  atualizarFiltroTexto = (valorTexto) => {
    this.setState({
      filtroTexto: valorTexto,
    })
  }

  filtroListaDeProduto = () => {
   return listaProdutos.filter((item) => {
     if(item.valor > this.state.filtroMin) {
       return true
       console.log("Filtrou")

     }else{
       return false
       console.log("Nãofiltrou")
     }
   }).filter((item) => {
    if(item.valor < this.state.filtroMax) { 
      return true
    }else{
      return false
    }
    }).filter((texto) => {
    if(texto.nomeDoProduto.includes(this.state.filtroTexto)) {
      return true
    }else{
      return false
    }
  })
  }

  render(){
    const listaFiltrada = this.filtroListaDeProduto()
    console.log(listaProdutos)
    console.log(this.state.filtroTexto)
    return (
      <div className="App">
        <SideBar titulo="Filtro:">
          <Filtro atualizarFiltroMin={this.atualizarFiltroMin} atualizarFiltroMax={this.atualizarFiltroMax} atualizarFiltroTexto={this.atualizarFiltroTexto}/>
        </SideBar>
        <Section adicionarNoCarrinho={this.adicionarNoCarrinho} listaDeProdutos= {listaFiltrada}/>  
        {this.state.mostraCarrinho && <SideBar titulo="Carrinho:">
          <Carrinho removerCarrinho={this.removerCarrinho} listaCarrinho={this.state.carrinho} listaDeProdutos={listaProdutos}/>
        </SideBar>}
        <BotaoCarrinho onClick={this.mostrarAreaCarrinho}><img alt="icone" src={IconeCarrinho}></img></BotaoCarrinho>
      </div>
    );
  }
}

export default App;

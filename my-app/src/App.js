import React from 'react';
import styled from 'styled-components';
import Section from './Components/Section/index';
import SideBar from './Components/Sidebar/index';
import Carrinho from './Components/Carrinho/index';
import Filtro from './Components/Filtro/index'
import IconeCarrinho from './Resources/icone-carrinho.svg'



const BotaoCarrinho = styled.button `
  position: fixed;
  bottom: 1.3em;
  right: 2.5em;
  border-radius: 50%;
  background-color: white;
  width: 80px;
  height:80px;
  border: none;
  box-shadow: rgba(0, 0, 0, 0.5) 0px 0px 5px;
  outline: none;
`

const MainContainer = styled.div `
  display: flex;
  padding: 0.6em;
  font-family: sans-serif;
`

const ImgBotao = styled.img `
  width: 45px;
  height: 45px;
`



const listaProdutos = [
  {
    id: 1,
    nomeDoProduto: "Foguete - Saturno V",
    urlImagem: "https://upload.wikimedia.org/wikipedia/commons/1/16/Apollo_11_Launch_-_GPN-2000-000630.jpg",
    valor: 1500.00,
    quantidade: 1,
  },
  {
    id: 2,
    nomeDoProduto: "Foguete - Falcon Heavy",
    urlImagem: "https://www.aereo.jor.br/wp-content/uploads//2018/02/Spacex-falcon-heavy.jpg",
    valor: 2000.00,
    quantidade: 1,
  },
  {
    id: 3,
    nomeDoProduto: "Foguete - Blue Origin",
    urlImagem: "https://ogimg.infoglobo.com.br/in/21026018-643-5d9/FT1086A/652/ximagem-blue-origin-2.png.jpg.pagespeed.ic.p8TLSACpMJ.jpg",
    valor: 3000.00,
    quantidade: 1,
  },
  {
    id: 4,
    nomeDoProduto: "Onibus Espacial - Dream Chaser",
    urlImagem: "http://s2.glbimg.com/7gNxoXC0ohDOvW32yjOE2I1Z2xA=/e.glbimg.com/og/ed/f/original/2017/08/25/aviacao.jpg",
    valor: 4500.00,
    quantidade: 1,
  },
  {
    id: 5,
    nomeDoProduto: "Onibus Espacial - Columbia",
    urlImagem: "https://upload.wikimedia.org/wikipedia/commons/2/26/Space_Shuttle_Columbia_lands_following_STS-62_on_18_March_1994._%28cropped%29.jpg",
    valor: 5000.00,
    quantidade: 1,
  },
  {
    id: 6,
    nomeDoProduto: "Onibus Espacial - Enterprise",
    urlImagem: "https://www.tribunapr.com.br/wp-content/uploads/sites/1/2012/06/07-06-12_enterpriseinterna.jpg",
    valor: 6600.00,
    quantidade: 1,
  },
  {
    id: 7,
    nomeDoProduto: "Nave - Destroyer",
    urlImagem: "https://abrilvejasp.files.wordpress.com/2017/10/destroyer.jpg?quality=70&strip=info&w=650&h=371",
    valor: 7750.00,
    quantidade: 1,
  },
  {
    id: 8,
    nomeDoProduto: "Nave - Millenium Falcon",
    urlImagem: "https://abrilvejasp.files.wordpress.com/2017/10/falcon.jpg?quality=70&strip=info&w=650&h=371",
    valor: 8080.00,
    quantidade: 1,
  },
]



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
      ordem: '',
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
      
      if (novoCarrinho.indexOf(IdProdutoAdicionar) > -1) {
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
    const ProdutoCarrinho = novoCarrinho.find((item) => item.id === idProduto)
    
    novoCarrinho.splice(IndexProdutoRemover,1)
    ProdutoCarrinho.quantidade = 1
    
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
    if (valorMax === 0) {
      this.setState({
        filtroMax: Infinity,
      })
    } else {
      this.setState({
        filtroMax: valorMax,
      })
    }
  }


  atualizarFiltroTexto = (valorTexto) => {
    this.setState({
      filtroTexto: valorTexto,
    })
  }


  atualizarSeletorOrdem = (ordem) => {
    const ordenado = ordem
    this.setState({ordem: ordenado,})
  }


  ordenaProdutosDaLista = (itemA, itemB) => {
    if (this.state.ordem === 'crescente') {
      return itemA.valor - itemB.valor
    } else if (this.state.ordem === 'decrescente') {
      return itemB.valor - itemA.valor
    }
  }


  filtroListaDeProduto = () => {
   return listaProdutos.filter((item) => {
     if(item.valor > this.state.filtroMin) {
       return true
     }else{
       return false
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
    const produtosOrdenados = listaFiltrada.sort(this.ordenaProdutosDaLista)
    
    return (
      <MainContainer>
        <SideBar titulo="Filtros:">
          <Filtro atualizarFiltroMin={this.atualizarFiltroMin} atualizarFiltroMax={this.atualizarFiltroMax} atualizarFiltroTexto={this.atualizarFiltroTexto}/>
        </SideBar>
        <Section atualizarSeletorOrdem={this.atualizarSeletorOrdem} adicionarNoCarrinho={this.adicionarNoCarrinho} listaDeProdutos= {produtosOrdenados}/>  
        {this.state.mostraCarrinho && <SideBar titulo="Carrinho:">
          <Carrinho removerCarrinho={this.removerCarrinho} listaCarrinho={this.state.carrinho} listaDeProdutos={listaProdutos}/>
        </SideBar>}
        <BotaoCarrinho onClick={this.mostrarAreaCarrinho}><ImgBotao alt="icone" src={IconeCarrinho}></ImgBotao></BotaoCarrinho>
      </MainContainer>
    );
  }
}



export default App;

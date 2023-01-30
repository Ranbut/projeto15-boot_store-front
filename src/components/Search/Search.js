import { SearchContainer, SearchFilter, FilterTitle, ComponentsSelection, SearchResultContainer, Item, Imagem, Info, Nome, Preco, PrecoPromocao, FilterName, ButtonSearch, BotaoComprar } from "./style.js";
import Header from "../Header.js";
import Rodape from "../Rodape.js";
import { useState, useEffect } from "react";
import axios from "axios";
import { useNavigate, useSearchParams } from "react-router-dom";

export default function Search(){

    const [produtosPesquisa, setProdutos] = useState([]);
    const [produtoName, setProdutosName] = useState("");
    const [produtoType, setProdutoType] = useState("");

    const [searchParams, setSearchParams] = useSearchParams();

    const navigate = useNavigate();

    useEffect(() => { 
      const requisicao = axios.get(`${process.env.REACT_APP_API_URL}/produtos`, { params: { 'type': searchParams.get("type"), 'name': searchParams.get("name") } });
      requisicao.then((res) => {
          setProdutos(res.data);
      });
      requisicao.catch((res) => { alert(res.response.data.message);});
  }, []);


    function Buscar(){
      const requisicao = axios.get(`${process.env.REACT_APP_API_URL}/produtos`, { params: { 'type': produtoType, 'name': produtoName } });
      requisicao.then((res) => {
          navigate(`/search/?type=${produtoType}&name=${produtoName}`)
          setProdutos(res.data);
      });
      requisicao.catch((res) => { alert(res.response.data.message);});
    }

    function renderPrice(price, offer){
        if(offer === 0){
            return(<PrecoPromocao>{price.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' })}</PrecoPromocao>)
        }
        else{
            return(
            <>
                <Preco>de <s>{price.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' })}</s></Preco>
                <PrecoPromocao>para R$ {aplicarPromocao(price, offer).toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' })}</PrecoPromocao>
            </>
            )
        }
    }
    
    const aplicarPromocao = (price, offer) => {
        const result = price - (price * (offer / 100));
        return result.toFixed(2);
    }

    return(
    <>
        <Header/>
        <SearchContainer>
            <SearchFilter>
                <FilterTitle>Nome do Produto</FilterTitle>
                <FilterName>
                  <input type="text" placeholder="Insira o nome do produto..." onChange={e => setProdutosName(e.target.value)}/>
                </FilterName>
                <FilterTitle>Componentes</FilterTitle>
                <ComponentsSelection>
                  <input type="radio" value="all" name="component" onClick={() => setProdutoType("")} defaultChecked={true} /> Todos
                    <input type="radio" value="motherboard" name="component" onClick={() => setProdutoType("motherboard")} /> Placa mãe
                    <input type="radio" value="power-supply" name="component" onClick={() => setProdutoType("power-supply")} /> Fonte
                    <input type="radio" value="cpu" name="component" onClick={() => setProdutoType("cpu")} /> Processador
                    <input type="radio" value="gpu" name="component" onClick={() => setProdutoType("gpu")} /> Placa de Vídeo
                    <input type="radio" value="ram" name="component" onClick={() => setProdutoType("ram")} /> Mémoria RAM
                    <input type="radio" value="ssd" name="component" onClick={() => setProdutoType("ssd")} /> SSD
                </ComponentsSelection>
                <ButtonSearch onClick={Buscar}>Pesquisar</ButtonSearch>
            </SearchFilter>
            <SearchResultContainer>
            {produtosPesquisa.map(p => 
            <div key={p.name}>
                <Item>
                    <Imagem><img src={p.image} alt={p.name}/></Imagem>
                    <Info>
                        <Nome>{p.name}</Nome>
                        {renderPrice(p.price, p.offer)}
                        <BotaoComprar>Adicionar ao carrinho</BotaoComprar>
                    </Info>
                </Item>
            </div>
        )}
            </SearchResultContainer>
        </SearchContainer>
        <Rodape />
    </>
    );
}
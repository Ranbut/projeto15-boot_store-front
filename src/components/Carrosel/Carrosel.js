import { useRef } from 'react';
import {BsFillArrowLeftCircleFill, BsFillArrowRightCircleFill} from 'react-icons/bs'
import {Titulo ,CarroselContainer, Item, Imagem, 
Info, Nome, Preco, PrecoPromocao, Container, 
BotaoDireito, BotaoEsquerdo} from './styles.js'
import axios from "axios";
import { useState, useEffect } from "react"

export default function Carrosel({type}){

const [produtosCarrosel, setProdutos] = useState([]);

  useEffect(() => { 
    const requisicao = axios.get("http://localhost:5000/produtos", { headers: { 'type': type } });
    requisicao.then((res) => {
        setProdutos(res.data);
    });
    requisicao.catch((res) => { alert(res.response.data.message); });
}, []);

const carroselRef = useRef(null);

function movaParaEsquerda(e){
    e.preventDefault();
    carroselRef.current.scrollLeft -= carroselRef.current.offsetWidth;
    console.log("Scroll X: ", carroselRef.current.scrollLeft);
}

function movaParaDireita(e){
    e.preventDefault();
    carroselRef.current.scrollLeft += carroselRef.current.offsetWidth;
    console.log("Scroll X: ", carroselRef.current.scrollLeft);
}

const aplicarPromocao = (price, offer) => {
    const result = price * (offer / 100);
    return result.toFixed(2);
}

let nomeCategoria;

switch (type){
    case "motherboard":
        nomeCategoria = "Placa Mães";
        break;
    case "power-supply":
        nomeCategoria = "Fontes";
        break;
    case "gpu":
        nomeCategoria = "Placas de Vídeos";
        break;
    case "cpu":
        nomeCategoria = "CPU";
        break;
    default:
        nomeCategoria = "Não especificado(a)"
}

return(
<Container>
    <Titulo>{nomeCategoria}</Titulo>
    <CarroselContainer ref={carroselRef}>
        {produtosCarrosel.map(p => 
        <div key={p.name}>
            <Item>
                <Imagem>
                    <img src={p.image} alt={p.name}/>
                </Imagem>
                <Info>
                    <Nome>{p.name}</Nome>
                    <Preco>de <s>R$ {p.price.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' })}</s></Preco>
                    <PrecoPromocao>para R$ {aplicarPromocao(p.price, p.offer).toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' })}</PrecoPromocao>
                </Info>
            </Item>
        </div>
        )
        }
    </CarroselContainer>
    <BotaoEsquerdo>
        <BsFillArrowLeftCircleFill  size={40} color='grey' onClick={movaParaEsquerda} />
    </BotaoEsquerdo>
    <BotaoDireito>
        <BsFillArrowRightCircleFill size={40} color='grey' onClick={movaParaDireita} />
    </BotaoDireito>

</Container>
);
}
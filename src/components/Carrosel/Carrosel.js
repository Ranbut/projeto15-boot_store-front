import { useRef } from 'react';
import {BsFillArrowLeftCircleFill, BsFillArrowRightCircleFill} from 'react-icons/bs'
import {Titulo ,CarroselContainer, Item, Imagem, 
Info, Nome, Preco, PrecoPromocao, Container, 
BotaoDireito, BotaoEsquerdo} from './styles.js'

export default function Carrosel({type}){

    const placaMaes = [
        {
            image: "https://cdn.dooca.store/332/products/placa-mae1_1600x1600+fill_ffffff.jpg?v=1649256047&webp=0",
            name: "PCWare IPX4020E - OEM",
            price: 469.20,
            offer: 20
        },
        {
            image: "https://cdn.dooca.store/7349/products/placa-mae-intel-pcware-imph110g-m-atx-ddr3-lga-1151-aeroluz-informatica-1_1600x1600+fill_ffffff.jpg?v=1647534505",
            name: "Intel Pcware IMPH110G M-ATX DDR3 - LGA 1151 ",
            price: 499,
            offer: 25
        },
        {
            image: "https://www.asus.com/media/Odin/Websites/br/ProductLine/20220609051051.png",
            name: "PRIME Z690-A",
            price: 1526.99,
            offer: 10
        },
        {
            image: "https://images-americanas.b2w.io/produtos/4420910772/imagens/placa-mae-de-mesa-para-memoria-ddr3-de-placa-mae-p5g41t-m-lx-775-pinos-g41-usweety/4420910772_1_xlarge.jpg",
            name: "P5G41T-M lx 775 pinos G41 Usweety DDR3",
            price: 203.21,
            offer: 5
        },
        {
            image: "https://imgs.extra.com.br/1545158156/1xg.jpg",
            name: "Duex, LGA 1150, DDR3, H81Z",
            price: 419.01,
            offer: 30
        },
        {
            image: "https://cdn.dooca.store/2367/products/vmxolu3s3hijbgxhmiijc6t8ug35hjgdqczl_1600x1600+fill_ffffff.jpg?v=1673458304",
            name: "Asus ROG Strix B550-F Gaming Wi-Fi II, AMD AM4, ATX, DDR4",
            price: 1999.00,
            offer: 15
        },
        {
            image: "https://cdn.shoppub.io/cdn-cgi/image/w=1000,h=1000,q=80,f=auto/oficinadosbits/media/uploads/produtos/foto/vrhvurvg/file.png",
            name: "B360M AORUS GAMING 3 - (LGA 1151 - DDR4 2666)",
            price: 499,
            offer: 25
        }
];

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
        {placaMaes.map(p => 
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
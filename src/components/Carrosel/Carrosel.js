import { useRef, useContext } from "react";
import {
  BsFillArrowLeftCircleFill,
  BsFillArrowRightCircleFill,
} from "react-icons/bs";
import {
  Titulo,
  CarroselContainer,
  Item,
  Imagem,
  Info,
  Nome,
  Preco,
  PrecoPromocao,
  Container,
  BotaoDireito,
  BotaoEsquerdo,
  BotaoAdicionar,
} from "./styles.js";
import axios from "axios";
import { useState, useEffect } from "react";
import { Oval } from "react-loader-spinner";
import { AuthContext } from "../../contexts/AuthContext";

export default function Carrosel({ type }) {
  const [carregado, setCarregado] = useState(false);
  const { token, produtosCarrosel, setProdutos } = useContext(AuthContext);

  const handleAddToCart = (image, name, price) => {
    const URL = process.env.REACT_APP_API_URL;
    const config = { headers: { Authorization: `Bearer ${token}` } };
    axios
      .post(`${URL}/cart`, { image, name, price }, config)
      .then((res) => {
        setProdutos([...produtosCarrosel, res.data]);
      })
      .catch((err) => {
        alert(err.res.data.message);
      });
  };
  

  useEffect(() => {
    const requisicao = axios.get(`http://localhost:5000/produtos`, {
      params: { type: type },
    });
    requisicao.then((res) => {
      setProdutos(res.data);
      setCarregado(true);
    });
    requisicao.catch((res) => {
      alert(res.response.data.message);
      setCarregado(false);
    });
  }, [setProdutos, type]);

  

  const carroselRef = useRef(null);

  function movaParaEsquerda(e) {
    e.preventDefault();
    carroselRef.current.scrollLeft -= carroselRef.current.offsetWidth;
    console.log("Scroll X: ", carroselRef.current.scrollLeft);
  }

  function movaParaDireita(e) {
    e.preventDefault();
    carroselRef.current.scrollLeft += carroselRef.current.offsetWidth;
    console.log("Scroll X: ", carroselRef.current.scrollLeft);
  }

  function renderPrice(price, offer) {
    if (offer === 0) {
      return (
        <PrecoPromocao>
          {price.toLocaleString("pt-BR", {
            style: "currency",
            currency: "BRL",
          })}
        </PrecoPromocao>
      );
    } else {
      return (
        <>
          <Preco>
            de{" "}
            <s>
              {price.toLocaleString("pt-BR", {
                style: "currency",
                currency: "BRL",
              })}
            </s>
          </Preco>
          <PrecoPromocao>
            para R${" "}
            {aplicarPromocao(price, offer).toLocaleString("pt-BR", {
              style: "currency",
              currency: "BRL",
            })}
          </PrecoPromocao>
        </>
      );
    }
  }

  const aplicarPromocao = (price, offer) => {
    const result = price - price * (offer / 100);
    return result.toFixed(2);
  };

  let nomeCategoria;

  switch (type) {
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
      nomeCategoria = "Processadores";
      break;
    case "ram":
      nomeCategoria = "Mémorias RAM";
      break;
    case "ssd":
      nomeCategoria = "SSD";
      break;
    default:
      nomeCategoria = "Não especificado(a)";
  }

  return (
    <Container>
      <Titulo>{nomeCategoria}</Titulo>
      <CarroselContainer ref={carroselRef}>
        {!carregado ? (
          <Oval
            height={80}
            width={80}
            color="#5F5AA2"
            wrapperStyle={{}}
            wrapperClass=""
            visible={true}
            ariaLabel="oval-loading"
            secondaryColor="#0c0c14"
            strokeWidth={2}
            strokeWidthSecondary={2}
          />
        ) : (
          produtosCarrosel.map((p) => (
            <div key={p.name}>
              <Item>
                <Imagem>
                  <img src={p.image} alt={p.name} />
                </Imagem>
                <Info>
                  <Nome>{p.name}</Nome>
                </Info>
                <span>{renderPrice(p.price, p.offer)}</span>
                <BotaoAdicionar onClick={() => handleAddToCart(p.image, p.name, p.price)}>Adicionar ao carrinho</BotaoAdicionar>
              </Item>
            </div>
          ))
        )}
      </CarroselContainer>
      <BotaoEsquerdo>
        <BsFillArrowLeftCircleFill
          size={40}
          color="grey"
          onClick={movaParaEsquerda}
        />
      </BotaoEsquerdo>
      <BotaoDireito>
        <BsFillArrowRightCircleFill
          size={40}
          color="grey"
          onClick={movaParaDireita}
        />
      </BotaoDireito>
    </Container>
  );
}

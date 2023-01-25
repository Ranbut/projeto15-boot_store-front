import styled from "styled-components";

export const Container = styled.div`
    border-radius: 16px;
    justify-content: center
    margin-top: 50px
    width: 80%;
    box-sizing: border-box;
`

export const Titulo = styled.h4`
    font-size: 30px;
    padding-left: 20px;
    background: #5F5AA2;
    color: #090909
`

export const CarroselContainer = styled.div`
    display: flex;
    overflow-x: auto;
    scroll-behavior: smooth;
    background: #5F5AA2;

    /*Essas propriedades são para esconder o scroll*/
    -ms-overflow-style: none;  /* Em Edge */
    scrollbar-width: none;  /* Em Firefox */
    &::-webkit-scrollbar {
     -webkit-appearance: none; /* Em Chrome, Safari e Opera */
  }
    /*Caso remova, lembre de tirar todas - Vitor*/
`

export const Item = styled.div`
    background: #FFFFFF;
    border-radius: 16px;
    margin-left: 10px;
    transition: all .5s ease;
    overflow: hidden;
    box-shadow: 8px 14px 38px rgba(39,44,49,.06), 1px 3px 8px rgba(39,44,49,.03);

    &:hover {
        transform: translate3D(0,-1px,0) scale(1.03);
        box-shadow: 8px 28px 50px rgba(39,44,49,.07), 1px 6px 12px rgba(39,44,49,.04);
        transition: all .4s ease;
        cursor: pointer;
  }
`

export const Imagem = styled.div`
    img{
        margin-left: 20px;
        mix-blend-mode: multiply;
        width: 148px;
        height: 148px;
    }
`

export const Info = styled.div`
    display: flex;
    flex-direction: column;
    font-size: 1.2rem;
    margin: 10px 10px;
    height: 120px ;
`

export const Nome = styled.span`
    font-weight: bold;
    width: 180px;
    color: #00a8fb;
    text-align: center;
`

export const Preco = styled.span`
    color: red;
    text-align: center;
    font-size: 0.8rem;
    margin-top: 10px;
`

export const PrecoPromocao = styled.span`
    margin-top: 10px;
    background: #ff7e3b;
    color: rgb(51, 51, 51);
    font-size: 16px;
    font-weight: 700;
    border-radius:10px;
    text-align: center;
`

export const BotaoDireito = styled.span`
    position: relative;
    left: 94%;
    bottom: 170px
`

export const BotaoEsquerdo = styled.span`
    position: relative;
    bottom: 170px;
`
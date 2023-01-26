import styled from "styled-components";

export const Container = styled.div`
    border-radius: 16px;
    justify-content: center
    margin-top: 50px
    width: 80%;
    box-sizing: border-box;

    @media (max-width: 675px) {
        margin-top: 75px;
  }
`

export const Titulo = styled.h4`
  text-align: center;
  font-size: 30px;
  padding: 20px 20px;
  color: #0c0c14;
  font-weight: 700;
  border-radius: 40px;
  background: #5F5AA2;
  width: 275px;
  margin-left: 38%;
  margin-bottom: 10px;
  @media (max-width: 675px) {
    margin-left: 5%;
  }
`

export const CarroselContainer = styled.div`
    display: flex;
    overflow-x: auto;
    scroll-behavior: smooth;
    background: #2d2d30;
    border-radius:10px;
    height: 380px;

    /*Essas propriedades são para esconder o scroll*/
    -ms-overflow-style: none;  /* Em Edge */
    scrollbar-width: none;  /* Em Firefox */
    &::-webkit-scrollbar {
     -webkit-appearance: none; /* Em Chrome, Safari e Opera */
  }
    /*Caso remova, lembre de tirar todas - Vitor*/

    @media (max-width: 675px) {
    /*Essas propriedades são para esconder o scroll*/
    -ms-overflow-style: auto;  /* Em Edge */
    scrollbar-width: auto;  /* Em Firefox */
    &::-webkit-scrollbar {
     -webkit-appearance: auto; /* Em Chrome, Safari e Opera */
  }
}
    /*Caso remova, lembre de tirar todas - Vitor*/
`

export const Item = styled.div`
    background: #e5ebea;
    border-radius: 16px;
    margin-left: 10px;
    margin-top: 15px;
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
    height: 120px;
`

export const Nome = styled.span`
    font-weight: bold;
    width: 180px;
    color: #00a8fb;
    text-align: center;
`

export const Preco = styled.span`
    display: inline-block;
    position: relative;
    color: red;
    text-align: center;
    font-size: 0.8rem;
    margin-top: 10px;
    left: 50px;
    top: -50px;
`

export const PrecoPromocao = styled.span`
display: inline-block;
position: relative;
left: 20px;
top: -40px;
background: #ff7e3b;
color: rgb(51,51,51);
font-size: 16px;
font-weight: 700;
border-radius: 10px;
text-align: center;
width: 160px;
height: 20px;
`

export const BotaoDireito = styled.span`
    position: relative;
    left: 97%;
    bottom: 170px;
    cursor: pointer;
    @media (max-width: 675px) {
        display: none;
  }
`

export const BotaoEsquerdo = styled.span`
    position: relative;
    right: 4%;
    bottom: 170px;
    cursor: pointer;
    @media (max-width: 675px) {
        display: none;
  }
`
export const BotaoAdicionar = styled.button`
    position: relative;
    left: 14%;
    bottom: 5%;
    background: #5F5AA2;
    color: #0c0c14;
    border: none;
    border-radius: 10px;
    font-weight: 600;

    transition: background 1s, color 2s;

    &:hover{
        background: #3D33BD;
        color: #ffffff;
        cursor: pointer;
    }
`

import styled from "styled-components";
import background from "../../assets/background.jpg"

export const SearchContainer = styled.div`
    background-image: url(${background});
    width: 100%;
    padding: 125px 10%;
    font-family: 'Open Sans', sans-serif;
    display: flex;
    flex: row;
`

export const SearchFilter = styled.div`
    background: #2d2d30;
    width: 25%;
    border-radius: 40px;
    justify-content: center;
`

export const FilterName = styled.div`
    justify-content: center;
    display: flex;
    input{
        width: 75%;
        text-align: center;
    }
`

export const FilterTitle = styled.div`
    text-align: center;
    font-size: 18px;
    padding: 10px 10px;
    font-weight: 700;
    border-radius: 40px;
    width: 185px;
    margin-left: 18%;
    margin-bottom: 5px;
    color: #0c0c14;
    background: #5F5AA2;
    margin-top: 10px;
`

export const SearchResultContainer = styled.div`
    background: #2d2d30;
    width: 50%;
    margin-left: 15%;
    border-radius: 40px;
    padding: 20px 0;
`

export const Item = styled.div`
    display: flex;
    flex-direction: row;
    background: #e5ebea;
    border-radius: 16px;
    margin-top: 15px;
    width: 95%;
    margin-left: 15px;
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
        margin-top: 10px;
        mix-blend-mode: multiply;
        width: 120px;
        height: 120px;
    }
`

export const Info = styled.div`
    display: flex;
    flex-direction: column;
    font-size: 1.2rem;
    justify-content: center;
    margin: 10px 10px;
    height: 120px;
`

export const Nome = styled.span`
    font-weight: bold;
    width: 355px;
    color: #00a8fb;
    text-align: center;
`

export const Preco = styled.div`
    color: red;
    text-align: center;
    font-size: 0.8rem;
    margin-top: 10px;
`

export const PrecoPromocao = styled.div`
background: #ff7e3b;
color: rgb(51,51,51);
font-size: 16px;
font-weight: 700;
border-radius: 10px;
text-align: center;
width: 160px;
height: 20px;
margin-left: 100px;
margin-top: 12px;
`

export const ComponentsSelection = styled.div`
    margin-left: 20px;
    display: flex;
    justify-content: center;
    flex-direction: column;
    input{
        margin-top: 10px;
    }
`

export const ButtonSearch = styled.button`
    margin: 15px 110px;
`

export const BotaoComprar = styled.button`
    width: 150px;
    height: 25px;
    margin: 5px 105px;
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
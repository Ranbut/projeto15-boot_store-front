import styled from "styled-components";
import background from "../../assets/background.jpg"

export const HomeContainer = styled.div`
    background-image: url(${background});
    width: 100%;
    padding: 125px 10%;
    font-family: 'Open Sans', sans-serif;
`;

export const Rodape = styled.footer`
    background: #2d2d30;
    width: 100%;
    span{
        margin-left: 15px;
        margin-top: 10px;
    }
`

export const RodapeSlogan = styled.span`
    margin-top: 5px;
    margin-left: 20px;
    color: #999999;
`

export const RedeSociais = styled.div`
    margin-right: 50px;
    svg{
        margin-top: 15px;
        margin-left: 10px;
        cursor: pointer;
    }
    @media (max-width: 675px) {
        margin-right: 5px;
  }
`

export const RodapeEndereco = styled.p`
    margin-left: 10px;
    font-size: 12px;
    margin-top: 10px;
    margin-left: 21%;
    @media (max-width: 675px) {
        margin-left: 0%;
        font-size: 10px;
  }
`
export const RodapePerfil = styled.div`
  display: flex;
  justify-content: space-between;
`
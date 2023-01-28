import { BsYoutube, BsFacebook, BsInstagram, BsTwitter } from "react-icons/bs";
import styled from "styled-components";

export default function Rodape(){
    return(
    <RodapeBody>
        <RodapePerfil>
        <span>BootStore</span>
        <RodapeSlogan>Peças de computadores para todos os gostos</RodapeSlogan>
            <RedeSociais>
                <BsYoutube title="Siga a gente no Youtube" size={30}/>
                <BsFacebook title="Siga a gente no Facebook" size={30}/>
                <BsInstagram title="Siga a gente no Instagram" size={30}/>
                <BsTwitter title="Siga a gente no Twitter" size={30}/>
            </RedeSociais>
        </RodapePerfil>
        <RodapeEndereco>bootstore s.a. / CNPJ: 83.794.823/0001-63 / Inscrição Estadual: 046.183.599.861 / Endereço Rua Paracatu, 102 - São Paulo, SP - 04302-021</RodapeEndereco>
    </RodapeBody>);
}

const RodapeBody = styled.footer`
    background: #2d2d30;
    width: 100%;
    span{
        margin-left: 15px;
        margin-top: 10px;
    }
`

const RodapeSlogan = styled.span`
    margin-top: 5px;
    margin-left: 20px;
    color: #999999;
`

const RedeSociais = styled.div`
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

const RodapeEndereco = styled.p`
    margin-left: 10px;
    font-size: 12px;
    margin-top: 10px;
    margin-left: 21%;
    @media (max-width: 675px) {
        margin-left: 0%;
        font-size: 10px;
  }
`
const RodapePerfil = styled.div`
  display: flex;
  justify-content: space-between;
`


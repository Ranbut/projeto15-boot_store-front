import Carrosel from "../Carrosel/Carrosel.js";
import { HomeContainer, RedeSociais, Rodape, RodapeEndereco, RodapePerfil, RodapeSlogan } from "./styles.js";
import { BsYoutube, BsFacebook, BsInstagram, BsTwitter } from "react-icons/bs";
import Header from "../Header.js";

//Home será a route "/" e onde ficara os produtos
export default function Home(){
    return(
    <>
        <Header/>
        <HomeContainer>
            <Carrosel type={"motherboard"}/>
            <Carrosel type={"power-supply"}/>
            <Carrosel type={"cpu"}/>
            <Carrosel type={"gpu"}/>
            <Carrosel type={"ram"}/>
            <Carrosel type={"ssd"}/>
        </HomeContainer>
        <Rodape>
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
        </Rodape>
    </>
    );
}
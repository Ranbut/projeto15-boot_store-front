import Carrosel from "../Carrosel/Carrosel.js";
import { HomeContainer } from "./styles.js";
import Header from "../Header.js";
import Rodape from "../Rodape.js";

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
        <Rodape/>
    </>
    );
}
import Carrosel from "../Carrosel/Carrosel.js";

//Home será a route "/" e onde ficara os produtos
export default function Home(){
    return(
        <>
            <Carrosel type={"motherboard"}/>
            <Carrosel type={"power-supply"}/>
            <Carrosel type={"cpu"}/>
            <Carrosel type={"gpu"}/>
        </>
    );
}
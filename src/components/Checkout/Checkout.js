import { CheckoutBody, FormContainer, Container, Confirm, MethodPayment, PaymentType, PaymentInfo, InputForm } from "./styles"
import Header from "../Header"

export default function Checkout(){
    return(
    <>
        <Header/>
        <CheckoutBody>
            <Container>
                    <h1>Informações de pagamento</h1>
                    <FormContainer>
                    <MethodPayment>
                            <h4>Tipo de pagamento:</h4>
                            <PaymentType>
                                <input type="radio" value="boleto" name="boleto" defaultChecked={true} /> Gerar Boleto
                            </PaymentType>
                            <PaymentType>
                                <input type="radio" value="pix" name="pix" /> Gerar Pix
                            </PaymentType>
                        </MethodPayment>
                        <PaymentInfo>
                            <p>Confimar informações:</p>
                            <InputForm type="name" placeholder="Digite seu nome completo" name="nome" value="" focus required />
                            <InputForm type="email" placeholder="Digite seu email" name="email" value="" focus required />
                            <InputForm type="password" placeholder="Digite sua senha" name="password" value="" focus required />
                            <Confirm type="submit">Confirmar Pagamento</Confirm>
                        </PaymentInfo>
                    </FormContainer>
                </Container>
        </CheckoutBody>
    </>
    )
}
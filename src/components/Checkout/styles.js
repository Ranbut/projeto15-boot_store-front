import styled from "styled-components";
import background from "../../assets/background.jpg"

export const CheckoutBody = styled.div`
    background-image: url(${background});
    width: 100%;
    padding: 125px 20%;
    font-family: 'Open Sans', sans-serif;
`;

export const Container = styled.div`
    background: #4c2a85;
    border-radius: 8px;
    display: flex;
    flex-direction: column;
    h1{
        text-align: center;
        font-family: "Open Sans";
        font-weight: 700;
        font-size: 2.5rem;
        padding: 30px 20px;
        text-transform: uppercase;
        color: #fafafa;
    }
`;

export const FormContainer = styled.div`
    background: #4c2a85;
    border-radius: 8px;
    display: flex;
    flex-direction: row;
    h1{
        text-align: center;
        font-family: "Open Sans";
        font-weight: 700;
        font-size: 2.5rem;
        padding: 30px 20px;
        text-transform: uppercase;
        color: #fafafa;
    }
`;

export const InputForm = styled.input`
    border: none;
    border-radius: 4px;
    margin: 20px 20px;
    width: 380px;
    height: 45px;
    padding-left: 10px;
    font-size: 18px;
    color: #c6c6c6;
`

export const MethodPayment = styled.div`
    direction: flex;
    flex-direction: column;
    margin-left: 20px;
    width: 27%;
    h4{
        text-align: center;
    }
`

export const PaymentType = styled.div`
    width: 300px;
    height: 100px;
    background: #2d2d30;
    border-radius: 20px;
    margin-top: 20px;
    margin-bottom: 20px;
    text-align: center;
    input{
        margin-top: 15%
    }
`

export const PaymentInfo = styled.div`
    text-align: center;
    margin-left: 180px;

    p{
        margin-top: 20px
    }
`

export const Confirm = styled.button`
    background: #5f5aa2;
    border: none;
    border-radius: 4px;
    width: 60%;
    height: 40px;
    padding-left: 10px;
    font-size: 21px;
    font-style: bold;
    color: #fff;
    line-height:35px;
    margin: 20px 20px;
`
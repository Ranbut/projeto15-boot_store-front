import styled from "styled-components";
import background from "../../assets/background.jpg"

export const Container = styled.div`
     background-image: url(${background});
    padding: 125px 10%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    width: 100%;
    height: 100vh;
    margin: 0 auto;
    font-family: "Open sans", sans-serif;
    a {
        text-decoration: none;
    }
`
export const Form = styled.form`
    background-color: #4c2a85;
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
`
export const Input = styled.input`
    border: none;
    border-radius: 4px;
    margin: 20px 20px;
    width: 380px;
    height: 45px;
    padding-left: 10px;
    font-size: 18px;
    color: #c6c6c6;
`
export const Button = styled.button`
    background-color: #5f5aa2;
    border: none;
    border-radius: 4px;
    width: 380px;
    height: 40px;
    padding-left: 10px;
    font-size: 21px;
    font-style: bold;
    color: #fff;
    line-height:35px;
    margin: 20px 20px;
`
export const GoTo = styled.p`
    color: #ffffff;
    text-align: center;
    font-size: 20px;
    line-height: 30px;
    margin-bottom: 20px;
`
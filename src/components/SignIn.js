import styled from "styled-components";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { useContext, useState } from "react";

export default function SignIn() {
    const navigate = useNavigate();
    const [formInfo, setFormInfo] = useState({ email: '', password: '' })

    function handleForm(e) {
        setFormInfo({ ...formInfo, [e.target.name]: e.target.value });
        console.log(formInfo);
    }

    function handleSubmit(e) {
        e.preventDefault();
        console.log(formInfo);
        const promise = axios.post(`http://localhost:5000/signin`, ({ ...formInfo }));
        promise.then((res) => {
            navigate("/signup")
        });
        promise.catch((error) => {
            console.log(error);
            alert("Tente novamente");
        })
    }
    return (<>
        <Container>
            <Form onSubmit={handleSubmit}>
                <h1>BootStore</h1>
                <Input
                    type="email"
                    placeholder="Digite seu email"
                    name="email"
                    onChange={handleForm}
                    value={formInfo.email}
                    focus
                    required
                />
                <Input
                    type="password"
                    placeholder="Digite sua senha"
                    name="password"
                    onChange={handleForm}
                    value={formInfo.password}
                    focus
                    required
                />
                <Button type="submit">Entrar</Button>
                <GoTo onClick={() => navigate("/signup")}>
                    <p>Já possui cadastro? Não? </p>
                    <p>Então crie sua conta!</p>
                </GoTo>
            </Form>
        </Container>
    </>)
}
const Container = styled.div`
    background-color: #e5ebea;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    width: 100%;
    height: 668px;
    margin: 0 auto;
    font-family: "Open sans", sans-serif;
    a {
        text-decoration: none;
    }
`
const Form = styled.form`
background-color: #4c2a85;
border-radius: 8px;
display: flex;
flex-direction: column;
h1{
    font-size: 30px;    
    text-align: center;
    margin-top: 20px;
    margin-bottom: 20px;
}
`
const Input = styled.input`
border: none;
border-radius: 4px;
margin: 20px 20px;
width: 380px;
height: 45px;
padding-left: 10px;
font-size: 18px;
color: #c6c6c6;
`
const Button = styled.button`
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
const GoTo = styled.p`
color: #ffffff;
text-align: center;
font-size: 20px;
line-height:30px;
margin-bottom: 20px;
`

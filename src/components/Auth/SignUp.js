
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import Swal from "sweetalert2";
import {Container, Form, Input, Button, GoTo } from "./styles.js";
import { signUpPost } from "../../services/auth.js";

export default function SignUp() {
    const navigate = useNavigate();
    const [formInfo, setFormInfo] = useState({ name: '', email: '', password: '' })

    function handleForm(e) {
        setFormInfo({ ...formInfo, [e.target.name]: e.target.value });
    }

    function handleSubmit(e) {
        e.preventDefault();
       signUpPost(formInfo).then((res) => {
            Swal.fire({
                title: 'Parabéns!',
                text: 'Novo usuário cadastrado com sucesso!',
                icon: 'success',
                confirmButtonText: 'Ótimo! Quero fazer Login!',
            });
            navigate("/signin")
        })
        .catch((error) => {
            console.log(error);

            if (error.response.status === 400) {
                Swal.fire({
                    title: 'Erro!',
                    text: 'Verifique se seus dados estão digitados corretamente e se a sua senha tem mais de 4 dígitos',
                    icon: 'error',
                    confirmButtonText: 'Ok'
                });
            };

            if (error.response.status === 409) {
                Swal.fire({
                    title: 'Erro!',
                    text: 'Verifique os dados cadastrados ou tente fazer login!',
                    icon: 'error',
                    confirmButtonText: 'Ok'
                })
            };

            if (error.response.status === 500) {
                Swal.fire({
                    title: 'Erro!',
                    text: 'Ocorreu um erro com o nosso servidor, tente novamente mais tarde',
                    icon: 'error',
                    confirmButtonText: 'Ok'
                })
            };
        })
    }
    return (<>
        <Container>
            <Form onSubmit={handleSubmit}>
                <h1>BootStore</h1>
                <Input
                    type="name"
                    placeholder="Digite seu nome"
                    name="name"
                    onChange={handleForm}
                    value={formInfo.name}
                    focus
                    required
                />
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
                <Button type="submit">Cadastrar</Button>
                <GoTo onClick={() => navigate("/signin")}>
                    <p>Já possui cadastro? Sim? </p>
                    <p>Então faça login!</p>
                </GoTo>
            </Form>
        </Container>
    </>)
}
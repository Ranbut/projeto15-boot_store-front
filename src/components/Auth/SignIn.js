import { useNavigate } from "react-router-dom";
import { useContext, useState } from "react";
import { AuthContext } from "../../contexts/AuthContext";
import Swal from "sweetalert2";
import { Container, Form, Input, Button, GoTo } from "./styles.js";
import { signInPost } from "../../services/auth.js";

export default function SignIn() {
  const navigate = useNavigate();
  const { setToken, userInfo, setUserInfo } = useContext(AuthContext);
  const [formInfo, setFormInfo] = useState({ email: "", password: "" });

  function handleForm(e) {
    setFormInfo({ ...formInfo, [e.target.name]: e.target.value });
  }

  function handleSubmit(e) {
    e.preventDefault();
    signInPost(formInfo)
      .then((res) => {
        setToken(res.data.token);
        setUserInfo(res.data.user);

        Swal.fire({
          title: `Olá, ${userInfo.name}!`,
          icon: "success",
        });
        navigate("/");
      })
      .catch((error) => {
        console.log(error);

        if (error.response.status === 401) {
          Swal.fire({
            title: "Erro!",
            text: "Você não está autorizado a fazer login, verifique seus dados ou realize um cadastro.",
            icon: "error",
            confirmButtonText: "Ok",
          });
        }

        if (error.response.status === 500) {
          Swal.fire({
            title: "Erro",
            text: "Aconteceu algo errado no nosso servidor, tente novamente mais tarde!",
            icon: "error",
            cancelButtonText: "Ok",
          });
        }
      });
  }
  return (
    <>
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
    </>
  );
}

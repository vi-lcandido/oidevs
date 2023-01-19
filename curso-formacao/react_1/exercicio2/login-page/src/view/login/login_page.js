import { useNavigate } from "react-router-dom";
import Title from "../components/Title";
import Input from "../components/Input";
import Button from "../components/Button";
import Link from "../components/Link";
import "./style.css";
import { useState } from "react";

const LoginPage = () => {
  const navigate = useNavigate();
  const [title, setTitle] = useState("Login de agora")
  const mudarTitulo = () => {
    setTitle("Sucesso")
  }

  function vaParaHome() {
    navigate("/home");
  }

  return (
    <div className="page">
      <section className="container">
        <Title text={title} />
        <Input label="Usuário" inputtype="email" />
        <Input label="Senha" inputtype="password" />
        <Button text="Entrar" aoClicar={vaParaHome} />
        <Button text="Trocar título" aoClicar={mudarTitulo} color="#82ee90" borderRadius="10px"/>
        <Link text="Esqueceu a senha?" link="https://www.google.com.br" />
      </section>
    </div>
  );
};

export default LoginPage;

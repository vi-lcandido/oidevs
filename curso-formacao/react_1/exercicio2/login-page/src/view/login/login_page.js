import { useNavigate } from "react-router-dom";
import Title from "../components/Title";
import Input from "../components/Input";
import Button from "../components/Button";
import Link from "../components/Link";
import Subtitle from "../components/Subtitle";
import "./style.css";
import { useState } from "react";

const LoginPage = () => {
  const navigate = useNavigate();
  const [title, setTitle] = useState("Login");
  const mudarTitulo = () => {
    setTitle("Alterado");
  };
  const [subtitle, setSubtitle] = useState();

  function vaParaHome() {
    navigate("/home");
  }

  return (
    <div className="page">
      <section className="container">
        <Title text={title} />
        <Subtitle text={`Olá, ${subtitle}`} />
        <Input
          placeholder="Digite o usuário"
          label="Usuário"
          value={subtitle}
          onChange={(e) => setSubtitle(e.target.value)}
        />
        <Input
          placeholder="Digite sua senha"
          label="Senha"
          inputtype="password"
        />
        <Button text="Entrar" aoClicar={vaParaHome} />
        <Button
          text="Trocar título"
          aoClicar={mudarTitulo}
          bgcolor="#2bcee3"
          borderRadius="10px"
        />
        <Link text="Esqueceu a senha?" link="https://www.google.com.br" />
      </section>
    </div>
  );
};

export default LoginPage;

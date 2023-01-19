import "./style.css";

import Title from "../components/Title";
import Input from "../components/Input";
import Button from "../components/Button";
import Link from "../components/Link";
import Subtitle from "../components/Subtitle";

// import forgotPassword from "../forgotPassword";

import { Route, useNavigate } from "react-router-dom";
import { useState } from "react";

const LoginPage = () => {
  const navigate = useNavigate();

  const [title, setTitle] = useState("Login");

  const mudarTitulo = () => {
    setTitle("Alterado");
  };

  const [subtitle, setSubtitle] = useState();

  const vaParaHome = () => {
    navigate("/home");
  };

  const vaParaRecuperarSenha = () => {
    navigate("/forgotPassword");
  };

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
          inputType={"password"}
        />
        <Button text="Entrar" aoClicar={vaParaHome} />
        <Button
          text="Trocar título"
          aoClicar={mudarTitulo}
          bgcolor="#2bcee3"
          borderRadius="10px"
        />
        <Link text="Esqueceu a senha?" aoClicar={vaParaRecuperarSenha} />
      </section>
    </div>
  );
};

export default LoginPage;

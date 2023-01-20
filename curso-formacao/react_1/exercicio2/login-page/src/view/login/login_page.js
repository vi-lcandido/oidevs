import "./style.css";

import Title from "../components/Title";
import Input from "../components/Input";
import Button from "../components/Button";
import Link from "../components/Link";
import Subtitle from "../components/Subtitle";

import { useNavigate } from "react-router-dom";
import { useState } from "react";

const LoginPage = () => {
  const [title, setTitle] = useState("Login");
  const [subtitle, setSubtitle] = useState();

  const navigate = useNavigate();

  return (
    <div className="page">
      <section className="container">
        <Title text={title} />
        <Subtitle text={subtitle} />
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
        <Button text="Entrar" aoClicar={() => navigate("/home")} />
        <Button
          text="Trocar título"
          aoClicar={() => setTitle(title === "Login" ? "Alterado" : "Login")}
          bgcolor="#2bcee3"
          borderRadius="10px"
        />
        <Link
          text="Esqueceu a senha?"
          aoClicar={() => navigate("/recoverPassword")}
        />
      </section>
    </div>
  );
};

export default LoginPage;

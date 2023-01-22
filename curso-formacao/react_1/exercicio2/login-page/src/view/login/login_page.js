import "./style.css";

import Title from "../components/Title";
import Input from "../components/Input";
import Button from "../components/Button";
import Link from "../components/Link";
// import Subtitle from "../components/Subtitle";

import { useNavigate } from "react-router-dom";
import { useState } from "react";
import Subtitle from "../components/Subtitle";

const LoginPage = () => {
  const navigate = useNavigate();

  const [title, setTitle] = useState("Login");
  // const [subtitle, setSubtitle] = useState();
  const [showError, setShowError] = useState(false);
  // valor do input do usuario:
  const [nomeDeUsuario, setNomeDeUsuario] = useState("#e1e1e1");
  // valor do input da senha:
  const [senha, setSenha] = useState("");
  //cirando usuários
  const [usuarios, setUsuarios] = useState([
    {
      email: "joao@hotmail.com",
      password: "oidevs",
    },
    {
      email: "jady@oi.com.br",
      password: "oidevs",
    },
    {
      email: "raniel@oi.com.br",
      password: "caneta",
    },
  ]);
  //criando estado para mudança de cor do input do usuário qnd as credenciais forem inválidas
  const [corInput, setCorInput] = useState("#");

  const vaParaHome = () => {
    const usuarioEscolhido = usuarios.find(
      (usuario) => usuario.email === nomeDeUsuario && usuario.password === senha
    );

    if (usuarioEscolhido) {
      navigate("/home");
    } else {
      setShowError(true);
      setCorInput("red");
    }
  };
  return (
    <div className="page">
      <section className="container">
        <Title text={title} />
        {/* <Subtitle text={subtitle} /> */}
        {showError ? <Subtitle text="Credenciais inválidas" /> : null}

        <Input
          placeholder="Digite o usuário"
          label="Usuário"
          cor={corInput}
          // value={subtitle}
          // onChange={(e) => setSubtitle(e.target.value)}
          onChange={(e) => setNomeDeUsuario(e.target.value)}
        />
        <Input
          placeholder="Digite sua senha"
          label="Senha"
          cor={corInput}
          inputType={"password"}
          onChange={(e) => setSenha(e.target.value)}
        />

        <Button text="Entrar" aoClicar={vaParaHome} />
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

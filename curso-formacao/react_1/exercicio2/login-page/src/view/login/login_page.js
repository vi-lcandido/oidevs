import { useNavigate } from "react-router-dom";
import Title from "../components/Title";
import Input from "../components/Input";
import Button from "../components/Button";
import Link from "../components/Link";
import "./style.css";

const LoginPage = () => {
  const navigate = useNavigate();

  function vaParaHome() {
    navigate("/home");
  }

  return (
    <div className="page">
      <section className="container">
        <Title text="Login" />
        <Input label="Usuário" inputtype="email" />
        <Input label="Senha" inputtype="password" />
        <Button text="Entrar" redirecionar={vaParaHome} />
        <Link text="Esqueceu a senha?" link="https://www.google.com.br" />
      </section>
    </div>
  );
};

export default LoginPage;

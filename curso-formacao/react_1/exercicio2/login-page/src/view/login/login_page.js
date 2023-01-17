import { useNavigate } from "react-router-dom";
import Title from "../components/Title";
import Input from "../components/Input";
import Button from "../components/Button";
import Link from "../components/Link";
import "./style.css";

function LoginPage() {
  const navigate = useNavigate();

  function vaParaHome() {
    navigate("/home");
  }

  return (
    <div className="login-page">
      <section className="login-container">
        <Title text="Login" />
        <Input label="Usuário" inputtype="email" />
        <Input label="Senha" inputtype="password" />
        <Button
          text="Entrar"
          redirecionar={vaParaHome}
          bgColor="#a13854"
          color="#e1e1e1"
        />
        <Link text="Esqueceu a senha?" link="https://www.google.com.br" />
      </section>
    </div>
  );
}

export default LoginPage;

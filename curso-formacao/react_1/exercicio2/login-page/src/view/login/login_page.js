import Title from "../components/Title";
import Input from "../components/Input";
import Button from "../components/Button";
import Link from "../components/Link";
import "./style.css";

function LoginPage() {
  return (
    <div className="login-page">
      <section className="login-container">
        <Title text="Login" />
        <Input label="Usuário" inputtype="email" />
        <Input label="Senha" inputtype="password" />
        <Button text="login" link="https://discord.gg/RmrcEeBa" />
        <Link
          text="Esqueceu a seha?"
          link="https://www.youtube.com/watch?v=K6tzeZLjUNE&ab_channel=NPRMusic"
        />
      </section>
    </div>
  );
}

export default LoginPage;

import Input from "../components/Input";
import Title from "../components/Title";
import Button from "../components/Button";
import { useNavigate } from "react-router-dom";

const RecoverPage = () => {
  const navigate = useNavigate();

  return (
    <div className="page">
      <section className="container">
        <Title text={"Recuperar Senha"} />
        <Input
          label="E-mail"
          inputType={"email"}
          placeholder="Digite seu email"
        />
        <Button
          text="Voltar"
          aoClicar={() => navigate("/")}
          borderRadius="5px"
        />
      </section>
    </div>
  );
};

export default RecoverPage;

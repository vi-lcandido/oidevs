import Input from "../components/Input";
import Title from "../components/Title";
import Button from "../components/Button";

import { useNavigate, useLocation } from "react-router-dom";

const RecoverPage = () => {
  const navigate = useNavigate();
  const location = useLocation();

  return (
    <div className="page">
      <section className="container">
        <Title text={"Recuperar Senha"} />
        <Input
          label="E-mail"
          inputType={"email"}
          placeholder="Digite seu email"
        />
        <Button text="Enviar" aoClicar={() => window.alert("E-mail enviado")} />
        <Button
          text="Voltar"
          aoClicar={() => navigate("/")}
          bgcolor="#2bcee3"
          borderRadius="10px"
        />
      </section>
    </div>
  );
};

export default RecoverPage;

import Input from "../components/Input";
import Title from "../components/Title";

const RecoverPassword = () => {
  return (
    <div className="page">
      <section className="container">
        <Title text={"Recuperar Senha"} />
        <Input
          label="E-mail"
          inputType={"email"}
          placeholder="Digite seu email"
        />
        <Button text="Voltar" aoClicar={vaParaLogin} borderRadius="5px" />
      </section>
    </div>
  );
};

export default RecoverPassword;

import Button from "../components/Button";
import { useNavigate } from "react-router-dom";

const Home = () => {
  const navigate = useNavigate();

  return (
    <div className="page">
      <section className="container">
        <Button
          text="Voltar"
          aoClicar={() => navigate("/")}
          borderRadius="5px"
        />
        <h1>Essa é a Home!</h1>
      </section>
    </div>
  );
};

export default Home;

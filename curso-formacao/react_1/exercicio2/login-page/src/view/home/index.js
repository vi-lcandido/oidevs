import Button from "../components/Button";
import { useNavigate } from "react-router-dom";
import "./style.css";

function Home() {
  const navigate = useNavigate();

  function vaParaLogin() {
    navigate("/");
  }

  return (
    <div className="home-container ">
      <Button
        text="Voltar"
        redirecionar={vaParaLogin}
        padding="10px"
        borderRadius="5px"
      />
      <h1>Essa é a Home!</h1>
    </div>
  );
}

export default Home;

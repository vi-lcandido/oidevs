import Button from "../components/Button";
import Title from "../components/Title";
import { useNavigate, useLocation } from "react-router-dom";

const Home = () => {
  const navigate = useNavigate();
  const location = useLocation();

  const {listaDeUsuarios}=location.state;

  return (
    <div className="page">
      <section className="container">
        {/* fazer title nesse h1 */}
        <Title></Title>
        <ul>
          {listaDeUsuarios.map((usuarios) => 
          <li key={usuarios.id}>{usuarios.email}</li>
          )}
        </ul>
          <Button
            text="Voltar"
            aoClicar={() => navigate("/")}
            borderRadius="5px"
          />
      </section>
    </div>
  );
};

export default Home;

import Button from "../components/Button";
import Title from "../components/Title";
import { useNavigate, useLocation } from "react-router-dom";
import { useEffect, useState } from "react";

const Home = () => {
  const navigate = useNavigate();
  const location = useLocation();

  const [count, setCount] = useState(0);
  const [novaListaUsuarios, setNovaListaUsuarios] = useState([]);

  const { listaDeUsuarios } = location.state;

  //setando no local storage os usuários
  localStorage.setItem("usuarios", JSON.stringify(novaListaUsuarios));


  useEffect(() => {
    if (count !== 0) {
      // lista antiga é valor atual da variável novaListaUsuarios, que pega todos os elementos dessa lista e adiciona mais um elemento. 
      //setNovaListaUsuarios está associado a incrementar usuários na novaListaUsuários
      setNovaListaUsuarios((listaAntigaUsuarios) => [
        ...listaAntigaUsuarios,
        listaDeUsuarios[count - 1],
      ]);
    }
  }, [count]);

useEffect(()=> {
    return () => {
      console.log('desmontando...')
      localStorage.clear()
    };
  }, [])


  return (
    <div className="page">
      <section className="container">
        <Title text="Essa é a Home" />
        <span style={{ color: "#2bcee3" }}> {count} usuários</span>
        <ul>
          {novaListaUsuarios.map((usuarios) => (
            <li key={usuarios.id}>{usuarios.email}</li>
          ))}
        </ul> 
        {count < 4 ? <Button text="Adicionar Usuário" aoClicar={() => setCount(count + 1)}/> : null}
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

export default Home;

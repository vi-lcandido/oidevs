import "./style.css";

function Button({ text, redirecionar }) {
  return (
    <button onClick={redirecionar} className="login-button">
      {text}
    </button>
  );
}

export default Button;

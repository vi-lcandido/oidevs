import "./style.css";

const Button = ({ padding, borderRadius, text, redirecionar }) => {
  return (
    <button
      onClick={redirecionar}
      className="login-button"
      style={{ padding, borderRadius }}
    >
      {text}
    </button>
  );
}

export default Button;

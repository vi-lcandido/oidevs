import "./style.css";

function Button({ bgColor, padding, borderRadius, color, text, redirecionar }) {
  return (
    <button
      onClick={redirecionar}
      className="login-button"
      style={{ backgroundColor: bgColor, padding, borderRadius, color }}
    >
      {text}
    </button>
  );
}

export default Button;

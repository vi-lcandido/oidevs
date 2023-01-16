import "./style.css";

function Button({ text, link }) {
  return (
    <button
      onClick={() => (window.location.href = link)}
      className="login-button"
    >
      {text}
    </button>
  );
}

export default Button;

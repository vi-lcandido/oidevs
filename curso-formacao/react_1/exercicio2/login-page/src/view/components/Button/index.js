import "./style.css";
import ProtoTypes from "prop-types";

const Button = ({ borderRadius, color, text, aoClicar }) => {
  return (
    <button
      onClick={aoClicar}
      className="login-button"
      style={{ borderRadius, color }}
    >
      {text}
    </button>
  );
};

Button.propTypes = {
  text: ProtoTypes.string.isRequired,
  redirecionar: ProtoTypes.func.isRequired,
  borderRadius: ProtoTypes.string,
};

Button.defaultProps = {
  borderRadius: "0px",
  color: "#e1e1e1",
};

export default Button;

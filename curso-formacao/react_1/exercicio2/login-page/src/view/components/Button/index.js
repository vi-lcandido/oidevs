import "./style.css";
import ProtoTypes from "prop-types";

const Button = ({ borderRadius, text, aoClicar }) => {
  return (
    <button
      onClick={aoClicar}
      className="login-button"
      style={{ borderRadius }}
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
};

export default Button;

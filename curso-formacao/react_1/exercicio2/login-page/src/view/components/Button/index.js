import "./style.css";
import ProtoTypes from "prop-types";

const Button = ({ borderRadius, bgcolor, text, aoClicar }) => {
  return (
    <button
      onClick={aoClicar}
      className="login-button"
      style={{ borderRadius, backgroundColor: bgcolor }}
    >
      {text}
    </button>
  );
};

Button.propTypes = {
  text: ProtoTypes.string.isRequired,
  aoClicar: ProtoTypes.func,
  borderRadius: ProtoTypes.string,
};

Button.defaultProps = {
  borderRadius: "0px",
  bgcolor: "#a13854",
};

export default Button;

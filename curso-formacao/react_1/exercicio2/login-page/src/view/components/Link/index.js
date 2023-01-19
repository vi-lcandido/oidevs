import "./style.css";
import ProtoTypes from "prop-types";

const Link = ({ text, aoClicar }) => {
  return (
    <a className="login-link" onClick={aoClicar} target="_blank">
      {text}
    </a>
  );
};

Link.propTypes = {
  text: ProtoTypes.string,
  aoClicar: ProtoTypes.func,
};

export default Link;

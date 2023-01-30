import "./style.css";
import ProtoTypes from "prop-types";

const Title = ({ text, padBtm }) => {
  return (
    <div className="login-header">
      <h2 className="title">{text}</h2>
    </div>
  );
};
//adcionando uma propriedade morango do tipo objeto
//esse objeto vai tipar o componente usando ProtoTypes
Title.propTypes = {
  text: ProtoTypes.string,
};

export default Title;

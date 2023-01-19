import "./style.css";
import ProtoTypes from "prop-types";

const Input = ({ label, inputType, placeholder, onChange, value }) => {
  return (
    <>
      <label>{label}</label>
      <input
        type={inputType}
        placeholder={placeholder}
        onChange={onChange}
        value={value}
        className="login-input"
      />
    </>
  );
};

Input.propTypes = {
  inputType: ProtoTypes.string,
  placeholder: ProtoTypes.string.isRequired,
  onChange: ProtoTypes.func,
  value: ProtoTypes.string
};

export default Input;

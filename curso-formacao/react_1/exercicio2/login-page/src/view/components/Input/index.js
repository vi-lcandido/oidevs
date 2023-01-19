import "./style.css";

const Input = ({ label, inputtype, placeholder, onChange, value }) => {
  return (
    <>
      <label>{label}</label>
      <input
        type={inputtype}
        placeholder={placeholder}
        onChange={onChange}
        value={value}
        className="login-input"
      />
    </>
  );
};

export default Input;

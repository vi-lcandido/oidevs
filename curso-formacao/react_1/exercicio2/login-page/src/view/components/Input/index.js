import "./style.css"

function Input({ label, inputtype }) {
    return <>
    <label>{label}</label>
    <input className="login-input" type={inputtype}/>
        </>;
}

export default Input;
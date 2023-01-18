import "./style.css";

const Link = ({ text, link }) => {
  return (
    <a className="login-link" href={link} target="_blank">
      {text}
    </a>
  );
}

export default Link;

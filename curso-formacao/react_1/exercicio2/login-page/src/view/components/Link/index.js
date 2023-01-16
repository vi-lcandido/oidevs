import "./style.css"

function Link({ text, link }) {
    return <>
    <a className="login-link" href={link}>{text}</a>
        </>;
}

export default Link;
import "./style.css"

function Title({ text }) {
    return (
        <div className="login-header">
            <h2 className="title">{text}</h2> 
        </div>
    );
}

export default Title;
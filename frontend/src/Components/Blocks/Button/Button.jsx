import "./style/Button.css";

const Button = ({image, text, classBlock="button"}) => {
    return (
        <button type="button" className={classBlock} onClick={() => {}}>
            {image}
            <p>{text}</p>
        </button>
    );
}
 
export default Button;
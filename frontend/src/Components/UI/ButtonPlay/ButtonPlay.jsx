import classes from "./style/ButtonPlay.module.css";

const ButtonPlay = ({children}) => {

    return ( 
        <button type="button" className={classes}>
            {children}
        </button>
    );
}
 
export default ButtonPlay;
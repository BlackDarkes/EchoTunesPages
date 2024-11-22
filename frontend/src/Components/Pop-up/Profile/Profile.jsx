import Button from "../../Blocks/Button/Button";
import Close from "./AsetsProfile/Close";
import Download from "./AsetsProfile/Download";
import Exit from "./AsetsProfile/Exit";
import Login from "./AsetsProfile/Login";
import History from "./AsetsProfile/History";
import "./style/Profile.css";
import Settings from "./AsetsProfile/Settings";
import Termofuse from "./AsetsProfile/Termsofuse";
import Referents from "./AsetsProfile/Referens";
import Feedback from "./AsetsProfile/Feedback";

const Profile = ({active, setActive}) => {
    return (
        <div className={active ? "active popup" : "popup"}>
            <button type="button" className="popup__close" onClick={() => setActive(!active)}><Close/></button>
            <div className="popup-block"> 
                <Button image={<Login/>} text={"Войти/Регистрация"}/>
                <Button image={<Exit/>} text={"Выход"}/>
                <Button image={<Download/>} text={"Загрузка музыки"}/>
                <Button image={<History/>} text={"История"}/>
                <Button image={<Settings/>} text={"Настройки"}/>
                <Button image={<Termofuse/>} text={"Условия пользования"}/>
                <Button image={<Referents/>} text={"Справка"}/>
                <Button image={<Feedback/>} text={"Оставить отзыв"}/>
            </div>
        </div>
    );
}
 
export default Profile;
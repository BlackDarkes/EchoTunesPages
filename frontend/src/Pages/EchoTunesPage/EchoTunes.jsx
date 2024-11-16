import AsideBlock from "../../Components/AsideBlock/AsideBlock";
import MusicBar from "../../Components/MusicBar/MusicBar";

const EchoTunes = () => {
    return (
        <div className="echoTunes">
            <AsideBlock home="aside-navigation__button active" library="aside-navigation__button"/>
            <MusicBar/>
        </div>
    );
}
 
export default EchoTunes;
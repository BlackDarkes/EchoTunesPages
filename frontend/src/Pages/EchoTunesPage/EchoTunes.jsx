import AsideBlock from "../../Components/AsideBlock/AsideBlock";
import HeaderMobile from "../../Components/Mobile-blocks/HeaderMobile/HeaderMobile";
import MusicBar from "../../Components/MusicBar/MusicBar";
import MusicBlock from "../../Components/MusicBlock/MusicBlock";
import ProfilUser from "../../Components/ProfilUser/ProfilUser";
import SerchBar from "../../Components/SerchPanel/SearchBar";
import "./style/EchoTunes.css";

const EchoTunes = () => {
    return (
        <div className="echoTunes">
            <AsideBlock home="aside-navigation__button active" library="aside-navigation__button"/>
            <MusicBar/>
            <section className="echoTunes__blocks">
                <header className="header-block">
                    <SerchBar/>
                    <ProfilUser/>
                </header>
                <HeaderMobile/>
                <main className="musics">
                    <MusicBlock/>
                </main>
            </section>
        </div>
    );
}
 
export default EchoTunes;
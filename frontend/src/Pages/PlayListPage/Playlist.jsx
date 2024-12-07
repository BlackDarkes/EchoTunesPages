import AsideBlock from "../../Components/AsideBlock/AsideBlock";
import AsideBlockMobile from "../../Components/Mobile-blocks/AsideBlockMobile/AsideBlockMobile";
import HeaderMobile from "../../Components/Mobile-blocks/HeaderMobile/HeaderMobile";
import ProfilUser from "../../Components/ProfilUser/ProfilUser";
import SerchBar from "../../Components/SerchPanel/SearchBar";

const PlaylistPage = () => {
    return (
        <div className="echoTunes">
            <AsideBlock home="aside-navigation__button" library="aside-navigation__button active"/>
            <AsideBlockMobile home="mobile__home mobile__button" library="mobile__library active  mobile__button"/>
            <section className="echoTunes__blocks">
                <header className="header-block">
                    <SerchBar/>
                    <ProfilUser/>
                </header>
                <HeaderMobile home="aside-navigation__button" library="aside-navigation__button active"/>
            </section>
        </div>
    );
}
 
export default PlaylistPage;
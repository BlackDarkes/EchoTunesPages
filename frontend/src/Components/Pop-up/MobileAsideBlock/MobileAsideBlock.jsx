import { Link } from "react-router-dom";
import Button from "../../Blocks/Button/Button";
import Labrary from "../../AssetsBlocks/AsideBlock/Labrary";
import Home from "../../AssetsBlocks/AsideBlock/Home";
import New from "../../AssetsBlocks/AsideBlock/New";
import "./style/MobileAsideBlock.css";

const MobileAsideBlock = ({home, library, active}) => {
    return (
        <aside className={active ? "mobileAsideBlock active" : "mobileAsideBlock"}>
            <div className="mobileAsideBlock__block">
                <div className="mobileAside">
                    <div className="mobileAside-navigation">
                        <Link className={[home].join(" ")}>
                            <Button image={<Home/>} text={"Главная"} />
                        </Link>
                        <Link className={[library].join(" ")}>
                            <Button image={<Labrary/>} text={"Библиотека"}/>
                        </Link>
                    </div>

                    <div className="mobileAside-playlist">
                        <Button image={<New/>} text={"Новый"} classBlock={"mobileAside-playlist__new"}/>

                        <section className="playlist-block">
                            <Link className="playlist-block__playlists" to={""}><p className="playlist-block__text">Созданный плейлист...</p></Link>
                            <Link className="playlist-block__playlists" to={""}><p className="playlist-block__text">Созданный плейлист...</p></Link>
                            <Link className="playlist-block__playlists" to={""}><p className="playlist-block__text">Созданный плейлист...</p></Link>
                            <Link className="playlist-block__playlists" to={""}><p className="playlist-block__text">Созданный плейлист...</p></Link>
                            <Link className="playlist-block__playlists" to={""}><p className="playlist-block__text">Созданный плейлист...</p></Link>
                            <Link className="playlist-block__playlists" to={""}><p className="playlist-block__text">Созданный плейлист...</p></Link>
                            <Link className="playlist-block__playlists" to={""}><p className="playlist-block__text">Созданный плейлист...</p></Link>
                        </section>
                    </div>
                </div>
            </div>
        </aside>
    );
}
 
export default MobileAsideBlock;
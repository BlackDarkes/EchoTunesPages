import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import "./style/AsudeBlock.css";
import Button from "../Blocks/Button/Button";
import Home from "../AssetsBlocks/AsideBlock/Home";
import Labrary from "../AssetsBlocks/AsideBlock/Labrary";
import New from "../AssetsBlocks/AsideBlock/New";
import AddPlaylist from "../Pop-up/AddPlaylist/AddPlaylist";

const AsideBlock = ({home, library}) => {
    const [open, setOpen] = useState(false);

    useEffect(() => {
        document.addEventListener("click", (event) => {
            const newPlaylist = event.target.closest(".aside-playlist__new");

            if (newPlaylist) {
                setOpen(!open);
            };
        });

        return () => {
            document.removeEventListener("click", (event) => {
                const newPlaylist = event.target.closest(".aside-playlist__new");
    
                if (newPlaylist) {
                    setOpen(!open);
                };
            });
        }
    }, [open])

    return ( 
        <>
        <aside className="asideBlock">
            <div className="asideBlock__block">
                <div className="aside">
                    <div className="aside-navigation">
                        <h1 className="aside-navigation__title">EchoTunes</h1>
                        <Link className={[home].join(" ")} to="/">
                            <Button image={<Home/>} text={"Главная"} />
                        </Link>
                        <Link className={[library].join(" ")} to="/EchoTunesPages/playlists">
                            <Button image={<Labrary/>} text={"Библиотека"}/>
                        </Link>
                    </div>

                    <div className="aside-playlist">
                        <Button image={<New/>} text={"Новый"} classBlock={"aside-playlist__new"} />

                        <section className="playlist-block">
                        <Link className="playlist-block__playlists" to="/EchoTunesPages/playlists/music/:number"><p className="playlist-block__text">Созданный плейлист...</p></Link>
                        <Link className="playlist-block__playlists" to="/EchoTunesPages/playlists/music/:number"><p className="playlist-block__text">Созданный плейлист...</p></Link>
                        <Link className="playlist-block__playlists" to="/EchoTunesPages/playlists/music/:number"><p className="playlist-block__text">Созданный плейлист...</p></Link>
                        <Link className="playlist-block__playlists" to="/EchoTunesPages/playlists/music/:number"><p className="playlist-block__text">Созданный плейлист...</p></Link>
                        <Link className="playlist-block__playlists" to="/EchoTunesPages/playlists/music/:number"><p className="playlist-block__text">Созданный плейлист...</p></Link>
                        <Link className="playlist-block__playlists" to="/EchoTunesPages/playlists/music/:number"><p className="playlist-block__text">Созданный плейлист...</p></Link>
                        <Link className="playlist-block__playlists" to="/EchoTunesPages/playlists/music/:number"><p className="playlist-block__text">Созданный плейлист...</p></Link>
                        </section>
                    </div>
                </div>
            </div>
        </aside>
        <AddPlaylist open={open} setOpen={setOpen}/>

        </>
    );
}
 
export default AsideBlock;
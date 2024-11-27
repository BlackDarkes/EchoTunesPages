import { Link } from "react-router-dom";
import Button from "../../Blocks/Button/Button";
import Labrary from "../../AssetsBlocks/AsideBlock/Labrary";
import Home from "../../AssetsBlocks/AsideBlock/Home";
import New from "../../AssetsBlocks/AsideBlock/New";
import "./style/MobileAsideBlock.css";
import { useEffect, useState } from "react";
import AddPlaylist from "../AddPlaylist/AddPlaylist";

const MobileAsideBlock = ({home, library, active}) => {
    const [open, setOpen] = useState(false);

    useEffect(() => {
        document.addEventListener("click", (event) => {
            const newPlaylist = event.target.closest(".mobileAside-playlist__new");

            if (newPlaylist) {
                setOpen(!open);
            };
        });

        return () => {
            document.removeEventListener("click", (event) => {
                const newPlaylist = event.target.closest(".mobileAside-playlist__new");
    
                if (newPlaylist) {
                    setOpen(!open);
                };
            });
        }
    }, [open])

    return (
        <>
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
                        <Button image={<New/>} text={"Новый"} classBlock={"mobileAside-playlist__new"} />

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
        <AddPlaylist open={open} setOpen={setOpen}/>
        </>
    );
}
 
export default MobileAsideBlock;
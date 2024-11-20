import React from "react";
import { Link } from "react-router-dom";
import "./style/AsudeBlock.css";
import Home from "./Blocks/Главная";
import Library from "./Blocks/Библиотека";
import New from "./Blocks/Новый";

const AsideBlock = ({home, library}) => {
    return ( 
        <aside className="asideBlock">
            <div className="asideBlock__block">
                <div className="aside">
                    <div className="aside-navigation">
                        <h1 className="aside-navigation__title">EchoTunes</h1>
                        <Link className={[home].join(" ")}>
                            <Home/>
                        </Link>
                        <Link className={[library].join(" ")}>
                            <Library/>
                        </Link>
                    </div>

                    <div className="aside-playlist">
                        <button type="button" className="aside-playlist__new">
                            <New/>
                        </button>

                        <section className="playlist-block">
                            <Link className="playlist-block__playlists" to={""}>Созданный плейлист...</Link>
                            <Link className="playlist-block__playlists" to={""}>Созданный плейлист...</Link>
                            <Link className="playlist-block__playlists" to={""}>Созданный плейлист...</Link>
                            <Link className="playlist-block__playlists" to={""}>Созданный плейлист...</Link>
                            <Link className="playlist-block__playlists" to={""}>Созданный плейлист...</Link>
                            <Link className="playlist-block__playlists" to={""}>Созданный плейлист...</Link>
                            <Link className="playlist-block__playlists" to={""}>Созданный плейлист...</Link>
                        </section>
                    </div>
                </div>
            </div>
        </aside>
    );
}
 
export default AsideBlock;
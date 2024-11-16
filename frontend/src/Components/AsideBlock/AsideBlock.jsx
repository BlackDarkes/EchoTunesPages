import React from "react";
import { Link } from "react-router-dom";
import "./style/AsudeBlock.css";

const AsideBlock = ({home, library}) => {
    return ( 
        <aside className="asideBlock">
            <div className="asideBlock__block">
                <div className="aside">
                    <div className="aside-navigation">
                        <h1 className="aside-navigation__title">EchoTunes</h1>
                        <Link className={[home].join(" ")}>
                            <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M7.5 18.3333V10H12.5V18.3333M2.5 7.50001L10 1.66667L17.5 7.50001V16.6667C17.5 17.1087 17.3244 17.5326 17.0118 17.8452C16.6993 18.1577 16.2754 18.3333 15.8333 18.3333H4.16667C3.72464 18.3333 3.30072 18.1577 2.98816 17.8452C2.67559 17.5326 2.5 17.1087 2.5 16.6667V7.50001Z" stroke="#ADA8A8" strokeLinecap="round" strokeLinejoin="round"/>
                            </svg>
                            <p>Главная</p>
                        </Link>
                        <Link className={[library].join(" ")}>
                            <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M13.75 7.83334L6.25 3.50834M2.725 5.8L10 10.0083L17.275 5.8M10 18.4V10M17.5 13.3333V6.66667C17.4997 6.3744 17.4225 6.08735 17.2763 5.83431C17.13 5.58127 16.9198 5.37114 16.6667 5.225L10.8333 1.89167C10.58 1.74539 10.2926 1.66838 10 1.66838C9.70744 1.66838 9.42003 1.74539 9.16667 1.89167L3.33333 5.225C3.08022 5.37114 2.86998 5.58127 2.72372 5.83431C2.57745 6.08735 2.5003 6.3744 2.5 6.66667V13.3333C2.5003 13.6256 2.57745 13.9127 2.72372 14.1657C2.86998 14.4187 3.08022 14.6289 3.33333 14.775L9.16667 18.1083C9.42003 18.2546 9.70744 18.3316 10 18.3316C10.2926 18.3316 10.58 18.2546 10.8333 18.1083L16.6667 14.775C16.9198 14.6289 17.13 14.4187 17.2763 14.1657C17.4225 13.9127 17.4997 13.6256 17.5 13.3333Z" stroke="none" strokeLinecap="round" strokeLinejoin="round"/>
                            </svg>
                            <p>Библиотека</p>
                        </Link>
                    </div>

                    <div className="aside-playlist">
                        <button type="button" className="aside-playlist__new">
                            <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M9.99999 4.16666V15.8333M4.16666 9.99999H15.8333" stroke="white" strokeLinecap="round" strokeLinejoin="round"/>
                            </svg>
                            <p>Новый</p>
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
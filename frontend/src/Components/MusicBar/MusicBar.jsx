import React, { useState } from "react";
import "./style/MusicBar.css";

const MusicBar = () => {
    const [play, setPlay] = useState(true);

    const playMusic = (
        <svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M8.33319 5L31.6665 20L8.33319 35V5Z" stroke="#ADA8A8" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
    );

    const stopMusic = (
        <svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M16.6665 6.66669H9.99988V33.3334H16.6665V6.66669Z" stroke="#ADA8A8" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            <path d="M29.9999 6.66669H23.3332V33.3334H29.9999V6.66669Z" stroke="#ADA8A8" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
    );

    return (
        <section className="musicBar">
            <div className="musicBar__block">
                <div className="bar">
                    <input type="range" name="" id="" min={1} max={100}/>
                    <div className="bar-info">
                        <p className="bar-info__time"><span className="start-time">0:00</span> / <span className="full-time">3:30</span></p>
                        <p className="bar-info__name"><span className="name-music">Назание трэка</span> / <span className="author-music">Автор</span></p>
                    </div>
                    <div className="bar-nav">
                        <button type="button" className="bar-nav__randomMusic">
                            <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M13.3333 2.5H17.5M17.5 2.5V6.66667M17.5 2.5L3.33334 16.6667M17.5 13.3333V17.5M17.5 17.5H13.3333M17.5 17.5L12.5 12.5M3.33334 3.33333L7.50001 7.5" stroke="#ADA8A8" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                            </svg>
                        </button>
                        <div className="navigation">
                            <button type="button" className="navigation__previous">
                                <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M4.16656 15.8333V4.16665M15.8332 16.6666L7.4999 9.99998L15.8332 3.33331V16.6666Z" stroke="#ADA8A8" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                                </svg>
                            </button>
                            <button type="button" className="navigation__play" onClick={() => setPlay(!play)}>
                                {play ? playMusic : stopMusic}
                            </button>
                            <button type="button" className="navigation__next">
                                <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M15.8332 4.16665V15.8333M4.16656 3.33331L12.4999 9.99998L4.16656 16.6666V3.33331Z" stroke="#ADA8A8" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                                </svg>
                            </button>
                        </div>
                        <button type="button" className="bar-nav__repeatMusic">
                            <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <g clipPath="url(#clip0_132_468)">
                                <path d="M19.1667 3.3333V8.3333M19.1667 8.3333H14.1667M19.1667 8.3333L15.3083 4.69997C14.1588 3.54975 12.6667 2.80429 11.0566 2.57592C9.44661 2.34755 7.80598 2.64865 6.38196 3.43384C4.95795 4.21902 3.82771 5.44576 3.16155 6.92919C2.4954 8.41263 2.32942 10.0724 2.68864 11.6584C3.04785 13.2443 3.9128 14.6706 5.15313 15.7222C6.39346 16.7738 7.94199 17.3938 9.56535 17.4888C11.1887 17.5838 12.799 17.1485 14.1535 16.2487C15.508 15.3489 16.5333 14.0332 17.075 12.5" stroke="#ADA8A8" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                                </g>
                                <defs>
                                <clipPath id="clip0_132_468">
                                <rect width="20" height="20" fill="white"/>
                                </clipPath>
                                </defs>
                            </svg>
                        </button>
                    </div>
                    <div className="bar-sound">
                        <button type="button" className="bar-sound__addPlaylist">
                            <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <g clipPath="url(#clip0_189_177)">
                                <path d="M9.99996 6.66669V13.3334M6.66663 10H13.3333M18.3333 10C18.3333 14.6024 14.6023 18.3334 9.99996 18.3334C5.39759 18.3334 1.66663 14.6024 1.66663 10C1.66663 5.39765 5.39759 1.66669 9.99996 1.66669C14.6023 1.66669 18.3333 5.39765 18.3333 10Z" stroke="#ADA8A8" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                                </g>
                                <defs>
                                <clipPath id="clip0_189_177">
                                <rect width="20" height="20" fill="white"/>
                                </clipPath>
                                </defs>
                            </svg>
                        </button>
                        <div className="sound">
                            <button type="button" className="sount__image">
                                <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M15.8916 4.10834C17.4539 5.67107 18.3315 7.7903 18.3315 10C18.3315 12.2097 17.4539 14.3289 15.8916 15.8917M12.95 7.05C13.7311 7.83137 14.1699 8.89099 14.1699 9.99584C14.1699 11.1007 13.7311 12.1603 12.95 12.9417M9.16663 4.16667L4.99996 7.5H1.66663V12.5H4.99996L9.16663 15.8333V4.16667Z" stroke="#ADA8A8" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                                </svg>
                            </button>
                            <input type="range" name="" id="" min={1} max={100}/>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
 
export default MusicBar;
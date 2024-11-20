/* eslint-disable no-unused-vars */
import React, {useState, useRef, useContext } from "react";
import { musics } from "../../Music/musics";
import musicImage from "../../Assets/Secondary/MusicBlock/КартинкаМузыки.svg"
import "./style/MusicBlock.css";

const MusicBlock = () => {
    const [play, setPlay] = useState(false);

    const statusCode = () => {
        setPlay(!play)
    }

    const playMusic = (
        <svg width="25" height="25" viewBox="0 0 25 25" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M5.20833 3.125L19.7917 12.5L5.20833 21.875V3.125Z" stroke="white" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
    );

    const stopMusic = (
        <svg width="25" height="25" viewBox="0 0 25 25" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M10.4167 4.16666H6.25V20.8333H10.4167V4.16666Z" stroke="white" strokeWidth="0.5" strokeLinecap="round" strokeLinejoin="round"/>
            <path d="M18.75 4.16666H14.5833V20.8333H18.75V4.16666Z" stroke="white" strokeWidth="0.5" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
    );

    const renameMusic = (
        <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M14.1667 2.5C14.3856 2.28113 14.6454 2.10752 14.9314 1.98906C15.2173 1.87061 15.5238 1.80965 15.8334 1.80965C16.1429 1.80965 16.4494 1.87061 16.7353 1.98906C17.0213 2.10752 17.2812 2.28113 17.5 2.5C17.7189 2.71887 17.8925 2.97871 18.011 3.26468C18.1294 3.55064 18.1904 3.85714 18.1904 4.16667C18.1904 4.4762 18.1294 4.7827 18.011 5.06866C17.8925 5.35463 17.7189 5.61447 17.5 5.83334L6.25002 17.0833L1.66669 18.3333L2.91669 13.75L14.1667 2.5Z" stroke="white" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
    );

    const deleteMusic = (
        <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M2.5 5.00001H4.16667M4.16667 5.00001H17.5M4.16667 5.00001V16.6667C4.16667 17.1087 4.34226 17.5326 4.65482 17.8452C4.96738 18.1577 5.39131 18.3333 5.83333 18.3333H14.1667C14.6087 18.3333 15.0326 18.1577 15.3452 17.8452C15.6577 17.5326 15.8333 17.1087 15.8333 16.6667V5.00001M6.66667 5.00001V3.33334C6.66667 2.89131 6.84226 2.46739 7.15482 2.15483C7.46738 1.84227 7.89131 1.66667 8.33333 1.66667H11.6667C12.1087 1.66667 12.5326 1.84227 12.8452 2.15483C13.1577 2.46739 13.3333 2.89131 13.3333 3.33334V5.00001M8.33333 9.16667V14.1667M11.6667 9.16667V14.1667" stroke="white" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
    );

    return (
        <div className="musicBlock">
            <div className="musicBlock__block">
                <div className="music" >
                    <section className="music-block">
                        <audio src=""></audio>
                        <div className="block-info">
                            <button type="button" className="block-info__playPause" onClick={statusCode}>
                                {play ? stopMusic : playMusic}
                            </button>
                            <img src={musicImage} alt="картинка музыки" className="block-info__image" width={40} height={40}/>
                            <p className="block-text">
                                <span className="block-text__name">{musics[2].name}</span>
                                <span className="block-text__author">{musics[2].author}</span>
                            </p>
                        </div>
                        <div className="block-button">
                            <div className="buttons">
                                <button type="button" className="block-button__rename block-button__button">{renameMusic}</button>
                                <button type="button" className="block-button__delete block-button__button">{deleteMusic}</button>
                            </div>
                            <p className="block-time"><span>0:00</span>/<><span>3:30</span></></p>
                        </div>
                    </section>
                </div>
            </div>
        </div>
    );
}
 
export default MusicBlock;
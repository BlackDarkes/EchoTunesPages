/* eslint-disable no-unused-vars */
import React, { useState, useRef, useEffect, useContext } from "react";
import "./style/MusicBar.css";
import { musics } from "../../Music/musics";
import PlayMusic from "./Assets/NavigationMusic/MusicPlay"
import StopMusic from "./Assets/NavigationMusic/StopMusic";
import MaxSound from "./Assets/Sound/MaxSound";
import MiddleSound from "./Assets/Sound/MiddleSound";
import LowSound from "./Assets/Sound/LowSound";
import NotSound from "./Assets/Sound/NotSound";
import BackMusic from "./Assets/NavigationMusic/BackMusic";
import RandomMusic from "./Assets/NavigationMusic/RandomMusic";
import NextMusic from "./Assets/NavigationMusic/NextMusic";
import RepeatMusic from "./Assets/NavigationMusic/ReapeatMusic";
import AddPlaylist from "./Assets/Sound/AddPlaylist";

const MusicBar = () => {
    const audioRef = useRef(null)
    const [play, setPlay] = useState(false);
    const [value, setValue] = useState("0");
    const [valueSound, setValueSound] = useState(0.05);
    
    const togglePlayPause = () => {
        play ? audioRef.current.pause() : audioRef.current.play();
        
        setPlay(!play);
    }

    const handleVolumeChange = (event) => {
        const newVolume = event.target.value;
        setValueSound(newVolume);
        audioRef.current.volume = newVolume;
    }

    const hendleTimeChange = (event) => {
        const newTime = event.target.value;
        audioRef.current.currentTime = newTime;
        setValue(newTime);
    }

    const updateCurrentTime = () => {
        setValue(audioRef.current.currentTime);
    }

    useEffect(() => {
        if (audioRef.current) {
          audioRef.current.volume = valueSound; 
        }
    }, [valueSound]);

    return (
        <section className="musicBar">
            <input style={{cursor: "pointer"}} type="range" className="musicBar__progress" name="" id="" min="0" step="0.01" max={audioRef.current ? audioRef.current.duration : 0} value={value} onChange={hendleTimeChange}/>
            <div className="musicBar__block">
                <div className="bar">
                    <div className="bar-info">
                        <p className="bar-info__time"><span className="start-time">0:00</span> / <span className="full-time">3:30</span></p>
                        <p className="bar-info__name"><span className="name-music">{musics[2].name}</span> / <span className="author-music">{musics[2].author}</span></p>
                    </div>
                    <div className="bar-nav">
                        <button type="button" className="bar-nav__randomMusic">
                            <RandomMusic/>
                        </button>
                        <div className="navigation">
                            <button type="button" className="navigation__previous navigation__button">
                                <BackMusic/>
                            </button>
                            <button type="button" className="navigation__play navigation__button" onClick={togglePlayPause}>
                                {play ? <StopMusic/> : <PlayMusic/>}
                            </button>
                            <button type="button" className="navigation__next navigation__button">
                                <NextMusic/>
                            </button>
                        </div>
                        <button type="button" className="bar-nav__repeatMusic">
                            <RepeatMusic/>
                        </button>
                    </div>
                    <div className="bar-sound">
                        <button type="button" className="bar-sound__addPlaylist">
                            <AddPlaylist/>
                        </button>
                        <div className="sound">
                            <button type="button" className="sound__image" onClick={() => {
                                valueSound >= 0.01 ? setValueSound(0) : setValueSound(0.05)
                            }}>
                                {valueSound === 0 ? <NotSound/> : ""}
                                {valueSound === "0.01" ? <LowSound/> : ""}
                                {valueSound >= "0.02" && valueSound <= 0.99 ? <MiddleSound/> : ""}
                                {valueSound === "1" ? <MaxSound/> : ""}
                            </button>
                            <input className="sound__progress" style={{cursor: "pointer"}} type="range" name="" id="" value={valueSound} min={"0.01"} step={"0.01"} max={"1"} onChange={handleVolumeChange}/>
                            <audio src={musics[2].music} ref={audioRef} onTimeUpdate={updateCurrentTime}></audio>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
 
export default MusicBar;
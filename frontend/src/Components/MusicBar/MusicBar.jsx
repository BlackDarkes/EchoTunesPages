/* eslint-disable no-unused-vars */
import React, { useState, useRef, useEffect, useContext } from "react";
import "./style/MusicBar.css";
import { musics } from "../../Music/musics";
import PlayMusic from "../AssetsBlocks/MusicBar/NavigationMusic/MusicPlay"
import StopMusic from "../AssetsBlocks/MusicBar/NavigationMusic/StopMusic";
import MaxSound from "../AssetsBlocks/MusicBar/Sound/MaxSound";
import MiddleSound from "../AssetsBlocks/MusicBar/Sound/MiddleSound";
import LowSound from "../AssetsBlocks/MusicBar/Sound/LowSound";
import NotSound from "../AssetsBlocks/MusicBar/Sound/NotSound";
import BackMusic from "../AssetsBlocks/MusicBar/NavigationMusic/BackMusic";
import RandomMusic from "../AssetsBlocks/MusicBar/NavigationMusic/RandomMusic";
import NextMusic from "../AssetsBlocks/MusicBar/NavigationMusic/NextMusic";
import RepeatMusic from "../AssetsBlocks/MusicBar/NavigationMusic/ReapeatMusic";
import AddPlaylist from "../AssetsBlocks/MusicBar/Sound/AddPlaylist";

const MusicBar = () => {
    const audioRef = useRef(null)
    const [play, setPlay] = useState(false);
    const [value, setValue] = useState("0");
    const [valueSound, setValueSound] = useState(0.05);
    const [time, setTime] = useState(0)
    
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

    const formatTime = (time) => {
        const minutes = Math.floor(time / 60);
        const seconds = Math.floor(time % 60);
        return`${minutes}:${seconds < 10 ? "0" : ""}${seconds}`
    }

    return (
        <section className="musicBar">
            <input style={{cursor: "pointer"}}
                type="range"
                className="musicBar__progress"
                min="0"
                step="0.05"
                max={time}
                value={value}
                onChange={hendleTimeChange}/>
            <div className="musicBar__block">
                <div className="bar">
                    <div className="bar-info">
                        <p className="bar-info__time"><span className="start-time">{formatTime(value)}</span> / <span className="full-time">{formatTime(time)}</span></p>
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
                                valueSound >= 0.01 ? setValueSound(0) : setValueSound(0.03)
                            }}>
                                {valueSound === 0 ? <NotSound/> : ""}
                                {valueSound === "0" ? <LowSound/> : ""}
                                {valueSound >= "0.01" && valueSound <= 0.99 ? <MiddleSound/> : ""}
                                {valueSound === "1" ? <MaxSound/> : ""}
                            </button>
                            <input className="sound__progress"
                                style={{cursor: "pointer"}}
                                type="range"
                                value={valueSound}
                                min="0"
                                step="0.01"
                                max="1"
                                onChange={handleVolumeChange}/>
                            <audio
                                src={musics[2].music}
                                ref={audioRef}
                                onTimeUpdate={updateCurrentTime}
                                onLoadedMetadata={() => {
                                    setTime(audioRef.current.duration);
                                }}></audio>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
 
export default MusicBar;
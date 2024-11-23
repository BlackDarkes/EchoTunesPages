/* eslint-disable no-unused-vars */
import React, {useState, useRef, useContext } from "react";
import "./style/MusicBlock.css";
import Music from "./Blocks/Music";
import { musics } from "../../Music/musics";

const MusicBlock = () => {
    const generateMusic = musics.map((elem, index) => {
        return <Music key={musics[index].id} musicName={musics[index].name} author={musics[index].author} isPlay={false}/>
    })

    return (
        <div className="musicBlock">
            <div className="musicBlock__block">
                <div className="music" >
                    {/* <Music musicName={musics[2].name} author={musics[2].author} linkMusic={""}/> */}
                    {generateMusic}
                </div>
            </div>
        </div>
    );
}
 
export default MusicBlock;
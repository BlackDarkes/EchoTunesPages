import React from "react";
import image from "../../Assets/Музыка.svg";
import "./style/MusicBlock.css";

const MusicBlock = () => {
    return (
        <div className="musicBlock">
            <div className="musicBlock__block">
                <div className="music" onPla>
                    <img src={image} alt="" style={{width: "1200px"}}/>
                    <img src={image} alt="" style={{width: "1200px"}}/>
                    <img src={image} alt="" style={{width: "1200px"}}/>
                    <img src={image} alt="" style={{width: "1200px"}}/>
                    <img src={image} alt="" style={{width: "1200px"}}/>
                    <img src={image} alt="" style={{width: "1200px"}}/>
                    <img src={image} alt="" style={{width: "1200px"}}/>
                    <img src={image} alt="" style={{width: "1200px"}}/>
                    <img src={image} alt="" style={{width: "1200px"}}/>
                    <img src={image} alt="" style={{width: "1200px"}}/>
                    <img src={image} alt="" style={{width: "1200px"}}/>
                    <img src={image} alt="" style={{width: "1200px"}}/>
                    <img src={image} alt="" style={{width: "1200px"}}/>
                    <img src={image} alt="" style={{width: "1200px"}}/>
                    <img src={image} alt="" style={{width: "1200px"}}/>
                </div>
            </div>
        </div>
    );
}
 
export default MusicBlock;
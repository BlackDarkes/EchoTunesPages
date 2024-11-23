/* eslint-disable no-unused-vars */
import React, { useState } from "react";
import "./style/SerchPanel.css";
import Serch from "../AssetsBlocks/SerchBar/Serch";

const SerchBar = () => {
    const [value, setValue] = useState("");

    return (
        <section className="serchBar">
            <div className="serchBar__block">
                <div className="serch">
                    <div className="serch-block">
                        <input type="text" className="serch-block__input" placeholder="Название трека" onChange={(event) => setValue(event.target.value)}/>
                        <button type="button" className="serch-block__button">
                            <Serch/>
                        </button>
                    </div>
                </div>
            </div>
        </section>
    );
}
 
export default SerchBar;
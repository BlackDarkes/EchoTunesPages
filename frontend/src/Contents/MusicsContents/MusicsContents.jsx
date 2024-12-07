import React, { createContext, useState } from "react";

export const MusicsContents = createContext();

const MusicProvider = ({ children }) => {
    const [index, setIndex] = useState(0);
    const [play, setPlay] = useState(false)

    return (
        <MusicsContents.Provider value={{ index, setIndex, play, setPlay }}>
            {children}
        </MusicsContents.Provider>
    );
};

export default MusicProvider;

import React, { createContext, useState } from "react";

export const MusicsContents = createContext();

const MusicProvider = ({ children }) => {
    const [index, setIndex] = useState(0);

    return (
        <MusicsContents.Provider value={{ index, setIndex }}>
            {children}
        </MusicsContents.Provider>
    );
};

export default MusicProvider;

const musicData = [
    {
        name: "Opening Titles",
        author: "Hans Zimmer",
        music: require("./Hans Zimmer-Opening Titles.mp3"),
    },
    {
        name: "Iabloki-na-snegu",
        author: "Chernikovskaia-khata",
        music: require("./russian-doomer-chernikovskaia-khata-iabloki-na-snegu.mp3"),
    },
    {
        name: "Signal",
        author: "TK from 凛として時雨",
        music: require("./tk from signal.mp3"),
    },
    {
        name: "Film A Moment",
        author: "TK from 凛として時雨",
        music: require("./tk-from-film-a-moment.mp3"),
    },
    {
        name: "Fuyu no hanashi",
        author: "Given",
        music: require("./Fuyu_no_Hanashi.mp3"),
    },
    {
        name: "Unravel",
        author: "TK from 凛として時雨",
        music: require("./TK from Ling tosite sigure-Unravel.mp3"),
    },
    {
        name: "Antigravity",
        author: "Starset",
        music: require("./Starset-Antigravity.mp3"),
    },
    {
        name: "Radio ga ga",
        author: "Queen",
        music: require("./queen-radio-ga-ga.mp3"),
    },
    {
        name: "Mephisto",
        author: "Quen bee",
        music: require("./Queen Bee-Mephisto.mp3"),
    },
    {
        name: "Empowering Yourself",
        author: "Olivier Deriviere",
        music: require("./Olivier_Deriviere_Empowering_Yourself.mp3"),
    },
];

export const musics = musicData.map((music, index) => ({
    id: index,
    ...music,
}));

import callofduty from "./Hans Zimmer-Opening Titles.mp3"
import iablokinasnegu from "./russian-doomer-chernikovskaia-khata-iabloki-na-snegu.mp3"
import signal from "./tk from signal.mp3";
import filmamoment from "./tk-from-film-a-moment.mp3"
import fuyunohanashi from "./Fuyu_no_Hanashi.mp3"
import unravel from "./TK from Ling tosite sigure-Unravel.mp3"
import antigravity from "./Starset-Antigravity.mp3"
import radiogagaqueen from "./queen-radio-ga-ga.mp3"
import quenbee from "./Queen Bee-Mephisto.mp3"
import empoweringyourself from "./Olivier_Deriviere_Empowering_Yourself.mp3"

let count = 0;

export const musics = [
    {
        id: count++,
        name: "Opening Titles",
        author: "Hans Zimmer",
        music: callofduty,
    },
    {
        id: count++,
        name: "iabloki-na-snegu",
        author: "chernikovskaia-khata",
        music: iablokinasnegu,
    },
    {
        id: count++,
        name: "Signal",
        author: "TK from 凛として時雨",
        music: signal,
    },
    {
        id: count++,
        name: "Film A Moment",
        author: "TK from 凛として時雨",
        music: filmamoment,
    },
    {
        id: count++,
        name: "Fuyu no hanashi",
        author: "Given",
        music: fuyunohanashi,
    },
    {
        id: count++,
        name: "Unravel",
        author: "TK from 凛として時雨",
        music: unravel,
    },
    {
        id: count++,
        name: "Antigravity",
        author: "Starset",
        music: antigravity,
    },
    {
        id: count++,
        name: "Radio ga ga",
        author: "Queen",
        music: radiogagaqueen,
    },
    {
        id: count++,
        name: "Mephisto",
        author: "Quen bee",
        music: quenbee,
    },
    {
        id: count++,
        name: "Empowering Yourself",
        author: "Olivier Deriviere",
        music: empoweringyourself,
    },
]
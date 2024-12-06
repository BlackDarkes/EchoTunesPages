import { Link } from "react-router-dom";
import MusicBlock from "../../Components/MusicBlock/MusicBlock"

const PlaylistMusic = () => {
    return (
        <>
            <Link to="/">Вернуться</Link>
            <MusicBlock/>
        </>
    );
}
 
export default PlaylistMusic;
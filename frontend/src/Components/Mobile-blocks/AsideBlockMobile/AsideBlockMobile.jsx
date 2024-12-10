import "./style/AsideBlockMobile.css";
import { Link } from "react-router-dom";
import HomeMobile from "../../AssetsBlocks/AsideBlock/Mobile/HomeMobile";
import LabraryMobile from "../../AssetsBlocks/AsideBlock/Mobile/LabraryMobile";

const AsideBlockMobile = ({home, library}) => {
    return (
        <div className="mobile">
            <Link to="/" className={[home].join(" ")}>
                <HomeMobile/>
            </Link>
            <Link to="/EchoTunesPages/playlists" className={[library].join(" ")}>
                <LabraryMobile/>
            </Link>
        </div>
    );
}
 
export default AsideBlockMobile;
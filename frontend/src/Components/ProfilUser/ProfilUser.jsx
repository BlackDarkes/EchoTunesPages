import { useState } from "react";
import "./style/ProfilUser.css";
import Profile from "../Pop-up/Profile/Profile";
import UserImage from "../AssetsBlocks/ProfilUser/UserImage";

const ProfilUser = () => {
    const [vision, setVision] = useState(false);

    return (
        <div className="profilUser">
            <div className="profilUser__block">
                <div className="profil">
                    <button type="profil__button" onClick={() => setVision(!vision)}>
                        <UserImage/>
                    </button>
                </div>
                <Profile active={vision} setActive={setVision}/>
            </div>
        </div>
    );
}
 
export default ProfilUser;
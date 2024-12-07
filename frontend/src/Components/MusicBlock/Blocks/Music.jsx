import { useContext } from "react";
import musicImage from "../../../Assets/Secondary/MusicBlock/КартинкаМузыки.svg";
import RenameMusic from "../../AssetsBlocks/MusicBlock/RenameMusic";
import DeleteMusic from "../../AssetsBlocks/MusicBlock/DeleteMusic";
import PlayMusic from "../../AssetsBlocks/MusicBar/NavigationMusic/MusicPlay";
import StopMusic from "../../AssetsBlocks/MusicBar/NavigationMusic/StopMusic";
import ThreePoints from "../../AssetsBlocks/MusicBlock/ThreePoints";
import { MusicsContents } from "../../../Contents/MusicsContents/MusicsContents";

const Music = ({ musicName, author, id }) => {
    const { index, setIndex, play, setPlay } = useContext(MusicsContents);
    const isPlaying = index === id && play; // Проверяем, играет ли текущая музыка

    const togglePlay = () => {
        if (isPlaying) {
            // Если музыка уже играет, ставим на паузу
            setPlay(false);
        } else {
            // Если текущая музыка не равна новой, останавливаем текущую
            if (index !== id) {
                setPlay(false); // Останавливаем текущую музыку
                setIndex(id); // Устанавливаем текущий трек
                // Используем setTimeout, чтобы дать время предыдущей музыке остановиться
                setTimeout(() => {
                    setPlay(true); // Устанавливаем play в true, чтобы начать воспроизведение
                    console.log(`Playing: ${musicName}`);
                }, 100); // Задержка в 100 мс, чтобы убедиться, что предыдущая музыка остановилась
            } else {
                setPlay(true); // Устанавливаем play в true, чтобы начать воспроизведение
                console.log(`Playing: ${musicName}`);
            }
        }
    };

    const stopMusic = () => {
        setPlay(false);
        setIndex(undefined); // Устанавливаем индекс в undefined, чтобы остановить воспроизведение
    };

    return (
        <section className="music-block">
            <div className="block-info">
                <button type="button" className="block-info__playPause" onClick={togglePlay}>
                    {isPlaying ? <StopMusic onClick={stopMusic} /> : <PlayMusic />}
                </button>
                <img src={musicImage} alt="картинка музыки" className="block-info__image" width={40} height={40} />
                <button type="button" className="block-info__playPause-tabs" onClick={togglePlay}>
                    {isPlaying ? <StopMusic onClick={stopMusic}/> : <img src={musicImage} alt="картинка музыки" className="image" width={40} height={40} />}
                </button>
                <p className="block-text">
                    <span className="block-text__name">{musicName}</span>
                    <span className="block-text__author">{author}</span>
                </p>
            </div>
            <div className="block-button">
                <div className="buttons">
                    <button type="button" className="block-button__rename block-button__button"><RenameMusic /></button>
                    <button type="button" className="block-button__delete block-button__button"><DeleteMusic /></button>
                </div>
                <p className="block-time">0:00/3:30</p>
                <button type="button" className="block-button__3points"><ThreePoints /></button>
            </div>
        </section>
    );
};

export default Music;

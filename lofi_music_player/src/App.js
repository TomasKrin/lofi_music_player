import { useContext, useState, useEffect, useRef } from "react";
import { MusicContext } from "./contexts/MusicContext";
import MusicPlayer from "./components/SongSwitcher/MusicPlayer";
import { getRandom } from "./utils/mathRandom";

const App = () => {
  const { music, isLoading } = useContext(MusicContext);

  const [currentSong, setCurrentSong] = useState(null);

  const [started, setStarted] = useState(false);

  const songsCheck = (arr) => {
    if (arr && isLoading === false) {
      return arr;
    } else {
      return [];
    }
  };

  const songs = songsCheck(music);
  const randomID = getRandom(0, songs.length);

  const nextSong = () => {
    setTimeout(() => {
      setCurrentSong(songs[randomID]);
    }, 500);
  };

  const start = () => {
    setCurrentSong(songs[0]);
    setStarted(true);
  };

  // IDEJA:
  //   const filter = songs.filter((song) => song.author === `Aarigod`);

  //   console.log(filter);

  console.log(currentSong);
  //   console.log(songs[0]);

  if (started) {
    return (
      <div>
        {currentSong ? <p>{currentSong.author}</p> : `LOADING...`}
        {currentSong && <p>{currentSong.title}</p>}
        {currentSong && (
          <audio src={currentSong.path} controls={true} autoPlay onEnded={nextSong} />
        )}
        {currentSong && <button onClick={nextSong}>Skip</button>}
      </div>
    );
  } else {
    return <button onClick={start}>Start</button>;
  }
};

export default App;

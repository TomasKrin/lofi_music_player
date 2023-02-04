import { useContext, useState } from "react";
import { MusicContext } from "./contexts/MusicContext";
import MusicPlayer from "./components/MusicPlayer/MusicPlayer";

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

  const start = () => {
    setCurrentSong(songs[0]);
    setStarted(true);
  };

  console.log(currentSong);

  if (started) {
    return <div>{currentSong && <MusicPlayer songs={songs}></MusicPlayer>}</div>;
  } else {
    return <div>{songs.length ? <button onClick={start}>Start</button> : <p>LOADING...</p>}</div>;
  }
};

export default App;

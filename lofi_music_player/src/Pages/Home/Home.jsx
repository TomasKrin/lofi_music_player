import { useContext, useState } from "react";
import { MusicContext } from "../../contexts/MusicContext";
import MusicPlayer from "../MusicPlayer/MusicPlayer";

const Home = () => {
  const { songs } = useContext(MusicContext);

  const [currentSong, setCurrentSong] = useState(null);

  const [started, setStarted] = useState(false);

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

export default Home;

import { createContext, useState } from "react";
import axios from "axios";
import { useEffect } from "react";
import { LofiAPI } from "../api/musicAPI";

const MusicContext = createContext();

const MusicProvider = ({ children }) => {
  const [music, setMusic] = useState(null);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    setIsLoading(true);
    axios
      .get(LofiAPI)
      .then((response) => {
        setMusic(response.data);
        setIsLoading(false);
      })
      .catch((error) => console.error("Music", error));
  }, []);

  const songsCheck = (arr) => {
    if (arr && isLoading === false) {
      return arr;
    } else {
      return [];
    }
  };

  const songs = songsCheck(music);

  return <MusicContext.Provider value={{ songs, isLoading }}>{children}</MusicContext.Provider>;
};

export { MusicContext, MusicProvider };

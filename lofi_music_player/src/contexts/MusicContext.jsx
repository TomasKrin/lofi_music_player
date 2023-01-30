import { createContext, useState } from "react";
import axios from "axios";
import { useEffect } from "react";
import { LofiAPI } from "../consts/APIS";

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

  return <MusicContext.Provider value={{ music, isLoading }}>{children}</MusicContext.Provider>;
};

export { MusicContext, MusicProvider };

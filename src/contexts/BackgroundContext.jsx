import { createContext, useState } from "react";

const BackgroundContext = createContext();

const BackgroundProvider = ({ children }) => {
  const [light, setLight] = useState(true);
  const [dark, setDark] = useState(false);

  return (
    <BackgroundContext.Provider value={{ light, dark, setDark, setLight }}>
      {children}
    </BackgroundContext.Provider>
  );
};

export { BackgroundContext, BackgroundProvider };

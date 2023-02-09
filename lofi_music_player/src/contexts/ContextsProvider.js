import { MusicProvider } from "./MusicContext";
import { UserProvider } from "./UserContext";

const ContextsProvider = ({ children }) => {
  return (
    <UserProvider>
      <MusicProvider>{children}</MusicProvider>
    </UserProvider>
  );
};

export default ContextsProvider;

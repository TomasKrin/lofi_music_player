import { UserProvider } from "./UserContext";

const ContextsProvider = ({ children }) => {
  return <UserProvider>{children}</UserProvider>;
};

export default ContextsProvider;

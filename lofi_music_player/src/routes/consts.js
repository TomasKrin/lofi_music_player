import Home from "../Pages/Home/Home";
import Login from "../Pages/Login/Login";

export const HOME_PATH = `/`;
export const LOGIN_PATH = `${HOME_PATH}login`;

export const routes = [
  { path: HOME_PATH, Component: Home },
  { path: LOGIN_PATH, Component: Login },
];

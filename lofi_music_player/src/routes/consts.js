import Home from "../Pages/Home/Home";
import Login from "../Pages/Login/Login";
import MusicPlayer from "../Pages/MusicPlayer/MusicPlayer";
import Register from "../Pages/Register/Register";

export const HOME_PATH = `/`;
export const LOGIN_PATH = `${HOME_PATH}login`;
export const REGISTER_PATH = `${HOME_PATH}register`;
export const MUSICPLAYER_PATH = `${HOME_PATH}player`;

export const routes = [
  { path: HOME_PATH, Component: Home },
  { path: LOGIN_PATH, Component: Login },
  { path: REGISTER_PATH, Component: Register },
  { path: MUSICPLAYER_PATH, Component: MusicPlayer },
];

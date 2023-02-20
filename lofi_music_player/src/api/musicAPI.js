import axios from "axios";

const LofiAPI = `https://lofi-terminal-default-rtdb.firebaseio.com/songs.json`;

export const fetchMusic = () => {
  return axios.get(LofiAPI).then((response) => response.data);
};

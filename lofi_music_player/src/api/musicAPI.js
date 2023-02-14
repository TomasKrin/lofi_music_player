import axios from "axios";

const LofiAPI = `http://localhost:4000/songs`;

export const fetchMusic = () => {
  return axios.get(LofiAPI).then((response) => response.data);
};

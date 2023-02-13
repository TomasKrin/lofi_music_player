import { useQuery } from "react-query";
import { fetchMusic } from "../api/musicAPI";

const MUSIC = "MUSIC";

export const useMusic = () => {
  return useQuery(MUSIC, fetchMusic);
};

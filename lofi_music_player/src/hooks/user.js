import { useMutation } from "react-query";
import { createUser, loginUser } from "../api/usersAPI";

export const useCreateUser = () => {
  return useMutation(createUser);
};

export const useLoginUser = () => {
  return useMutation(loginUser);
};

import axios from "axios";

const USERS_API_URL = "https://testapi.io/api/tomisss1/resource/MusicAppUsers";

export const fetchUsers = () => {
  return axios.get(USERS_API_URL).then((response) => response.data.data);
};

export const createUser = (user) => {
  return axios.post(USERS_API_URL, user).then((response) => response.data);
};

export const loginUser = async (loggingUser) => {
  const users = await fetchUsers();
  return new Promise((resolve, reject) => {
    const { nickname, password } = loggingUser;
    const userChecker = (u) => u.nickname === nickname && u.password === password;
    const existingUser = users.find(userChecker);
    existingUser ? resolve(existingUser) : reject("Invalid credentials");
  });
};

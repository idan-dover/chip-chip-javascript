import { axiosAuthInstance } from "../libs/Axios";

export async function login(user) {
  return axiosAuthInstance.post("/login", user);
}

export async function register(user) {
  return axiosAuthInstance.post("/register", user);
}

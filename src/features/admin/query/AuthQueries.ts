import axios from "axios";
import { AdminLoginType } from "../types/adminTypes";
export const baseURL = import.meta.env.VITE_API_BASE_URL;

export const loginAdminFN = (values: AdminLoginType) => {
  const url = `${baseURL}/login`;
  return axios.post(url, { admin: values }, { withCredentials: true });
};

// const { data, status } = await axios.post(endpoints.auth.login, credentials);
//   if (status === HttpStatusCode.Accepted) {
//     return data;
//   } else {
//     throw new Error("Sorry, login failed.");
//   }

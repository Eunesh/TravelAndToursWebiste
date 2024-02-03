import Cookies from "universal-cookie";
import { SessionAdminType } from "../features/admin/types/adminTypes";

const cookie = new Cookies();

export const clearSession = () => {
  cookie.remove("_interslice_session");
  sessionStorage.removeItem("admin");
};

export const setSessionAdmin = (admin: SessionAdminType) => {
  sessionStorage.setItem("admin", JSON.stringify(admin));
};

export const getSessionAdmin = () => {
  return JSON.parse(sessionStorage.getItem("admin") || "null");
};

import Cookies from "universal-cookie";
import { SessionAdminType } from "../features/admin/types/adminTypes";

const cookie = new Cookies();

export const clearSession = () => {
  cookie.remove("admin_session", { path: "/" });
  sessionStorage.removeItem("admin");
};

export const getAdminSessionToken = () => {
  return cookie.get("admin_session");
};
export const setSessionAdmin = (admin: SessionAdminType) => {
  sessionStorage.setItem("admin", JSON.stringify(admin));
};

export const getSessionAdmin = () => {
  return JSON.parse(sessionStorage.getItem("admin") || "null");
};

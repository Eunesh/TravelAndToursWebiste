import { SessionAdminType } from "./adminTypes";

export type AdminSessionType = {
  admin: SessionAdminType | null;
  isLoggedIn: boolean;
};

// Session Action Types
// AT is abbreviation for Action Type

export type SetSessionAT = {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  type: any;
  payload: SessionAdminType;
};
// Session Action Types

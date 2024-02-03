/* eslint-disable @typescript-eslint/no-explicit-any */
import { createSlice } from "@reduxjs/toolkit";
import { clearSession, setSessionAdmin } from "../../../utils/cookieFunctions";
import { AdminSessionType, SetSessionAT } from "../types/adminSessionTypes";

const initialState: AdminSessionType = {
  admin: null,
  isLoggedIn: false,
  isLoading: true,
};

const sessionSlice = createSlice({
  name: "session",
  initialState: initialState,
  reducers: {
    setAdminSession: (state: AdminSessionType, action: SetSessionAT) => {
      setSessionAdmin(action.payload);
      state.isLoggedIn = true;
      state.admin = action.payload;
      state.isLoading = false;
      return state;
    },
    clearAdminSession: (state: AdminSessionType) => {
      clearSession();
      state.isLoggedIn = false;
      state.admin = null;
      state.isLoading = false;
      return state;
    },
  },
});

// Selectors
export const selectSession = (state: any) => {
  return state.session;
};
export const selectSessionIsLoading = (state: any) => {
  return state.session.isLoading;
};
export const selectIsLoggedIn = (state: any) => {
  return state.session.isLoggedIn;
};
export const selectSessionAdmin = (state: any) => {
  return state.session.admin;
};
// Selectors

export const { setAdminSession, clearAdminSession } = sessionSlice.actions;

export default sessionSlice.reducer;

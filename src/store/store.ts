import { configureStore } from "@reduxjs/toolkit";
import sessionSlice from "../features/admin/slice/sessionSlice";

const store = configureStore({
  reducer: {
    session: sessionSlice,
  },
});

export default store;
export type AppDispatch = typeof store.dispatch;

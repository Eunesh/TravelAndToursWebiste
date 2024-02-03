import { createSlice } from "@reduxjs/toolkit";

const initialState = {};
const eventSlice = createSlice({
  name: "event",
  initialState: initialState,
  reducers: {},
});

// Selectors
// Selectors

// export const {} = eventSlice.actions;
export default eventSlice.reducer;

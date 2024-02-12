import { createSlice } from "@reduxjs/toolkit";

const initialState = {};
const placeSlice = createSlice({
  name: "place",
  initialState: initialState,
  reducers: {},
});

// Selectors
// Selectors

// export const {} = placeSlice.actions;
export default placeSlice.reducer;

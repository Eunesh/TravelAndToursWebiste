import { createSlice } from "@reduxjs/toolkit";
import {
  EventSliceType,
  SetEventGridApiAT,
  SetSelectedEventAT,
} from "../types/eventSliceTypes";

const initialState: EventSliceType = {
  gridApi: null,
  selectedEvent: null,
};

const eventSlice = createSlice({
  name: "event",
  initialState: initialState,
  reducers: {
    setEventGridApi: (state: any, action: SetEventGridApiAT) => {
      state.gridApi = action.payload;
      return state;
    },
    setSelectedEvent: (state: any, action: SetSelectedEventAT) => {
      state.selectedEvent = action.payload;
      return state;
    },
  },
});

// Selectors
export const selectEventGridApi = (state: any) => {
  return state.event.gridApi;
};

export const selectSelectedEvent = (state: any) => {
  return state.event.selectedEvent;
};
// Selectors

export const { setEventGridApi } = eventSlice.actions;
export default eventSlice.reducer;

import { createSlice } from "@reduxjs/toolkit";
import {
  AddEventAT,
  EventSliceType,
  SetEventGridApiAT,
  SetEventGridSearchTermAT,
  SetSelectedEventAT,
} from "../types/eventSliceTypes";

const initialState: EventSliceType = {
  gridApi: null,
  selectedEvent: null,
  searchTerm: "",
};

const eventSlice = createSlice({
  name: "event",
  initialState: initialState,
  reducers: {
    setEventGridApi: (state: any, action: SetEventGridApiAT) => {
      state.gridApi = action.payload;
      return state;
    },
    addEvent: (state: any, action: AddEventAT) => {
      if (state.gridApi) {
        state.gridApi.applyTransaction({ add: [action.payload] });
      }
      return state;
    },
    deleteEventFromGrid: (state: any) => {
      if (state.gridApi) {
        const selectedData = state.gridApi.getSelectedRows();
        state.gridApi.applyTransaction({ remove: selectedData })!;
      }
      return state;
    },
    selectEventToEdit: (state: any) => {
      if (state.gridApi) {
      }
      return state;
    },
    setEventGridSearchTerm: (state: any, action: SetEventGridSearchTermAT) => {
      state.searchTerm = action.payload;
      if (state.gridApi) {
        state.gridApi.setQuickFilter(action.payload);
      }
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

export const selectEventGridSearchTerm = (state: any) => {
  return state.event.searchTerm;
};
// Selectors

export const {
  setEventGridApi,
  setEventGridSearchTerm,
  setSelectedEvent,
  addEvent,
  deleteEventFromGrid,
  selectEventToEdit,
} = eventSlice.actions;
export default eventSlice.reducer;

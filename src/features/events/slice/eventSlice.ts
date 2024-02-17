import { createSlice } from "@reduxjs/toolkit";
import {
  AddUpdateEventAT,
  EventSliceType,
  SetEventGridApiAT,
  SetEventGridSearchTermAT,
  SetSelectedEventIndexAT,
} from "../types/eventSliceTypes";

const initialState: EventSliceType = {
  gridApi: null,
  selectedEvent: null,
  selectedEventIndex: null,
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
    setEventGridSearchTerm: (state: any, action: SetEventGridSearchTermAT) => {
      state.searchTerm = action.payload;
      if (state.gridApi) {
        state.gridApi.setQuickFilter(action.payload);
      }
      return state;
    },
    addEvent: (state: any, action: AddUpdateEventAT) => {
      if (state.gridApi) {
        state.gridApi.applyTransaction({ add: [action.payload] });
      }
      return state;
    },
    setSelectedEventIndex: (state: any, action: SetSelectedEventIndexAT) => {
      state.selectedEventIndex = action.payload;
      return state;
    },
    selectEventToEdit: (state: any) => {
      if (state.gridApi) {
        const selectedData = state.gridApi.getSelectedRows()[0];
        state.selectedEvent = selectedData;
      }
      return state;
    },
    clearSelectedEvent: (state: any) => {
      state.selectedEvent = null;
      return state;
    },
    updateEventInGrid: (state: any, action: AddUpdateEventAT) => {
      if (state.gridApi) {
        const rowIndex = state.selectedEventIndex
        const rowNode = state.gridApi.getModel().getRow(rowIndex)
        rowNode.data = action.payload;
        state.gridApi.refreshCells({rowNodes: [rowNode], force: true})
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
  },
});

// Selectors
export const selectEventGridApi = (state: any) => {
  return state.event.gridApi;
};

export const selectEventGridSearchTerm = (state: any) => {
  return state.event.searchTerm;
};

export const selectSelectedEvent = (state: any) => {
  return state.event.selectedEvent;
};
// Selectors

export const {
  setEventGridApi,
  setEventGridSearchTerm,
  addEvent,
  setSelectedEventIndex,
  selectEventToEdit,
  clearSelectedEvent,
  updateEventInGrid,
  deleteEventFromGrid,
} = eventSlice.actions;
export default eventSlice.reducer;

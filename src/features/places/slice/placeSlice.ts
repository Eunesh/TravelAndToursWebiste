import { createSlice } from "@reduxjs/toolkit";
import {
  AddPlaceAT,
  PlaceSliceType,
  SetPlaceGridApiAT,
  SetPlaceGridSearchTermAT,
  SetSelectedPlaceAT,
} from "../types/placeSliceTypes";

const initialState: PlaceSliceType = {
  gridApi: null,
  selectedPlace: null,
  searchTerm: "",
};

const placeSlice = createSlice({
  name: "place",
  initialState: initialState,
  reducers: {
    setPlaceGridApi: (state: any, action: SetPlaceGridApiAT) => {
      state.gridApi = action.payload;
      return state;
    },
    addPlace: (state: any, action: AddPlaceAT) => {
      if (state.gridApi) {
        state.gridApi.applyTransaction({ add: [action.payload] });
      }
      return state;
    },
    setPlaceGridSearchTerm: (state: any, action: SetPlaceGridSearchTermAT) => {
      state.searchTerm = action.payload;
      if (state.gridApi) {
        state.gridApi.setQuickFilter(action.payload);
      }
      return state;
    },
    setSelectedPlace: (state: any, action: SetSelectedPlaceAT) => {
      state.selectedPlace = action.payload;
      return state;
    },
  },
});

// Selectors
export const selectPlaceGridApi = (state: any) => {
  return state.place.gridApi;
};

export const selectSelectedPlace = (state: any) => {
  return state.place.selectedPlace;
};

export const selectPlaceGridSearchTerm = (state: any) => {
  return state.place.searchTerm;
};
// Selectors

export const {
  setPlaceGridApi,
  setPlaceGridSearchTerm,
  setSelectedPlace,
  addPlace,
} = placeSlice.actions;
export default placeSlice.reducer;

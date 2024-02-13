import { createSlice } from "@reduxjs/toolkit";
import {
  PlaceSliceType,
  SetPlaceGridApiAT,
  SetSelectedPlaceAT,
} from "../types/placeSliceTypes";

const initialState: PlaceSliceType = {
  gridApi: null,
  selectedPlace: null,
};

const placeSlice = createSlice({
  name: "place",
  initialState: initialState,
  reducers: {
    setPlaceGridApi: (state: any, action: SetPlaceGridApiAT) => {
      state.gridApi = action.payload;
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
// Selectors

export const { setPlaceGridApi } = placeSlice.actions;
export default placeSlice.reducer;

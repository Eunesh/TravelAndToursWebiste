import { createSlice } from "@reduxjs/toolkit";
import {
  AddUpdatePlaceAT,
  PlaceSliceType,
  SetPlaceGridApiAT,
  SetPlaceGridSearchTermAT,
  SetPlacesDDAT,
  SetSelectedPlaceIndexAT,
} from "../types/placeSliceTypes";

const initialState: PlaceSliceType = {
  gridApi: null,
  selectedPlace: null,
  selectedPlaceIndex: null,
  searchTerm: "",
  placesDD: [],
};

const placeSlice = createSlice({
  name: "place",
  initialState: initialState,
  reducers: {
    setPlaceGridApi: (state: any, action: SetPlaceGridApiAT) => {
      state.gridApi = action.payload;
      return state;
    },
    setPlacesDD: (state: any, action: SetPlacesDDAT) => {
      state.placesDD = action.payload;
    },
    setPlaceGridSearchTerm: (state: any, action: SetPlaceGridSearchTermAT) => {
      state.searchTerm = action.payload;
      if (state.gridApi) {
        state.gridApi.setQuickFilter(action.payload);
      }
      return state;
    },
    addPlace: (state: any, action: AddUpdatePlaceAT) => {
      if (state.gridApi) {
        state.gridApi.applyTransaction({ add: [action.payload] });
      }
      return state;
    },
    setSelectedPlaceIndex: (state: any, action: SetSelectedPlaceIndexAT) => {
      state.selectedPlaceIndex = action.payload;
      return state;
    },
    selectPlaceToEdit: (state: any) => {
      if (state.gridApi) {
        const selectedData = state.gridApi.getSelectedRows()[0];
        state.selectedPlace = selectedData;
      }
      return state;
    },
    clearSelectedPlace: (state: any) => {
      state.selectedPlace = null;
      return state;
    },
    updatePlaceInGrid: (state: any, action: AddUpdatePlaceAT) => {
      if (state.gridApi) {
        const rowIndex = state.selectedPlaceIndex
        const rowNode = state.gridApi.getModel().getRow(rowIndex)
        rowNode.data = action.payload;
        state.gridApi.refreshCells({rowNodes: [rowNode], force: true})
      }
      return state;
    },
    deletePlaceFromGrid: (state: any) => {
      if (state.gridApi) {
        const selectedData = state.gridApi.getSelectedRows();
        state.gridApi.applyTransaction({ remove: selectedData });
      }
      return state;
    },
  },
});

// Selectors
export const selectPlaceGridApi = (state: any) => {
  return state.place.gridApi;
};

export const selectPlacesDD = (state: any) => {
  return state.place.placesDD;
};

export const selectPlaceGridSearchTerm = (state: any) => {
  return state.place.searchTerm;
};

export const selectSelectedPlace = (state: any) => {
  return state.place.selectedPlace;
};
// Selectors

export const {
  setPlaceGridApi,
  setPlacesDD,
  setPlaceGridSearchTerm,
  addPlace,
  setSelectedPlaceIndex,
  selectPlaceToEdit,
  clearSelectedPlace,
  updatePlaceInGrid,
  deletePlaceFromGrid,
} = placeSlice.actions;
export default placeSlice.reducer;

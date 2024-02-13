import { GridApi } from "ag-grid-community";
import { PlaceType } from "./placeTypes";

export type PlaceSliceType = {
  gridApi: GridApi<any> | null;
  selectedPlace: PlaceType | null;
  searchTerm: string;
};

export type SetPlaceGridApiAT = {
  type: any;
  payload: GridApi<any>;
};

export type SetSelectedPlaceAT = {
  type: any;
  payload: PlaceType;
};

export type SetPlaceGridSearchTermAT = {
  type: any;
  payload: string;
};

import { GridApi } from "ag-grid-community";
import { PlaceDDType, PlaceType } from "./placeTypes";

export type PlaceSliceType = {
  gridApi: GridApi<any> | null;
  selectedPlace: PlaceType | null;
  searchTerm: string;
  placesDD: Array<PlaceDDType>;
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

export type AddPlaceAT = {
  type: any;
  payload: PlaceType;
};

export type SetPlacesDDAT = {
  type: any;
  payload: Array<PlaceDDType>;
};

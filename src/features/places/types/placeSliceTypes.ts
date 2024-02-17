import { GridApi } from "ag-grid-community";
import { PlaceDDType, PlaceType } from "./placeTypes";

export type PlaceSliceType = {
  gridApi: GridApi<any> | null;
  selectedPlace: PlaceType | null;
  selectedPlaceIndex: number | null;
  searchTerm: string;
  placesDD: Array<PlaceDDType>;
};

export type SetPlaceGridApiAT = {
  type: any;
  payload: GridApi<any>;
};

export type SetPlaceGridSearchTermAT = {
  type: any;
  payload: string;
};

export type SetSelectedPlaceIndexAT = {
  type: any;
  payload: number;
};

export type AddUpdatePlaceAT = {
  type: any;
  payload: PlaceType;
};

export type SetPlacesDDAT = {
  type: any;
  payload: Array<PlaceDDType>;
};

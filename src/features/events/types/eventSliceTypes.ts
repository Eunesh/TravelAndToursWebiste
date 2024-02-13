import { GridApi } from "ag-grid-community";
import { EventType } from "./eventTypes";

export type EventSliceType = {
  gridApi: GridApi<any> | null;
  selectedEvent: Event | null;
  searchTerm: "";
};

export type SetEventGridApiAT = {
  type: any;
  payload: GridApi;
};

export type SetSelectedEventAT = {
  type: any;
  payload: EventType;
};

export type SetEventGridSearchTermAT = {
  type: any,
  payload: string
}
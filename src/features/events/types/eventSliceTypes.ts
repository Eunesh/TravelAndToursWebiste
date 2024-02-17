import { GridApi } from "ag-grid-community";
import { EventType } from "./eventTypes";

export type EventSliceType = {
  gridApi: GridApi<any> | null;
  selectedEvent: Event | null;
  selectedEventIndex: number | null;
  searchTerm: "";
};

export type SetEventGridApiAT = {
  type: any;
  payload: GridApi;
};

export type SetEventGridSearchTermAT = {
  type: any;
  payload: string;
};

export type SetSelectedEventIndexAT = {
  type: any;
  payload: number;
};

export type AddUpdateEventAT = {
  type: any;
  payload: EventType;
};

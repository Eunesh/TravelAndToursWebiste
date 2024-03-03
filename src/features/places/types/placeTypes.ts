import { DDType } from "../../../types/commonTypes";
import { EventAndPlaceInListType } from "../../events/types/eventTypes";

export type AddPlaceType = {
  name: string;
  description: string;
  banner?: File;
  pictures?: File[];
};

export type EditPlaceType = {
  id: string;
  name: string;
  description: string;
  banner?: File;
  pictures?: File[];
};
export type PlaceType = {
  id: number;
  name: string;
  description: string;
  events: Array<EventAndPlaceInListType>;
};

export type PlaceDDType = DDType;

import { DDType } from "../../../types/commonTypes";
import { EventAndPlaceInListType } from "../../events/types/eventTypes";

export type AddPlaceType = {
  name: string;
  description: string;
};
export type PlaceType = {
  id: number;
  name: string;
  description: string;
  events: Array<EventAndPlaceInListType>;
};

export type PlaceDDType = DDType;

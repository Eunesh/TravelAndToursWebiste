export type AddEventType = {
  name: string;
  description: string;
  placeId: string;
};

export type EditEventType = {
  id: string;
  name: string;
  description: string;
  placeId: string;
};

export type EventType = {
  id: number;
  name: string;
  description: string;
  place: EventAndPlaceInListType;
};

export type EventAndPlaceInListType = {
  id: number;
  description: string;
};

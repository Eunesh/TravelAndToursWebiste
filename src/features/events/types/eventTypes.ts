export type AddEventType = {
  name: string;
  description: string;
  placeId: string;
  banner?: File;
  pictures?: File[];
};

export type EditEventType = {
  id: string;
  name: string;
  description: string;
  placeId: string;
  banner?: File;
  pictures?: File[];
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

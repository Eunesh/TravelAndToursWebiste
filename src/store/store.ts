import { configureStore } from "@reduxjs/toolkit";
import sessionSlice from "../features/admin/slice/sessionSlice";
import eventSlice from "../features/events/slice/eventSlice";
import placeSlice from "../features/places/slice/placeSlice";

const store = configureStore({
  reducer: {
    session: sessionSlice,
    event: eventSlice,
    place: placeSlice,
  },
  middleware: (getDefaultMiddleware) =>
  getDefaultMiddleware({
    serializableCheck: {
      // Ignore these action types
      ignoredActions: ['place/setPlaceGridApi', 'event/setEventGridApi'],
    },
  }),
});

export default store;
export type AppDispatch = typeof store.dispatch;

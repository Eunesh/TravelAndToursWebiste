import * as Yup from "yup";

export const addEventSchema = Yup.object().shape({
  name: Yup.string()
    .required("Event Name is required")
    .min(5, "Event name cannot be less than 5 characters long."),
  description: Yup.string()
    .required("Event Description is a required field.")
    .min(100, "Description cannot be less than 100 characters long."),
  placeId: Yup.string().required("All Events should be listed under a place."),
  // Pictures
});

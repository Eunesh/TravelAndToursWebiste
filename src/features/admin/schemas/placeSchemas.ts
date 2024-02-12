import * as Yup from "yup";

export const addPlaceSchema = Yup.object().shape({
  name: Yup.string()
    .required("Place Name is required")
    .min(3, "Place name cannot be less than 3 characters long."),
  description: Yup.string()
    .required("Place Description is a required field.")
    .min(100, "Description cannot be less than 100 characters long."),
  // Pictures
});

import * as Yup from "yup";

export const ContactusSchema = Yup.object().shape({
  name: Yup.string()
    .min(2, "Too short!")
    .max(50, "Too Long!")
    .required("Required"),
  email: Yup.string().email("Invalid emaail").required("Required"),
  message: Yup.string()
    .min(5, "Too  short!")
    .max(100, "Too Long!")
    .required("Required"),
});

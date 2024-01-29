import * as Yup from "yup";

const loginSchema = Yup.object().shape({
  email: Yup.string().email().required("Enter your email address"),
  password: Yup.string()
    .min(8, "Password cannot be less than 8 characters.")
    .required("Enter your password"),
});

export default loginSchema;

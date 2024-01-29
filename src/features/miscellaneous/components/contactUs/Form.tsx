import {
  FormControl,
  FormLabel,
  FormErrorMessage,
  Input,
  Stack,
  Textarea,
  Button,
} from "@chakra-ui/react";

import { ContactusSchema } from "../../schemas/ContactusSchema";

import { useFormik } from "formik";

import emailjs from "@emailjs/browser";

const Form = () => {
  const formik = useFormik({
    initialValues: {
      name: "",
      email: "",
      message: "",
    },
    validationSchema: ContactusSchema,
    enableReinitialize: true,
    onSubmit: async (values) => {
      console.log(values);
      emailjs
        .send(
          import.meta.env.VITE_EMAIL_SERVICE,
          import.meta.env.VITE_EMAIL_TEMPLATE,
          values,
          import.meta.env.VITE_EMAIL_API
        )
        .then(
          (result) => {
            console.log(result.text);
          },
          (error) => {
            console.log(error.text);
          }
        );
    },
  });
  return (
    <form onSubmit={formik.handleSubmit}>
      <Stack spacing={"40px"}>
        <FormControl
          isInvalid={Boolean(formik.touched.name && formik.errors.name)}
        >
          <FormLabel>Name</FormLabel>
          <Input
            type="name"
            id="name"
            name="name"
            value={formik.values.name}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
          />
          {formik.errors.name && (
            <FormErrorMessage>{formik.errors.name}</FormErrorMessage>
          )}
        </FormControl>
        <FormControl
          isInvalid={Boolean(formik.touched.email && formik.errors.email)}
        >
          <FormLabel htmlFor="email">Email</FormLabel>
          <Input
            id="email"
            name="email"
            value={formik.values.email}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
          />
          {formik.errors.email && (
            <FormErrorMessage>{formik.errors.email}</FormErrorMessage>
          )}
        </FormControl>
        <FormControl
          isInvalid={Boolean(formik.touched.message && formik.errors.message)}
        >
          <FormLabel>Message</FormLabel>
          <Textarea
            size="sm"
            id="message"
            name="message"
            value={formik.values.message}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
          />
          {formik.errors.message && (
            <FormErrorMessage>{formik.errors.message}</FormErrorMessage>
          )}
        </FormControl>
        <Button size="lg" type="submit">
          Send Message
        </Button>
      </Stack>
    </form>
  );
};

export default Form;

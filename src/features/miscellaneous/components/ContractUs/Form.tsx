import {
  FormControl,
  FormLabel,
  FormErrorMessage,
  FormHelperText,
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
        <FormControl isRequired>
          <FormLabel>Name</FormLabel>
          <Input
            type="name"
            id="name"
            name="name"
            value={formik.values.name}
            onChange={formik.handleChange}
          />
          {/* <FormHelperText>Please dont leave Name field empty</FormHelperText> */}
        </FormControl>
        <FormControl isRequired>
          <FormLabel htmlFor="email">Email</FormLabel>
          <Input
            type="email"
            id="email"
            name="email"
            value={formik.values.email}
            onChange={formik.handleChange}
          />
          {/* <FormHelperText>Please dont leave Name field empty</FormHelperText> */}
        </FormControl>
        <FormControl isRequired>
          <FormLabel>Message</FormLabel>
          <Textarea
            size="sm"
            id="message"
            name="message"
            value={formik.values.message}
            onChange={formik.handleChange}
          />
          {/* <FormHelperText>Please dont leave Name field empty</FormHelperText> */}
        </FormControl>
        <Button size="lg" type="submit">
          Send Message
        </Button>
      </Stack>
    </form>
  );
};

export default Form;

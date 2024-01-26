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

import { useFormik } from "formik";

const Form = () => {
  const formik = useFormik({
    initialValues: {
      name: "",
      email: "",
      message: "",
    },
    onSubmit: (values) => {
      console.log(values);
    },
  });
  return (
    <Stack spacing={"40px"} width={"30vw"}>
      <form onSubmit={formik.handleSubmit}>
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
          <FormLabel>Email</FormLabel>
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
          <Textarea size="sm" />
          {/* <FormHelperText>Please dont leave Name field empty</FormHelperText> */}
        </FormControl>
      </form>
      <Button size="lg">Send Message</Button>
    </Stack>
  );
};

export default Form;

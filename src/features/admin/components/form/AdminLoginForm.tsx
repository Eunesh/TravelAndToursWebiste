import {
  Box,
  Button,
  FormControl,
  FormErrorMessage,
  Input,
  InputGroup,
  InputLeftElement,
  Stack,
  Text,
} from "@chakra-ui/react";
import { useFormik } from "formik";

// ICON
import EmailIcon from "@mui/icons-material/Email";
import PasswordInput from "../../../../components/common/form/PasswordInput";
import loginSchema from "../../schemas/loginSchema";
import { useNavigate } from "react-router-dom";
// ICON

type LoginValues = {
  email: string;
  password: string;
};

const AdminLoginForm = () => {
  const navigate = useNavigate();
  const formik = useFormik({
    validationSchema: loginSchema,
    initialValues: { email: "", password: "" },
    enableReinitialize: true,
    onSubmit: (values: LoginValues) => {
      console.log(values);
      navigate("/admin/");
    },
  });
  return (
    <Box p={"30px"} borderRadius={"10px"} bg="white" maxW="500px" w="full">
      <Text fontSize="3xl" fontWeight={700} color="pink.700">
        Admin Login
      </Text>
      <form onSubmit={formik.handleSubmit} style={{ marginTop: "30px" }}>
        <Stack spacing={4}>
          <FormControl
            isInvalid={Boolean(formik.touched.email && formik.errors.email)}
          >
            <InputGroup size="lg">
              <InputLeftElement pointerEvents="none" color="gray.300">
                <EmailIcon />
              </InputLeftElement>
              <Input
                name="email"
                onChange={formik.handleChange}
                value={formik.values.email}
                errorBorderColor="red.500"
                placeholder="Email Address"
              />
            </InputGroup>
            {formik.errors.email && (
              <FormErrorMessage>{formik.errors.email}</FormErrorMessage>
            )}
          </FormControl>
          <FormControl
            isInvalid={Boolean(
              formik.touched.password && formik.errors.password
            )}
          >
            <PasswordInput
              name="password"
              onChange={formik.handleChange}
              value={formik.values.password}
              errorBorderColor="red.500"
              placeholder="Password"
            />
            {formik.errors.password && (
              <FormErrorMessage>{formik.errors.password}</FormErrorMessage>
            )}
          </FormControl>
          <Button type="submit">Submit</Button>
        </Stack>
      </form>
    </Box>
  );
};

export default AdminLoginForm;

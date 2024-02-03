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
import { Link, useNavigate } from "react-router-dom";
import { AdminLoginType } from "../../types/adminTypes";

// ICON
import EmailIcon from "@mui/icons-material/Email";
import PasswordInput from "../../../../components/common/form/PasswordInput";
import loginSchema from "../../schemas/loginSchema";
import { loginAdminFN } from "../../query/AuthQueries";
import { useDispatch } from "react-redux";
import { setAdminSession } from "../../slice/sessionSlice";
import { toast } from "react-toastify";
// ICON

const AdminLoginForm = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const formik = useFormik({
    validationSchema: loginSchema,
    initialValues: { email: "", password: "" },
    enableReinitialize: true,
    onSubmit: (values: AdminLoginType) => {
      loginAdminFN(values)
        .then((res) => res.data)
        .then((data) => {
          dispatch(setAdminSession(data.admin));
          navigate("/admin/protected");
        })
        .catch((error) => {
          toast.error(error.message);
        });
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
                onBlur={formik.handleBlur}
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
              onBlur={formik.handleBlur}
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
      <Text
        mt={"16px"}
        color="blue.700"
        textDecoration={"underline"}
        textAlign={"right"}
      >
        <Link to="/" style={{ marginTop: "20px" }}>
          Go to home page
        </Link>
      </Text>
    </Box>
  );
};

export default AdminLoginForm;

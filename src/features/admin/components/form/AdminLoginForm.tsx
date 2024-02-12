import { useDispatch } from "react-redux";
import { toast } from "react-toastify";
import { Box, Text } from "@chakra-ui/react";
import { Formik } from "formik";
import { Link, useNavigate } from "react-router-dom";
import { AdminLoginType } from "../../types/adminTypes";
import { loginAdminFN } from "../../query/AuthQueries";
import { setAdminSession } from "../../slice/sessionSlice";
import loginSchema from "../../schemas/loginSchema";
import LoginFormComponents from "./LoginFormComponents";

const AdminLoginForm = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const handleSubmit = (values: AdminLoginType) => {
    loginAdminFN(values)
      .then((res) => res.data)
      .then((data) => {
        dispatch(setAdminSession(data.admin));
        navigate("/admin/protected");
      })
      .catch((error) => {
        toast.error(error.message);
      });
  };
  return (
    <Box p={"30px"} borderRadius={"10px"} bg="white" maxW="500px" w="full">
      <Text fontSize="3xl" fontWeight={700} color="pink.700">
        Admin Login
      </Text>
      <Formik
        initialValues={{ email: "", password: "" }}
        validationSchema={loginSchema}
        enableReinitialize={true}
        validateOnBlur={true}
        onSubmit={handleSubmit}
      >
        <LoginFormComponents />
      </Formik>
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

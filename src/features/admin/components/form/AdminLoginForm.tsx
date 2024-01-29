import {
  Box,
  Button,
  Input,
  InputGroup,
  InputLeftElement,
  Stack,
  Text,
} from "@chakra-ui/react";

// ICON
import EmailIcon from "@mui/icons-material/Email";
import PasswordInput from "../../../../components/common/form/PasswordInput";
// ICON

const AdminLoginForm = () => {
  return (
    <Box p={"30px"} borderRadius={"10px"} bg="white" maxW="500px" w="full">
      <Text fontSize="3xl" fontWeight={700} color="pink.700">
        Admin Login
      </Text>
      <Stack as={"form"} mt={8} spacing={4}>
        <InputGroup size="lg">
          <InputLeftElement pointerEvents="none" color="gray.300">
            <EmailIcon />
          </InputLeftElement>
          <Input type="email" placeholder="Email Address" />
        </InputGroup>
        <PasswordInput placeholder="Password" />
        <Button type="submit">Submit</Button>
      </Stack>
    </Box>
  );
};

export default AdminLoginForm;

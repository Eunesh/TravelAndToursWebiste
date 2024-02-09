import { useFormikContext } from "formik";
import { Button, Center, CircularProgress, Stack } from "@chakra-ui/react";
import PasswordInput from "../../../../components/common/form/PasswordInput";
import TextInput from "../../../../components/common/form/TextInput";

// ICON
import EmailIcon from "@mui/icons-material/Email";
// ICON

const LoginFormComponents = () => {
  const { handleSubmit, isSubmitting } = useFormikContext();
  return (
    <form onSubmit={handleSubmit} style={{ marginTop: "30px" }}>
      <Stack spacing={4}>
        <TextInput
          name="email"
          placeholder="Email Address"
          icon={() => <EmailIcon />}
        />
        <PasswordInput name="password" placeholder="Password" />
        {isSubmitting ? (
          <Center>
            <CircularProgress isIndeterminate color="green.300" size="40px" />
          </Center>
        ) : (
          <Button type="submit">Submit</Button>
        )}
      </Stack>
    </form>
  );
};

export default LoginFormComponents;

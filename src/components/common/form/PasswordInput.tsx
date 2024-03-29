import { FC, useState } from "react";
import {
  FormControl,
  FormErrorMessage,
  Input,
  InputGroup,
  InputLeftElement,
} from "@chakra-ui/react";
import { useField } from "formik";

// ICONS
import VisibilityIcon from "@mui/icons-material/Visibility";
import VisibilityOffIcon from "@mui/icons-material/VisibilityOff";
// ICONS

interface IPasswordInput {
  name: string;
  placeholder: string;
}
const PasswordInput: FC<IPasswordInput> = ({ name, placeholder }) => {
  const [show, setShow] = useState(false);
  const toggleShow = () => {
    setShow(!show);
  };

  const [field, meta] = useField(name);
  return (
    <FormControl isInvalid={Boolean(meta.touched && meta.error)}>
      <InputGroup size="lg">
        <Input
          type={show ? "text" : "password"}
          name={name}
          onChange={field.onChange}
          onBlur={field.onBlur}
          value={field.value}
          errorBorderColor="red.500"
          placeholder={placeholder}
        />
        <InputLeftElement
          cursor="pointer"
          onClick={toggleShow}
          color={"gray.300"}
        >
          {show ? <VisibilityIcon /> : <VisibilityOffIcon />}
        </InputLeftElement>
      </InputGroup>
      <FormErrorMessage>{meta.error}</FormErrorMessage>
    </FormControl>
  );
};

export default PasswordInput;

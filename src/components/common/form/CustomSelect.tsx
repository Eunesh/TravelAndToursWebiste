import { FC } from "react";
import { FormControl, FormErrorMessage, Select } from "@chakra-ui/react";
import { useField } from "formik";
import { DDType } from "../../../types/commonTypes";

interface ICustomSelect {
  name: string;
  placeholder: string;
  options: Array<DDType>;
}
const CustomSelect: FC<ICustomSelect> = ({ name, placeholder, options }) => {
  const [field, meta, helper] = useField(name);
  return (
    <FormControl isInvalid={Boolean(meta.touched && meta.error)}>
      <Select
        size="lg"
        placeholder={placeholder}
        onChange={(e) => {
          helper.setValue(e.target.value);
        }}
        value={field.value}
        errorBorderColor="red.500"
      >
        {options.map((option: DDType) => (
          <option key={option.id} value={option.id}>
            {option.name}
          </option>
        ))}
      </Select>
      <FormErrorMessage>{meta.error}</FormErrorMessage>
    </FormControl>
  );
};

export default CustomSelect;

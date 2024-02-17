import { Stack } from "@chakra-ui/react";
import { useFormikContext } from "formik";
import TextInput from "../../../../components/common/form/TextInput";
import SubmitBtnOrProgressSpinner from "../miscellaneous/SubmitBtnOrProgressSpinner";

// ICON
import AirplaneTicketIcon from "@mui/icons-material/AirplaneTicket";
import WysiwygField from "../../../../components/wysiwyg/WysiwygField";
import SelectPlaceDD from "./SelectPlaceDD";
// ICON

const AddEventFormComponents = () => {
  const { handleSubmit, isSubmitting } = useFormikContext();
  return (
    <form onSubmit={handleSubmit}>
      <Stack spacing={4}>
        <TextInput
          name="name"
          placeholder="Enter the event name..."
          icon={() => <AirplaneTicketIcon />}
        />

        <SelectPlaceDD />

        <WysiwygField name="description" label="Add A Description" />
        <SubmitBtnOrProgressSpinner isSubmitting={isSubmitting} />
      </Stack>
    </form>
  );
};

export default AddEventFormComponents;

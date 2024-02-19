import { Stack } from "@chakra-ui/react";
import { useFormikContext } from "formik";
import TextInput from "../../../../components/common/form/TextInput";
import SubmitBtnOrProgressSpinner from "../miscellaneous/SubmitBtnOrProgressSpinner";

// ICON
import PlaceIcon from "@mui/icons-material/Place";
import WysiwygField from "../../../../components/wysiwyg/WysiwygField";
import AddBannerImageField from "./AddBannerImageField";
import AddGalleryImageSection from "./AddGalleryImageSection";
// ICON

const AddPlaceFormComponents = () => {
  const { handleSubmit, isSubmitting } = useFormikContext();
  return (
    <form onSubmit={handleSubmit}>
      <Stack spacing={4}>
        <TextInput
          name="name"
          placeholder="Enter the place name..."
          icon={() => <PlaceIcon />}
        />
        <WysiwygField name="description" label="Add A Description" />
        <AddBannerImageField />
        <AddGalleryImageSection />
        <SubmitBtnOrProgressSpinner isSubmitting={isSubmitting} />
      </Stack>
    </form>
  );
};

export default AddPlaceFormComponents;

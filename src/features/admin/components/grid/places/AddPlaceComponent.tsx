// ICON
import { Button } from "@chakra-ui/react";
import AddIcon from "@mui/icons-material/Add";
// ICON

const AddPlaceComponent = () => {
  return (
    <Button
      justifySelf={"flex-end"}
      alignSelf={'flex-end'}
      colorScheme="blue"
      variant="solid"
      leftIcon={<AddIcon />}
    >
      Place
    </Button>
  );
};

export default AddPlaceComponent;

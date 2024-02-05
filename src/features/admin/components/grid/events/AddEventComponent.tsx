import { Button } from "@chakra-ui/react";

// ICON
import AddIcon from "@mui/icons-material/Add";
// ICON

const AddEventComponent = () => {
  return (
    <Button
      justifySelf={"flex-end"}
      alignSelf={"flex-end"}
      colorScheme="blue"
      variant="solid"
      leftIcon={<AddIcon />}
    >
      Event
    </Button>
  );
};

export default AddEventComponent;

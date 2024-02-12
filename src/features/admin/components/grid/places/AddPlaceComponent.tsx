import { Button, useDisclosure } from "@chakra-ui/react";
import AddPlaceModal from "../../modals/place/AddPlaceModal";

// ICON
import AddIcon from "@mui/icons-material/Add";
// ICON

const AddPlaceComponent = () => {
  const { isOpen, onClose, onOpen } = useDisclosure();
  return (
    <>
      <Button
        justifySelf={"flex-end"}
        alignSelf={"flex-end"}
        colorScheme="blue"
        variant="solid"
        leftIcon={<AddIcon />}
        onClick={onOpen}
      >
        Place
      </Button>
      <AddPlaceModal isOpen={isOpen} onClose={onClose} />
    </>
  );
};

export default AddPlaceComponent;

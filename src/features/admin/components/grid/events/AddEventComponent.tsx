import { Button, useDisclosure } from "@chakra-ui/react";
import AddEventModal from "../../modals/event/AddEventModal";

// ICON
import AddIcon from "@mui/icons-material/Add";
import EditEventModal from "../../modals/event/EditEventModal";
// ICON

const AddEventComponent = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();
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
        Event
      </Button>
      <AddEventModal isOpen={isOpen} onClose={onClose} />
      <EditEventModal />
    </>
  );
};

export default AddEventComponent;

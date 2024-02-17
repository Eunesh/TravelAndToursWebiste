import { FC } from "react";
import { Button, Flex } from "@chakra-ui/react";

// ICONS
import EditIcon from "@mui/icons-material/Edit";
import DeleteIcon from "@mui/icons-material/Delete";
// ICONS

interface IRenderActions {
  onEdit: () => void;
  onDelete: () => void;
}
const RenderActions: FC<IRenderActions> = ({ onEdit, onDelete }) => {
  return (
    <Flex gap={4} alignItems="center" h="100%">
      <Button size="sm" onClick={onEdit} title="Edit" colorScheme="purple">
        <EditIcon fontSize="small" />
      </Button>
      <Button size="sm" onClick={onDelete} title="Delete" colorScheme="red">
        <DeleteIcon fontSize="small" />
      </Button>
    </Flex>
  );
};

export default RenderActions;

import { FC } from "react";
import RenderActions from "./RenderActions";
import { useDispatch } from "react-redux";
import { useDeleteEventMutation } from "../../../../../generated/graphql";
import { toast } from "react-toastify";
import {
  deleteEventFromGrid,
  selectEventToEdit,
} from "../../../../events/slice/eventSlice";

interface IRenderEventActions {
  value: number;
}

const RenderEventActions: FC<IRenderEventActions> = ({ value }) => {
  const dispatch = useDispatch();
  const [deleteEventCallback] = useDeleteEventMutation();

  const onEdit = () => {
    dispatch(selectEventToEdit());
  };
  const onDelete = () => {
    deleteEventCallback({ variables: { id: String(value) } })
      .then((response) => response.data)
      .then((data) => {
        if (
          data?.deleteEvent &&
          data.deleteEvent != "Failed to delete the event"
        ) {
          toast.success(data.deleteEvent);
          dispatch(deleteEventFromGrid());
        } else {
          toast.error("Sorry, cannot delete the event.");
        }
      })
      .catch((error) => {
        toast.error(error.message);
      });
  };
  return <RenderActions onEdit={onEdit} onDelete={onDelete} />;
};

export default RenderEventActions;

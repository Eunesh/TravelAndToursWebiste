import { FC } from "react";
import RenderActions from "./RenderActions";
import { useDispatch } from "react-redux";
import { useDeletePlaceMutation } from "../../../../../generated/graphql";
import { toast } from "react-toastify";
import {
  deletePlaceFromGrid,
  selectPlaceToEdit,
} from "../../../../places/slice/placeSlice";

interface IRenderPlaceActions {
  value: number;
}

const RenderPlaceActions: FC<IRenderPlaceActions> = ({ value }) => {
  const dispatch = useDispatch();
  const [deletePlaceCallback] = useDeletePlaceMutation();

  const onEdit = () => {
    dispatch(selectPlaceToEdit());
  };
  const onDelete = () => {
    deletePlaceCallback({ variables: { id: String(value) } })
      .then((response) => response.data)
      .then((data) => {
        if (
          data?.deletePlace &&
          data.deletePlace != "Failed to delete the place"
        ) {
          toast.success(data.deletePlace);
          dispatch(deletePlaceFromGrid());
        } else {
          toast.error("Sorry, cannot delete the place.");
        }
      })
      .catch((error) => {
        toast.error(error.message);
      });
  };
  return <RenderActions onEdit={onEdit} onDelete={onDelete} />;
};

export default RenderPlaceActions;

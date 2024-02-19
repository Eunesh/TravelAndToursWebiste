import { FC } from "react";
import { IModal } from "../ModalTypesNInterfaces";
import ModalContainer from "../ModalContainer";
import { AddPlaceType } from "../../../../places/types/placeTypes";
import { Formik } from "formik";
import { addPlaceSchema } from "../../../schemas/placeSchemas";
import AddPlaceFormComponents from "../../form/AddPlaceFormComponents";
import { useCreatePlaceMutation } from "../../../../../generated/graphql";
import { toast } from "react-toastify";
import { addPlace } from "../../../../places/slice/placeSlice";
import { useDispatch } from "react-redux";

const AddPlaceModal: FC<IModal> = ({ isOpen, onClose }) => {
  const [createPlace] = useCreatePlaceMutation();
  const dispatch = useDispatch();
  const handleSubmit = (values: AddPlaceType, { setSubmitting }: any) => {
    createPlace({ variables: values })
      .then((response) => response.data)
      .then((data) => data?.createPlace)
      .then((place: any) => {
        if (place) {
          toast.success(`${place.name} created successfully`);
          dispatch(addPlace(place));
        }
      })
      .catch((error) => {
        toast.error(error.message);
      })
      .finally(() => {
        setSubmitting(false);
        onClose();
      });
  };
  return (
    <ModalContainer
      isOpen={isOpen}
      hasFooter={false}
      onClose={onClose}
      title="Add A New Place"
    >
      <Formik
        initialValues={{ name: "", description: "" }}
        validationSchema={addPlaceSchema}
        enableReinitialize={true}
        validateOnBlur={true}
        onSubmit={handleSubmit}
      >
        <AddPlaceFormComponents />
      </Formik>
    </ModalContainer>
  );
};

export default AddPlaceModal;

import { FC } from "react";
import { IModal } from "../ModalTypesNInterfaces";
import ModalContainer from "../ModalContainer";
import { AddPlaceType } from "../../../../places/types/placeTypes";
import { Formik } from "formik";
import { addPlaceSchema } from "../../../schemas/placeSchemas";
import AddPlaceFormComponents from "../../form/AddPlaceFormComponents";

const AddPlaceModal: FC<IModal> = ({ isOpen, onClose }) => {
  const handleSubmit = (values: AddPlaceType) => {
    console.log(values);
    // Some logic
  };
  return (
    <ModalContainer isOpen={isOpen} onClose={onClose} title="Add A New Place">
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

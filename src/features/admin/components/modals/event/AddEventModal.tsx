import { FC } from "react";
import { IModal } from "../ModalTypesNInterfaces";
import ModalContainer from "../ModalContainer";
import { AddEventType } from "../../../../events/types/eventTypes";
import { Formik } from "formik";
import { addEventSchema } from "../../../schemas/eventSchemas";
import AddEventFormComponents from "../../form/AddEventFormComponents";

const AddEventModal: FC<IModal> = ({ isOpen, onClose }) => {
  const handleSubmit = (values: AddEventType) => {
    // Some logic
    console.log(values);
  };
  return (
    <ModalContainer isOpen={isOpen} onClose={onClose} title="Add A New Event">
      <Formik
        initialValues={{ name: "", description: "", placeId: "" }}
        validationSchema={addEventSchema}
        enableReinitialize={true}
        validateOnBlur={true}
        onSubmit={handleSubmit}
      >
        <AddEventFormComponents />
      </Formik>
    </ModalContainer>
  );
};

export default AddEventModal;

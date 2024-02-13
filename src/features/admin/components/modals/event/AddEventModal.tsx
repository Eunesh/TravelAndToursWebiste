import { FC } from "react";
import { IModal } from "../ModalTypesNInterfaces";
import ModalContainer from "../ModalContainer";
import { AddEventType } from "../../../../events/types/eventTypes";
import { Formik } from "formik";
import { addEventSchema } from "../../../schemas/eventSchemas";
import AddEventFormComponents from "../../form/AddEventFormComponents";
import { useCreateEventMutation } from "../../../../../generated/graphql";
import { useDispatch } from "react-redux";
import { toast } from "react-toastify";
import { addEvent } from "../../../../events/slice/eventSlice";

const AddEventModal: FC<IModal> = ({ isOpen, onClose }) => {
  const [createEvent] = useCreateEventMutation();
  const dispatch = useDispatch();
  const handleSubmit = (values: AddEventType, { setSubmitting }: any) => {
    createEvent({ variables: values })
      .then((response) => response.data)
      .then((data) => data?.createEvent)
      .then((event: any) => {
        if (event) {
          toast.success(`${event.name} created successfully.`);
          dispatch(addEvent(event));
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

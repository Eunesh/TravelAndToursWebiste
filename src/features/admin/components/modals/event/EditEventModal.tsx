import { useMemo } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  clearSelectedEvent,
  selectSelectedEvent,
  updateEventInGrid,
} from "../../../../events/slice/eventSlice";
import { EditEventType } from "../../../../events/types/eventTypes";
import ModalContainer from "../ModalContainer";
import AddEventFormComponents from "../../form/AddEventFormComponents";
import { Formik } from "formik";
import { addEventSchema } from "../../../schemas/eventSchemas";
import { useUpdateEventMutation } from "../../../../../generated/graphql";
import { toast } from "react-toastify";

const EditEventModal = () => {
  const [updateEvent] = useUpdateEventMutation();
  const dispatch = useDispatch();
  const selectedEvent = useSelector(selectSelectedEvent);
  const isOpen = useMemo(() => !!selectedEvent, [selectedEvent]);
  const onClose = () => {
    dispatch(clearSelectedEvent());
  };
  const handleSubmit = (values: EditEventType, { setSubmitting }: any) => {
    updateEvent({ variables: values })
      .then((response) => response.data)
      .then((data) => data?.updateEvent)
      .then((event: any) => {
        if (event) {
          toast.success(`${event.name} updated successfully`);
          dispatch(updateEventInGrid(event));
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
    <>
      {isOpen && (
        <ModalContainer
          isOpen={isOpen}
          onClose={onClose}
          title={`Edit ${selectedEvent.name}`}
        >
          <Formik
            initialValues={{
              id: selectedEvent.id,
              name: selectedEvent.name,
              description: selectedEvent.description,
              placeId: selectedEvent.place.id,
            }}
            validationSchema={addEventSchema}
            enableReinitialize={true}
            validateOnBlur={true}
            onSubmit={handleSubmit}
          >
            <AddEventFormComponents />
          </Formik>
        </ModalContainer>
      )}
    </>
  );
};

export default EditEventModal;

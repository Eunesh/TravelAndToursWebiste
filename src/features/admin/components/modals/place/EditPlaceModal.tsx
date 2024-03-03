import { useMemo } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  clearSelectedPlace,
  selectSelectedPlace,
  updatePlaceInGrid,
} from "../../../../places/slice/placeSlice";
import { EditPlaceType } from "../../../../places/types/placeTypes";
import ModalContainer from "../ModalContainer";
import { Formik } from "formik";
import { addPlaceSchema } from "../../../schemas/placeSchemas";
import AddPlaceFormComponents from "../../form/AddPlaceFormComponents";
import { useUpdatePlaceMutation } from "../../../../../generated/graphql";
import { toast } from "react-toastify";
import { getUpdatePlaceDS } from "../../../utils/processEventAndPlaces";

const EditPlaceModal = () => {
  const [updatePlace] = useUpdatePlaceMutation();
  const dispatch = useDispatch();
  const selectedPlace = useSelector(selectSelectedPlace);
  const isOpen = useMemo(() => !!selectedPlace, [selectedPlace]);
  const onClose = () => {
    dispatch(clearSelectedPlace());
  };
  const handleSubmit = (values: EditPlaceType, { setSubmitting }: any) => {
    const editData = getUpdatePlaceDS(values)
    updatePlace({ variables: editData })
      .then((response) => response.data)
      .then((data) => data?.updatePlace)
      .then((place: any) => {
        if (place) {
          toast.success(`${place.name} updated successfully`);
          dispatch(updatePlaceInGrid(place));
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
          hasFooter={false}
          title={`Edit ${selectedPlace.name}`}
        >
          <Formik
            initialValues={{
              id: selectedPlace.id,
              name: selectedPlace.name,
              description: selectedPlace.description,
              banner: selectedPlace.bannerUrl && import.meta.env.VITE_API_BASE_URL + selectedPlace.bannerUrl,
              pictures: selectedPlace.pictureUrls.map((url:string) => import.meta.env.VITE_API_BASE_URL + url),
            }}
            validationSchema={addPlaceSchema}
            enableReinitialize={true}
            validateOnBlur={true}
            onSubmit={handleSubmit}
          >
            <AddPlaceFormComponents />
          </Formik>
        </ModalContainer>
      )}
    </>
  );
};

export default EditPlaceModal;

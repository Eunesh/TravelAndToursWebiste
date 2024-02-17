import useRefetchPlacesDD from "../../hooks/useRefetchPlacesDD";
import { useSelector } from "react-redux";
import { selectPlacesDD } from "../../../places/slice/placeSlice";
import CustomSelect from "../../../../components/common/form/CustomSelect";

const SelectPlaceDD = () => {
  const placesDD = useSelector(selectPlacesDD);
  useRefetchPlacesDD();

  return (
    <>
      {placesDD && (
        <CustomSelect
          name="placeId"
          placeholder="Select a place for the event"
          options={placesDD}
        />
      )}
    </>
  );
};

export default SelectPlaceDD;

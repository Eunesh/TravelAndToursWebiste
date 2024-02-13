import useRefetchPlacesDD from "../../hooks/useRefetchPlacesDD";
import { useSelector } from "react-redux";
import { selectPlacesDD } from "../../../places/slice/placeSlice";
import CustomSelect from "../../../../components/common/form/CustomSelect";

const SelectPlaceDD = () => {
  const placesDD = useSelector(selectPlacesDD);
  useRefetchPlacesDD();

  return (
    <CustomSelect
      name="placeId"
      placeholder="Select an event place"
      options={placesDD}
    />
  );
};

export default SelectPlaceDD;

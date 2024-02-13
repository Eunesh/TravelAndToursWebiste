import { useDispatch, useSelector } from "react-redux";
import { selectPlaceGridApi, setPlacesDD } from "../../places/slice/placeSlice";
import { useEffect, useMemo } from "react";
import { useFetchPlacesDdLazyQuery } from "../../../generated/graphql";

const useRefetchPlacesDD = () => {
  const [fetchPlacesDD] = useFetchPlacesDdLazyQuery();
  const dispatch = useDispatch();
  const gridApi = useSelector(selectPlaceGridApi);

  const rowCount = useMemo(() => {
    if (gridApi) {
      const totalRowCount = gridApi.getModel().getRowCount();
      return totalRowCount;
    } else {
      return 0;
    }
  }, [gridApi]);

  useEffect(() => {
    fetchPlacesDD()
      .then((response) => response.data)
      .then((data) => data?.places)
      .then((places: any) => {
        if (places) {
          dispatch(setPlacesDD(places));
        }
      });
  }, [rowCount, dispatch]);
};

export default useRefetchPlacesDD;

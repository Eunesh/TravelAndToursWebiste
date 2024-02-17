import { useDispatch } from "react-redux";
import { setPlacesDD } from "../../places/slice/placeSlice";
import { useEffect } from "react";
import { useFetchPlacesDdLazyQuery } from "../../../generated/graphql";

const useRefetchPlacesDD = () => {
  const [fetchPlacesDD] = useFetchPlacesDdLazyQuery();
  const dispatch = useDispatch();

  useEffect(() => {
    fetchPlacesDD()
      .then((response) => response.data)
      .then((data) => data?.places)
      .then((places: any) => {
        if (places) {
          dispatch(setPlacesDD(places));
        }
      });
  }, [dispatch]);
};

export default useRefetchPlacesDD;

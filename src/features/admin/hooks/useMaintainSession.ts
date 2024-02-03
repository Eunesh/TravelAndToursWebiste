import { useEffect } from "react";
import { getSessionAdmin } from "../../../utils/cookieFunctions";
import { useDispatch } from "react-redux";
import { clearAdminSession, setAdminSession } from "../slice/sessionSlice";

const useMaintainSession = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    const admin = getSessionAdmin();
    if (admin) {
      dispatch(setAdminSession(admin));
    } else {
      dispatch(clearAdminSession());
    }
  }, [dispatch]);
};

export default useMaintainSession;

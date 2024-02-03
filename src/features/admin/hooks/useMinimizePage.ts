import { useEffect, useState } from "react";

const useMinimizePage = (initialState: boolean) => {
  const [minimized, setMinimized] = useState(initialState);
  // Delayed Minimized triggers the collaped text of the minimized sidebar to display only after
  // the sidebar has been fully extended.
  // This prevents the ugly overflow of extra text/information to appear during the transition.
  const [delayedMinimized, setDelayedMinimized] = useState(initialState);

  const toogleMinimized = () => {
    setMinimized(!minimized);
  };

  useEffect(() => {
    if (delayedMinimized != minimized) {
      if (minimized == false) {
        setTimeout(() => {
          setDelayedMinimized(false);
        }, 200);
      } else {
        setDelayedMinimized(true);
      }
    }
  }, [minimized]); // eslint-disable-line react-hooks/exhaustive-deps
  return { minimized, delayedMinimized, toogleMinimized };
};

export default useMinimizePage;

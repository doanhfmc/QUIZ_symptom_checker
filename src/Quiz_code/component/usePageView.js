// Quiz_code/component/GAListener.jsx
import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import ReactGA from "react-ga4";

const usePageView = () => {
  const location = useLocation();

  useEffect(() => {
    ReactGA.send({
      hitType: "pageview",
      page: location.pathname + location.hash,
    });
  }, [location]);

  return null; // ❗ Không render gì cả
};

export default usePageView;

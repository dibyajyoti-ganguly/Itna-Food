import { useState, useEffect } from "react";
import { DMENU_URL, AMENU_URL } from "../utils/constants";
import useWindowSize from "./useWindowSize";

const useRestaurantMenu = (resId) => {
  const [resInfo, setResInfo] = useState(null);
  const isMobileView = useWindowSize();

  useEffect(() => {
    fetchData();
  }, [isMobileView]);

  async function fetchData() {
    const data = await fetch(
      isMobileView == 1 ? AMENU_URL + resId : DMENU_URL + resId
    );
    const json = await data.json();
    setResInfo(json.data);
  }

  return resInfo;
};

export default useRestaurantMenu;

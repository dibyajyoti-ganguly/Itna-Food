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
      isMobileView == 1
        ? "https://itna-food-backend.onrender.com/mapi/" + resId
        : "https://itna-food-backend.onrender.com/dapi/" + resId
    );
    const json = await data.json();
    setResInfo(json.data);
  }

  return resInfo;
};

export default useRestaurantMenu;
